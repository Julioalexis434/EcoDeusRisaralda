import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ButtonBack from "../Global/ButtonBack";

const LoginCompany = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await SignIn(email, password);
      localStorage.setItem("typeAccount", "Empresa");
      window.location.href = ("/profile/sucursales"); // Redirect after successful login
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <>
    <section className="min-h-screen p-4 flex flex-col items-center justify-center dark:text-white dark:bg-dark">
      <div className={`w-full max-w-md p-8 space-y-6 bg-white dark:bg-dark2 rounded-xl shadow-lg`}>
        {error && (
          <div className="text-red-500 text-sm bg-red-500/20 border border-red-500 rounded-md p-2 text-center">
            {error}
          </div>
        )}
        <h1 className="text-2xl font-bold tracking-[1px] text-center dark:text-white">
          Inicia sesión con tu cuenta de empresa
        </h1>
        <div className="grid grid-cols-1 gap-6">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              />
            </div>
            <div>
              <p className="text-sm">
                ¿No has registrado tu empresa?{" "}
                <Link to="/authentification/registerCompany" className="underline text-green cursor-pointer">
                  Registrala aquí
                </Link>
              </p>
            </div>
            <div className="flex justify-center w-full">
              <button type="submit" className="bg-green-500 rounded-md px-4 py-2 text-white">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>


   <ButtonBack url={"/authentification"} />
    </>

  );
};

export default LoginCompany;
