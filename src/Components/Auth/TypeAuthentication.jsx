import React from "react";
import Anchor from "../Global/Anchor";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { IconCompnay, IconUserLine } from "../Global/Icons";

const TypeAuthentication = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginWithGoogle();
      localStorage.setItem("typeAccount", "Personal");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-3 justify-items-center  mx-auto max-w-7xl">
 
      {/* Cuenta personal */}
      <div className="bg-gray-100 rounded-lg shadow-xl p-6 mb-6 hover:shadow-xl transition-shadow dark:bg-dark2 flex flex-col justify-between w-[90%] ">
        <div className="bg-gray-200 dark:bg-dark rounded-lg p-4 h-40 flex items-center justify-center flex-col">
          <h2 className="text-2xl text-gray-500 font-bold mb-4 text-center">
            Cuenta Personal
          </h2>
          <IconUserLine/>
        </div>

        <p className="text-gray-600 my-4 px-2">Para usuarios individuales</p>

        <ul className="text-gray-600 mb-6 list-disc list-inside">
          <li className="text-green-500 font-medium">Ver información básica</li>
          <li className="text-green-500 font-medium">Guardar destinos</li>
          <li className="text-green-500 font-medium">Guardar restaurantes</li>
          <li className="text-green-500 font-medium">Guardar hoteles</li>
          <li className="text-green-500 font-medium">Hacer comentarios</li>
        </ul>
        <button  className="w-full inline-block text-center bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer" onClick={handleLogin} >
          Iniciar con cuenta personal
        </button>
      </div>

      {/*Cuenta empresarial */}
      <div className="bg-gray-100 rounded-lg shadow-xl p-6 mb-6 hover:shadow-xl transition-shadow dark:bg-dark2 flex flex-col justify-between w-[90%]">
        <div className="bg-gray-200 dark:bg-dark rounded-lg p-4 h-40 flex flex-col items-center justify-center">
          <h2 className="text-2xl text-gray-500 font-bold mb-4 text-ceter">
            Cuenta Empresarial
          </h2>
          <IconCompnay/>
        </div>

        <p className="text-gray-600 my-4 px-2">Para negocios y organizaciones</p>

        <ul className="text-gray-600 mb-6 list-disc list-inside">
          <li className="text-green-500 font-medium">Ver información básica</li>
          <li className="text-green-500 font-medium">Subir destinos</li>
          <li className="text-green-500 font-medium">Guardar destinos</li>
          <li className="text-green-500 font-medium">Guardar restaurantes</li>
          <li className="text-green-500 font-medium">Guardar hoteles</li>
          <li className="text-green-500 font-medium">Hacer comentarios</li>
        </ul>
        <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer" onClick={()=>{
            navigate("/authentification/loginCompany");
        }}>
          Iniciar con cuenta empresarial
        </button>
      </div>

    </section>
  );
};

export default TypeAuthentication;
