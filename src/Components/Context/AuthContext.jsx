import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(""); // Estado para manejar errores de inicio de sesión
  const [loading, setLoading] = useState(false); // Estado de carga
  const [typeAccount, setTypeAccount] = useState("");

  useEffect(() => {
    let authListener;
    setTypeAccount(localStorage.getItem("typeAccount"));
    async function setupAuth() {
      setLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);

      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });
      authListener = data;
    }

    setupAuth();

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const SignUp = async (email, password, displayName) => {
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName,
          avatar_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s",
        },
      },
    });
    setTypeAccount(localStorage.getItem("typeAccount"));
    

    if (error) {
      setLoading(false);
      console.error("Error en el registro:", error.message);
      throw error;
    }

    return data;
  };

  const SignIn = async (email, password) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    setTypeAccount(localStorage.getItem("typeAccount"));

    if (error) {
      setLoading(false);
      setError("Error en el registro:", error.message);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    setLoading(false);

    if (error) throw error;

    // Esperar a que la sesión se establezca completamente
    setTimeout(async () => {
      setTypeAccount(localStorage.getItem("typeAccount"));
      const {
        data: { user },
        error: fetchError,
      } = await supabase.auth.getUser();
      if (fetchError) {
        console.error("Error obteniendo usuario:", fetchError.message);
        return;
      }

      const googleFullName = user?.user_metadata?.full_name || "Usuario";
      if (!user?.user_metadata?.displayName) {
        console.log("Actualizando displayName en user_metadata...");

        const { error: updateError } = await supabase.auth.updateUser({
          data: { displayName: googleFullName },
        });

        if (updateError) {
          setError("Error actualizando displayName:", updateError.message);
        } else {
          setError("displayName actualizado correctamente.");
          setUser((prevUser) => ({
            ...prevUser,
            user_metadata: {
              ...prevUser.user_metadata,
              displayName: googleFullName,
            },
          }));
        }
      }
    }, 3000); // Esperar 3 segundos para que la sesión se establezca
  };

  const Logout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);

    if (error) throw error;
  };

  const UploadImage = async (file) => {
    if (!user) throw new Error("Usuario no autenticado");

    setLoading(true);

    // 🔥 1. Eliminar la imagen anterior si existe
    if (user?.user_metadata?.avatar_url) {
      try {
        const urlParts = user.user_metadata.avatar_url.split("/");
        const oldFileName = urlParts[urlParts.length - 1].split("?")[0]; // Asegurar que no haya parámetros en la URL
        const oldFilePath = `avatars/${oldFileName}`; // Ruta completa en Supabase Storage

        const { error: deleteError } = await supabase.storage
          .from("avatars")
          .remove([oldFilePath]);

        if (deleteError) {
          console.error(
            "Error al eliminar la imagen anterior:",
            deleteError.message
          );
        } else {
          console.log("Imagen anterior eliminada con éxito.");
        }
      } catch (error) {
        console.error(
          "Error procesando la eliminación de la imagen anterior:",
          error.message
        );
      }
    }

    // 🔥 2. Generar un nombre único para la nueva imagen
    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}-${Date.now()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    // 🔥 3. Subir la nueva imagen
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      setLoading(false);
      setError("Error al subir la imagen:", uploadError.message);
      throw uploadError;
    }

    // 🔥 4. Obtener la URL pública de la nueva imagen
    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
    if (!data.publicUrl) {
      throw new Error("No se pudo obtener la URL pública de la imagen");
    }

    // 🔥 5. Agregar timestamp para evitar caché
    const newAvatarUrl = `${data.publicUrl}?t=${Date.now()}`;

    // 🔥 6. Actualizar la URL del avatar en el perfil del usuario
    const { error: updateError } = await supabase.auth.updateUser({
      data: { avatar_url: newAvatarUrl },
    });

    setLoading(false);

    if (updateError) throw updateError;

    // 🔥 7. Actualizar el estado local del usuario
    setUser((prevUser) => ({
      ...prevUser,
      user_metadata: {
        ...prevUser.user_metadata,
        avatar_url: newAvatarUrl,
      },
    }));

    return newAvatarUrl;
  };

  const DeleteImage = async () => {
    if (!user || !user.user_metadata.avatar_url) {
      throw new Error("No hay imagen para eliminar");
    }

    setLoading(true);

    const fileName = user.user_metadata.avatar_url.split("/").pop(); // Extrae el nombre del archivo
    const filePath = `avatars/${fileName}`;

    // Eliminar imagen del storage
    const { error: deleteError } = await supabase.storage
      .from("avatars")
      .remove([filePath]);

    if (deleteError) {
      setLoading(false);
      console.error("Error al eliminar la imagen:", deleteError.message);
      throw deleteError;
    }

    // Eliminar avatar del perfil del usuario
    const { error: updateError } = await supabase.auth.updateUser({
      data: {
        avatar_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s",
      },
    });

    setLoading(false);
    window.location.reload(); // Recargar la página para reflejar los cambios ne

    if (updateError) throw updateError;

    // Actualizar estado del usuario
    setUser((prevUser) => ({
      ...prevUser,
      user_metadata: { ...prevUser.user_metadata, avatar_url: null },
    }));

    return true;
  };

  const UpdateProfile = async (newEmail, newDisplayName) => {
    if (!user) throw new Error("Usuario no autenticado");

    setLoading(true);

    const updates = {
      email: newEmail, // Actualiza el correo
      data: { displayName: newDisplayName }, // Actualiza el nombre
    };

    const { error } = await supabase.auth.updateUser(updates);

    setLoading(false);

    if (error) {
      console.error("Error al actualizar perfil:", error.message);
      throw error;
    }

    // 🔥 Actualiza el estado del usuario con los nuevos valores
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail, // Actualiza el email en el estado local
      user_metadata: {
        ...prevUser.user_metadata,
        displayName: newDisplayName, // Actualiza el displayName en el estado local
      },
    }));

    return true;
  };

  const value = {
    user,
    loading,
    typeAccount,
    setLoading,
    error,
    SignIn,
    SignUp,
    UpdateProfile,
    Logout,
    loginWithGoogle,
    UploadImage,
    DeleteImage, // Nueva función para eliminar imagen
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
