import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

const Profile = () => {
    // OBTENIENDO LA INFORMACION DEL USUARIO DE AUTH0 
  const { user } = useAuth0();
//   ESTADO DEL FORMULARIO (EDITABLE O NO EDITABLE)
  const [isEditing, setIsEditing] = useState(false);
//   ESTADO DEL FORMULARIO (VALORES DE LOS INPUTS)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

//  ACTUAIZAR EL ESTADO DE LOS INPUTS
  const handleInputChange = (e) => {
    // SACANDO LOS VALORES NAME Y VALUE DE LOS INPUTS PARA ACTUALIZAR EL ESTADO DE LOS CAMPOS
    const { name, value } = e.target;
    // ACTUALIZANDO EL ESTADO DE LOS CAMPOS
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


// CAMBIAR EL ESTADO DEL FORMULARIO A EDITABLE
  const handleEdit = () => {
    // CAMBIANDO EL ESTADO DEL FORMULARIO A EDITABLE
    setIsEditing(true);
  };

//   CANCELAR LOS CAMBIOS
  const handleCancel = () => {
    // CAMBIANDO EL ESTADO DEL FORMULARIO A NO EDITABLE
    setIsEditing(false);
    // ACTUALIZANDO EL ESTADO DE LOS CAMPOS CON LOS VALORES ORIGINALES
    setFormData({
      name: user.name,
      email: user.email,
    });
  };
// GUARDAR LOS CAMBIOS
  const handleUpdate = (e) => {
    // EVITANDO QUE EL FORMULARIO SE ENVIE 
    e.preventDefault();
    // ACTUALIZANDO EL ESTADO DEL FORMULARIO A NO EDITABLE
    setIsEditing(false);
  };

  return (
    <div className="p-2  mx-auto">
      <div className="bg-white rounded-lg p-6">
        {/* FORMULARIO */}
        <form onSubmit={handleUpdate}>
            {/* INPUTS */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-y-10'>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={isEditing ? formData.name : user.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg ${isEditing ? 'bg-white text-black' : 'bg-gray-100 text-gray-500'}`}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={isEditing ? formData.email : user.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg ${isEditing ? 'bg-white text-black' : 'bg-gray-100 text-gray-500'}`}
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Verificado
            </label>
            <input
              type="text"
              value={user.email_verified ? "Yes" : "No"}
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500"
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              última Actualización
            </label>
            <input
              type="text"
              value={new Date(user.updated_at).toLocaleDateString()}
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500"
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
