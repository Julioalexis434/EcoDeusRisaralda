import React from "react";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
import { ContextModalLogin } from "./Context/ContextModalLogin";

const LoginModal = () => {
  const { Logout } = useContext(AuthContext);
  const { showLoginModal, toggleLoginModal, modalMessage } = useContext(ContextModalLogin);
  const handleLogin = async () => {
    await Logout();
    window.location.href = "/authentification";
  };
  return (
    <>
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark2 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              {modalMessage || "Iniciar sesion"}
            </h2>
            <p className="mb-6 dark:text-gray-300">
              {"Debes iniciar sesión para hacer esta acción"}
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  toggleLoginModal();
                  document.body.classList.remove("overflow-hidden");
                }}
                className="px-4 py-2 text-gray-200 bg-gray-500 hover:text-gray-800 dark:hover:text-white cursor-pointer rounded-lg"
              >
                Cancelar
              </button>
              <button
                className="bg-green-600 text-white px-4 rounded-lg"
                onClick={handleLogin}
              >
                Iniciar sesion
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
