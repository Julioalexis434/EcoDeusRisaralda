import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginButton from "../Auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Anchor from "../Global/Anchor";
import { TitleH1, TitleH2 } from "../Global/ContainerTitle";
import ContainerText from "../Global/ContainerText";

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
            <TitleH2
              text={"Bienvenido a EcoDeusRisaralda"}
              style={"text-white font-bold"}
            />
            <TitleH1
              text={"EXPLORA RISARALDA"}
              style={"text-white font-bold"}
            />

            <ContainerText
              text={`   Descubre la magia de Risaralda, donde la naturaleza, la cultura y
              la aventura se encuentran. Explora nuestros parques naturales,
              conoce nuestra rica biodiversidad y vive experiencias únicas en el
              corazón del Eje Cafetero.`}
            />

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
        className="relative w-full py-[10vh] lg:py-0 lg:h-screen bg-white flex flex-col justify-evenly items-center text-black"
      >
        <TitleH1
          text={`Comparte con nosotros`}
          style={"text-greenDark font-bold text-center"}
        />

        <div className="w-[90%] max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <TitleH2 text={"Ecoturismos responsable"} />
            <ContainerText
              text={`  Explora y comparte los tesoros naturales de Risaralda. Juntos
              podemos promover un turismo sostenible que preserve nuestros
              ecosistemas.`}
              style={"text-gray-600"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6  hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-center mb-6">
              <TitleH2 text={"¿Tienes algún lugar para subir?"} />
              <ContainerText
                text={`Comparte tus sucursales ecoturísticos con nuestra comunidad`}
                style={"text-gray-500"}
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center  text-gray-700">
                <ContainerText
                  text={`Contribuye a la comunidad ecoturística`}
                />
              </div>

              {isAuthenticated ? (
                <Anchor
                  url="/profile/sucursales"
                  text="Subir destino"
                  style="bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded-full cursor-pointer text-white"
                />
              ) : (
                <button
                  onClick={() => {
                    setShowLoginModal(true);
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

      <div className="p-4 bg-green-800">
        <TitleH2
          text={`¡Descubre la belleza de Risaralda!`}
          style={"text-white"}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen bg-gray-100  text-black p-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="col-span-2">
                <TitleH2
                  text={`Algunos lugares que visitar`}
                  />
              </div>

              <div className="flex flex-col gap-3 col-span-1">
              <TitleH2
                  text={`Lugares`}
                  />
              </div>
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
                onClick={() => {
                  setShowLoginModal(false);
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
