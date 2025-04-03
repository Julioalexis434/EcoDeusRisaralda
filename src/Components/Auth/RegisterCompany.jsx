import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const RegisterCompany = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
  const { SignUp, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignUp(email, password, companyName);
      navigate("/");
      console.log(user);
      
      localStorage.setItem("typeAccount", "Empresa");
    } catch (err) {
      setError(err, "-Error al registrarse");
    }
  };

  return (
    <section className="min-h-screen p-4 flex flex-col items-center justify-center dark:text-white dark:bg-dark">
      <div
        className={`w-full max-w-md p-8 space-y-6 bg-white dark:bg-dark2 rounded-xl shadow-lg `}
      >
        {error && (
          <p className="text-red-500 text-sm bg-red-500/20 border border-red-500 rounded md p-2 text-center">
            {error}
          </p>
        )}

        <h1 className="text-2xl font-bold tracking-[1px] text-center dark:text-white">
          Registra tu empresa
        </h1>
        <div className="grid grid-cols-1 gap-6">
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="space-y-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Nombre de la empresa
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                required
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="registerEmail"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Correo electrónico
              </label>
              <input
                id="registerEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="registerPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Contraseña
              </label>
              <input
                id="registerPassword"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              />
            </div>
            <div>
              <p className="text-sm">
                ¿Ya tienes una cuenta registrada?{" "}
                <Link
                  to="/authentification/loginCompany"
                  className="underline text-green cursor-pointer"
                >
                  Inicia sesión
                </Link>
              </p>
            </div>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="bg-green-500 rounded-md px-4 py-2 text-white"
                onSubmit={handleSignUp}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterCompany;
