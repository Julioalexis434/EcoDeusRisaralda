import { useState, useEffect } from "react";
import ContainterText from "../Global/ContainerText";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  // OBTENIENDO LA INFORMACION DEL USUARIO DE AUTH0
  const { user, UpdateProfile, setLoading } = useContext(AuthContext);
  //   ESTADO DEL FORMULARIO (EDITABLE O NO EDITABLE)
  const [isEditing, setIsEditing] = useState(false);
  //  (MENSAJE DE ERROR)
  const [error, setError] = useState("");
  //   ESTADO DEL FORMULARIO (VALORES DE LOS INPUTS)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Initialize form data when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.user_metadata.full_name || user?.user_metadata?.displayName || "",
        email: user.email || user?.user_metadata?.email || "",
      });
    }
  }, [user]);

  const typeAccount = localStorage.getItem("typeAccount");

  //  ACTUAIZAR EL ESTADO DE LOS INPUTS
  const handleInputChange = (e) => {
    // SACANDO LOS VALORES NAME Y VALUE DE LOS INPUTS PARA ACTUALIZAR EL ESTADO DE LOS CAMPOS
    const { name, value } = e.target;
    // ACTUALIZANDO EL ESTADO DE LOS CAMPOS
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CAMBIAR EL ESTADO DEL FORMULARIO A EDITABLE
  const handleEdit = () => {
    // CAMBIANDO EL ESTADO DEL FORMULARIO A EDITABLE
    if(typeAccount === "Empresa"){
      setIsEditing(true);
    }else{
      setIsEditing(false);
      alert("Solo los usuarios de tipo empresa pueden modificar su cuenta")
    }
  };

  //   CANCELAR LOS CAMBIOS
  const handleCancel = () => {
    // CAMBIANDO EL ESTADO DEL FORMULARIO A NO EDITABLE
    setIsEditing(false);
    // ACTUALIZANDO EL ESTADO DE LOS CAMPOS CON LOS VALORES ORIGINALES
    setFormData({
      name: user.user_metadata.full_name || user?.user_metadata?.displayName || "",
      email: user.email || user?.user_metadata?.email || "",
    });
  };

  // GUARDAR LOS CAMBIOS
  const handleUpdate = async (e) => {
    // PREVENIENDO EL COMPORTAMIENTO POR DEFECTO DEL FORMULARIO
    e.preventDefault();
    setError("");
    try {
      await UpdateProfile(formData.email, formData.name);
      alert("Perfil actualizado correctamente");
    } catch (error) {
      alert("Error al actualizar el perfil: " + error.message);
    }
    // CAMBIANDO EL ESTADO DEL FORMULARIO A NO EDITABLE
    setIsEditing(false);
  };

  return (
    <div className="p-2 min-h-screen mx-auto ">
      <div className="bg-white dark:bg-dark rounded-lg p-6">
        {/* Agregar error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">{error}</span>
          </div> 
        )}
        {/* FORMULARIO */}
        <form onSubmit={handleUpdate}>
          {/* INPUTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-y-10">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                <ContainterText text={"Nombre"} />
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg ${
                  isEditing
                    ? "bg-white text-black dark:text-white dark:bg-dark"
                    : "bg-gray-100 text-gray-500  dark:bg-dark2"
                }`}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                <ContainterText text={"Email"} />
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 dark:bg-dark2`}
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
              <ContainterText text={"Email verificado"}/>
              </label>
              <input
                type="text"
                value={user.user_metadata.email_verified ? "Si" : "No"}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 dark:bg-dark2"
                disabled
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
              <ContainterText text={"Última actualización"}/>
              </label>
              <input
                type="text"
                value={new Date(user.updated_at).toLocaleDateString()}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 dark:bg-dark2"
                disabled
              />
            </div>
          </div>

          {/* BOTONES */}
          <div className="flex justify-end space-x-2 mt-4">
            {!isEditing ? (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Editar Información
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Guardar Cambios
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
