import React, { useState } from "react";
import ContainerTitle from "../Global/ContainerTitle";
import { motion } from "framer-motion";
import LoginButton from "../Auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Anchor from "../Global/Anchor";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full flex items-center justify-start text-white"
      >
        <video
          src="/video4.mp4"
          autoPlay
          loop
          muted
          className="absolute h-full w-full top-0 left-0 object-cover"
        ></video>

        <div className=" z-3 left-1/2 p-4 w-full grid lg:grid-cols-2 justify-center text-center lg:text-start px-10 max-w-5xl h-full max-h-[80%] m-auto">
          <div className="flex flex-col justify-evenly items-center lg:items-start">
            <motion.p
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl font-bold text-white"
            >
              Bienvenido a EcoDeusRisaralda
            </motion.p>
            <ContainerTitle
              text={"EXPLORA RISARALDA"}
              style={"text-white text-4xl font-bold"}
            />

            <motion.p
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4 mb-6 max-w-2xl mx-auto text-lg"
            >
              Descubre la magia de Risaralda, donde la naturaleza, la cultura y
              la aventura se encuentran. Explora nuestros parques naturales,
              conoce nuestra rica biodiversidad y vive experiencias únicas en el
              corazón del Eje Cafetero.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              to="/Destinos"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all w-fit"
            >
              Descubre Más
            </motion.a>
          </div>

          <div className="absolute hidden lg:block top-1/2 -translate-y-1/2 left-1/2 z-5 w-[400px] h-[300px]">
            <motion.img
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 1 }}
              src="/img1.jpeg"
              alt=""
              className="w-[200px] h-[300px] object-cover rounded-lg absolute top-0 right-0 shadow-lg shadow-white"
            />
            <motion.img
              initial={{ translateY: -100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 1 }}
              src="/img2.jpeg"
              alt=""
              className="w-[200px] h-[300px] object-cover rounded-lg absolute top-1/5 right-[170px] shadow-lg shadow-white"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/20 z-2"></div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen bg-white flex flex-col justify-center items-center text-black"
      >
        <div className="w-[90%] max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-4"
            >
              Ecoturismo Responsable
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg mb-6"
            >
              Explora y comparte los tesoros naturales de Risaralda. Juntos
              podemos promover un turismo sostenible que preserve nuestros
              ecosistemas.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6  hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                ¿Tienes algún lugar que deseas compartir?
              </h3>
              <p className="text-gray-600">
                Comparte tus sucursales ecoturísticos con nuestra comunidad
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center  text-gray-700">
                <span>Contribuye a la comunidad ecoturística</span>
              </div>

              {isAuthenticated ? (
                <Anchor
                  url="/profile/sucursales"
                  text="Subir destino"
                  style={
                    "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                  }
                />
              ) : (
                <button
                  onClick={() =>{ 
                  setShowLoginModal(true)
                  document.body.classList.add("overflow-hidden");
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                >
                  Subir destino
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Iniciar Sesión Requerido
            </h2>
            <p className="mb-6">
              Para subir un destino, necesitas iniciar sesión primero.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {setShowLoginModal(false)
                document.body.classList.remove("overflow-hidden");
                }}
                className="px-4 py-2 text-gray-200 bg-gray-500 hover:text-gray-800 cursor-pointer rounded-lg"
              >
                Cancelar
              </button>
              <LoginButton style={"bg-green-600 text-white"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
