import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginButton from "../Auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Anchor from "../Global/Anchor";
import { TitleH1, TitleH2 } from "../Global/ContainerTitle";
import ContainerText from "../Global/ContainerText";
import { useContext } from "react";
import { ContextDestinations } from "../Context/ContextDestinations";
import CardPlace from "../CardPlace";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { destinations } = useContext(ContextDestinations);

  return (
    <div className="dark:bg-dark">
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

        <div className="z-3 left-1/2 p-4 w-full grid lg:grid-cols-2 justify-center text-center lg:text-start px-10 max-w-5xl h-full max-h-[80%] m-auto">
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
        className="relative w-full py-[10vh] lg:py-0 lg:h-screen bg-white flex flex-col justify-evenly items-center text-black dark:bg-dark"
      >
        <TitleH1
          text={`Comparte con nosotros`}
          style={"text-greenDark font-bold text-center dark:text-greenLight"}
        />

        <div className="w-[90%] max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <TitleH2
              text={"Ecoturismos responsable"}
              style={"dark:text-white"}
            />
            <ContainerText
              text={`  Explora y comparte los tesoros naturales de Risaralda. Juntos
              podemos promover un turismo sostenible que preserve nuestros
              ecosistemas.`}
              style={"text-gray-600 dark:text-gray-400"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition dark:bg-dark2 dark:text-white"
          >
            <div className="text-center mb-6">
              <TitleH2
                text={"¿Tienes algún lugar para subir?"}
                style={"dark:text-white"}
              />
              <ContainerText
                text={`Comparte tus sucursales ecoturísticos con nuestra comunidad`}
                style={"text-gray-500 dark:text-gray-400"}
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <ContainerText
                  text={`Contribuye a la comunidad ecoturística`}
                  style={"dark:text-gray-300"}
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

      <div className="p-4 bg-green-800 dark:bg-dark2">
        <TitleH2
          text={`¡Descubre la belleza de Risaralda!`}
          style={"text-white"}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full bg-gray-100 text-black p-4 dark:bg-dark"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <div className="flex justify-between items-center">
              <TitleH2
                text={`Algunos lugares que visitar`}
                style={"my-8 dark:text-white"}
              />

              <Anchor
                url="/destinations"
                text="Ver todos"
                style="bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded-full cursor-pointer text-white mr-10"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {destinations.municipios
                .slice(3, 5)
                .map((municipio) =>
                  municipio.lugares
                    .slice(0, 5)
                    .map((lugar, index) => (
                      <CardPlace key={index} lugar={lugar} />
                    ))
                )}
            </div>
          </div>

          <div className="flex flex-col gap-3 col-span-1">
            <div className="p-4">
              {destinations.municipios.slice(0, 3).map((municipio, index) => (
                <div key={index}>
                  <TitleH2 text={municipio.nombre} style={"dark:text-white"} />
                  <div className="grid grid-cols-1 gap-2">
                    {municipio.lugares.slice(0, 3).map((lugar, lugarIndex) => (
                      <div
                        key={lugarIndex}
                        className="flex gap-x-4 items-center bg-white dark:bg-dark2 rounded-lg"
                      >
                        {lugar.imagenes && lugar.imagenes.length > 0 ? (
                          lugar.imagenes
                            .slice(0, 1)
                            .map(
                              (img, imgIndex) =>
                                img && (
                                  <img
                                    key={imgIndex}
                                    src={img}
                                    alt={lugar.nombre}
                                    className="w-[100px] h-[100px] object-cover rounded-lg"
                                  />
                                )
                            )
                        ) : (
                          <div className="w-[100px] h-[100px] bg-gray-500 rounded-lg"></div>
                        )}
                        <div>
                          <ContainerText
                            text={`${lugar.nombre.slice(0, 20)}...`}
                            style={"text-gray-800 my-0 dark:text-white"}
                          />
                          <ContainerText
                            text={`${lugar.descripcion.slice(0, 30)}...`}
                            style={"text-gray-500 dark:text-gray-400"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark2 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Iniciar Sesión Requerido
            </h2>
            <p className="mb-6 dark:text-gray-300">
              Para subir un destino, necesitas iniciar sesión primero.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  document.body.classList.remove("overflow-hidden");
                }}
                className="px-4 py-2 text-gray-200 bg-gray-500 hover:text-gray-800 dark:hover:text-white cursor-pointer rounded-lg"
              >
                Cancelar
              </button>
              <LoginButton style={"bg-green-600 text-white"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
