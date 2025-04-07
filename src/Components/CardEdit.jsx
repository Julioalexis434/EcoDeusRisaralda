import React, { useState } from "react";
import Modal from "./ModalEdit";
import { motion } from "framer-motion";
import { TitleH2 } from "./Global/ContainerTitle";
import ContainerText from "./Global/ContainerText";
import { useContext } from "react";
import { ContextNewPlace } from "./Context/ContextNewPlace";
import { AuthContext } from "./Context/AuthContext";

const CardEdit = ({ data }) => {
  const {
    changeStateModalEdit,
    deletePlace,
    changeStateModalMessage,
    showModalMessage,
    setIdPlace,
    idPlace,
  } = useContext(ContextNewPlace);

  const {setLoading} = useContext(AuthContext)

  const handleIdPlace = (id) => {
    setIdPlace(id);
    changeStateModalEdit();  
  };

  return (
    <>
      <motion.div className="rounded overflow-hidden shadow-lg bg-white dark:bg-dark2 hover:shadow-xl transition-shadow duration-300 ">
        {data.imagenes && data.imagenes.length > 0 ? (
          data.imagenes
            .slice(0, 1)
            .map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={data.nombre}
                className="w-full h-[192px] object-cover"
              />
            ))
        ) : (
          <div className="w-full h-[192px] object-cover bg-gray-500 text-4xl flex justify-center items-center font-bold text-gray-400">
            Sin imagen
          </div>
        )}
        <div className="px-6 py-4 h-[calc(100%-192px)] flex flex-col justify-between">
          <div>
            <TitleH2
              text={data.nombre}
              style={
                "font-bold text-xl mb-2 line-clamp-1 text-black dark:text-white mt-0"
              }
            />
            <ContainerText
              text={`${data?.descripcion}...`}
              style={
                "text-gray-700 text-base mb-4 line-clamp-3 dark:text-gray-300"
              }
            />

            <div className="mt-4">
              <div className="flex flex-wrap gap-2 mt-2">
                {data?.actividades?.slice(0, 2).map((actividad, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-[12px]"
                  >
                    {actividad}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-8">
            <button
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
              onClick={() => handleIdPlace(data.id)}
            >
              Editar
            </button>

            <button
              className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer"
              onClick={() => {
                setIdPlace(data.id);
                changeStateModalMessage();
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      </motion.div>

      {showModalMessage && (
        <div className="bg-black/90 fixed w-full h-screen top-0 left-0 z-50 items-center justify-center flex">
          <div className="bg-white dark:bg-dark2 dark:text-white p-4 rounded-lg">
            <h1 className="text-2xl">¿Esta seguro de eliminar este lugar?</h1>
            <div className="flex gap-4 mt-4 justify-center">
              <button
                className="bg-gray-500 text-white p-2 rounded-lg"
                onClick={changeStateModalMessage}
              >
                Cancelar
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={() => {
                  changeStateModalMessage();
                  setLoading(true);
                  setTimeout(() => {
                    changeStateModalMessage();
                    deletePlace(idPlace);
                    setLoading(false);
                  }, 2000);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardEdit;
