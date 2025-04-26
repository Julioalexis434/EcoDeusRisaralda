import React, { useState } from "react";
import { motion } from "framer-motion";
import Anchor from "../Global/Anchor";
import { TitleH1, TitleH2 } from "../Global/ContainerTitle";
import ContainerText from "../Global/ContainerText";
import { useContext } from "react";
import { ContextDestinations } from "../Context/ContextDestinations";
import CardPlace from "../Cards/CardPlace";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Hotels from "./Hotels";
import CardHotels from "../Cards/CardHotels";
import CardRestaurant from "../Cards/CardRestaurant";
import { ContextModalLogin } from "../Context/ContextModalLogin";
import LoginModal from "../LoginModal";

const Home = () => {
  const { user, typeAccount } = useContext(AuthContext);
  const { toggleLoginModal } = useContext(ContextModalLogin);
  const { destinations, hotels, restaurants, municipalities } =
    useContext(ContextDestinations);
  const navigate = useNavigate();

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
              style={"text-white font-bold lg:text-start"}
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
              href="#destinations"
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

              <button
                onClick={() => {
                  if (user && typeAccount === "Empresa") {
                    window.location.href = "/profile/sucursales";
                  } else {
                    toggleLoginModal("Inicio de sesión empresarial requerido");
                    console.log(user);
                  }
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all"
              >
                Subir Destino
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="p-4 bg-green-800 dark:bg-dark2" id="destinations">
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
                style={"my-8 dark:text-white text-lg lg:text-2xl"}
              />

              <Anchor
                url="/destinations"
                text="Ver todos"
                style="bg-green-500 hover:bg-green-600 font-bold py-2 px-2 rounded-full cursor-pointer text-white md:mr-10 text-sm"
              />
            </div>
            {/* DESTINOS */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 mb-5 w-full">
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
                  <TitleH2
                    text={municipio.nombre}
                    style={"dark:text-white my-2 "}
                  />
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
                                    className="w-[100px] object-cover rounded-lg h-full"
                                  />
                                )
                            )
                        ) : (
                          <div className="w-[100px] h-[100px] bg-gray-500 rounded-lg"></div>
                        )}
                        <div className="w-full px-2">
                          <ContainerText
                            text={`${lugar.nombre.slice(0, 20)}...`}
                            style={"text-gray-800 my-0 dark:text-white"}
                          />
                          <ContainerText
                            text={`${lugar.descripcion.slice(0, 30)}...`}
                            style={
                              "text-gray-500 dark:text-gray-400 line-clamp-1"
                            }
                          />
                          <div className="flex justify-end">
                            <button
                              className="py-2 px-4 rounded-md bg-green-500 text-white my-2"
                              onClick={() => {
                                navigate(
                                  `/viewDetails/${encodeURIComponent(
                                    lugar.nombre
                                  )}`
                                );
                              }}
                            >
                              Ver mas
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* RESTAURANTES */}
              <TitleH2
                text={"Algunos Restaurantes"}
                style={"my-2 text-green"}
              />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 ">
                {municipalities
                  .slice(0, 2)
                  .map((municipio) =>
                    restaurants[municipio]?.map((restaurant, index) => (
                      <CardRestaurant key={index} restaurant={restaurant} />
                    ))
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* HOTELES */}
        <TitleH1 text={"Algunos Hospedajes"} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 text-white">
          {hotels.slice(0, 10).map((hotel, index) => (
            <CardHotels key={index} hotel={hotel} />
          ))}
        </div>
      </motion.section>

      
    </div>
  );
};

export default Home;
