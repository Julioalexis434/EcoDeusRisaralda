import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import ContainerText from "./Global/ContainerText";
import { TitleH2 } from "./Global/ContainerTitle";
import { IconAddFavorite } from "./Icons";
import { useContext } from "react";
import { ContextFavorite } from "./Context/ContextFavorite";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AuthContext } from "./Context/AuthContext";
import { ContextModalLogin } from "./Context/ContextModalLogin";
import LoginModal from "./LoginModal";

const CardPlace = ({ lugar }) => {
  const { addPlaces, placesFavorites } = useContext(ContextFavorite);
  const { user } = useContext(AuthContext);
  const {toggleLoginModal} = useContext(ContextModalLogin)

  const isFavorite = placesFavorites.some((place) => place.id === lugar.id);

  const navigate = useNavigate();
  
  const changeViewDetails = (lugar) => {
    navigate(`/viewDetails/${encodeURIComponent(lugar.nombre)}`);
  };

  return (
    <motion.div className="rounded overflow-hidden shadow-lg bg-white dark:bg-dark2 hover:shadow-xl transition-shadow duration-300 relative">
      <button
        className={`p-2 rounded-lg  absolute right-2 top-2 cursor-pointer z-2 ${
          isFavorite && user ? "bg-yellow-500" : "bg-white dark:bg-dark"
        }`}
        onClick={() => {
          if(user){
            addPlaces(lugar, lugar.id);
          }else{
            toggleLoginModal("¡Inicia sesión para guardar tus lugares favoritos!")
          }
        }}
      >
        <IconAddFavorite />
      </button>
      {lugar.imagenes && lugar.imagenes.length > 0 ? (
        lugar.imagenes
          .slice(0, 1)
          .map((imagen, index) => (
            <LazyLoadImage
              key={index}
              src={imagen}
              alt={lugar.nombre}
              effect="blur"
              className="w-full h-[192px] object-cover"
              wrapperClassName="w-full h-[192px]"
            />
          ))
      ) : (
        <div className="w-full h-[192px] object-cover"></div>
      )}
      <div className="px-6 py-4 h-[calc(100%-192px)] flex flex-col justify-between">
        <div>
          <TitleH2
            text={lugar.nombre}
            style={
              "font-bold text-xl mb-2 line-clamp-1 text-black dark:text-white mt-0"
            }
          />
          <ContainerText
            text={`${lugar.descripcion.slice(0, 50)}...`}
            style={
              "text-gray-700 text-base mb-4 line-clamp-3 dark:text-gray-300"
            }
          />

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {lugar.actividades.slice(0, 2).map((actividad, index) => (
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
        <div className="flex flex-col gap-4 my-8">
          <div className="text-green-500 dark:text-green-400 flex justify-between items-center w-full">
            <span className="text-green-500">{lugar.puntuacion}</span>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-sm ${
                    index < Math.floor(lugar.puntuacion)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <button 
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer" 
            onClick={()=>{
              changeViewDetails(lugar);
            }}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardPlace;
