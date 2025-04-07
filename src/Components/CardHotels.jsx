import React from 'react'
import { useContext } from 'react';
import { ContextFavorite } from './Context/ContextFavorite';
import { IconAddFavorite } from './Icons';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CardHotels = ({hotel}) => {
    const {addHotels, hotelsFavorites} = useContext(ContextFavorite);
    const isFavorite = hotelsFavorites.some((hotelPrev) => hotelPrev.id === hotel.id);

    const navigate = useNavigate();
  
    const changeViewDetails = (hotel) => {
      navigate(`/viewDetails/${encodeURIComponent(hotel.nombre)}`);
    };
  
  return (
    <article
    key={hotel.id}
    className="bg-white dark:bg-dark2  rounded-lg shadow-lg overflow-hidden transform transition duration-300 group"
  >
    <button
      className={`p-2 rounded-lg  absolute right-2 top-2 cursor-pointer z-10 ${
        isFavorite ? "bg-yellow-500" : "bg-white dark:bg-dark"
      }`}
      onClick={() => {
        addHotels(hotel, hotel.id);
      }}
    >
      <IconAddFavorite />
    </button>

    <img
      src={hotel.imagen}
      alt={hotel.nombre}
      className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 line-clamp-1">{hotel.nombre}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        {hotel.municipio}
      </p>
      <div className="flex items-center mb-3">
        <div className="flex mr-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-sm ${
                index < Math.floor(hotel.puntuacion)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-green-500 dark:text-gray-500">
          ({hotel.puntuacion})
        </span>
      </div>
      <div className="flex justify-end">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300" onClick={()=>{
          changeViewDetails(hotel)
        }}>
          Ver más
        </button>
      </div>
    </div>
  </article>
  )
}

export default CardHotels
