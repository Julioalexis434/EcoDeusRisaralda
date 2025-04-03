import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../supabase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga

  useEffect(() => {
    let authListener;

    async function setupAuth() {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
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
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s',
        },
      },
    });
  
    if (error) {
      setLoading(false);
      console.error("Error en el registro:", error.message);
      throw error;
    }

    return data;
  };
  
  const SignIn = async (email, password) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) throw error;
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    setLoading(false);
  
    if (error) throw error;
  
    // Esperar a que la sesión se establezca completamente
    setTimeout(async () => {
      const { data: { user }, error: fetchError } = await supabase.auth.getUser();
      if (fetchError) {
        console.error('Error obteniendo usuario:', fetchError.message);
        return;
      }
  
      const googleFullName = user?.user_metadata?.full_name || 'Usuario';
      if (!user?.user_metadata?.displayName) {
        console.log('Actualizando displayName en user_metadata...');
  
        const { error: updateError } = await supabase.auth.updateUser({
          data: { displayName: googleFullName },
        });
  
        if (updateError) {
          console.error('Error actualizando displayName:', updateError.message);
        } else {
          console.log('displayName actualizado correctamente.');
          setUser((prevUser) => ({
            ...prevUser,
            user_metadata: { ...prevUser.user_metadata, displayName: googleFullName },
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
    if (!user) throw new Error('Usuario no autenticado');
  
    setLoading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`; 
  
    // Subir imagen con `upsert` para reemplazar la anterior
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, { upsert: true });
  
    if (uploadError) {
      setLoading(false);
      console.error('Error al subir la imagen:', uploadError.message);
      throw uploadError;
    }
  
    // Obtener URL pública
    const { data } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);
  
    if (!data.publicUrl) {
      throw new Error('No se pudo obtener la URL pública de la imagen');
    }
  
    // Actualizar avatar en perfil del usuario
    const { error: updateError } = await supabase.auth.updateUser({
      data: { avatar_url: data.publicUrl },
    });

    setLoading(false);
  
    if (updateError) throw updateError;

    // Actualizar estado del usuario
    setUser((prevUser) => ({
      ...prevUser,
      user_metadata: { ...prevUser.user_metadata, avatar_url: data.publicUrl },
    }));

    return data.publicUrl;
  };


  const DeleteImage = async () => {
    if (!user || !user.user_metadata.avatar_url) {
      throw new Error('No hay imagen para eliminar');
    }

    setLoading(true);

    const fileName = user.user_metadata.avatar_url.split('/').pop(); // Extrae el nombre del archivo
    const filePath = `avatars/${fileName}`;

    // Eliminar imagen del storage
    const { error: deleteError } = await supabase.storage
      .from('avatars')
      .remove([filePath]);

    if (deleteError) {
      setLoading(false);
      console.error('Error al eliminar la imagen:', deleteError.message);
      throw deleteError;
    }

    // Eliminar avatar del perfil del usuario
    const { error: updateError } = await supabase.auth.updateUser({
      data: { avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"  },
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
    if (!user) throw new Error('Usuario no autenticado');
  
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
    setLoading,
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
