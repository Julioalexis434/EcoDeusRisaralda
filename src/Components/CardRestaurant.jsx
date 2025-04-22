import React from "react";
import { useContext } from "react";
import { ContextFavorite } from "./Context/ContextFavorite";
import { IconAddFavorite } from "./Icons";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AuthContext } from "./Context/AuthContext";
const CardRestaurant = ({ restaurant }) => {
  const { addRestaurant, restaurantsFavorites } = useContext(ContextFavorite);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const isFavorite = restaurantsFavorites.some(
    (favrestaurant) => favrestaurant.id === restaurant.id
  );
  return (
    <div className="flex flex-col w-full p-3 bg-white dark:bg-dark2 rounded-lg shadow-md max-w-sm transform transition-transform duration-300 hover:scale-105 relative">
      <div className="flex items-center">
        <LazyLoadImage
          src={restaurant.imagen}
          alt={restaurant.nombre}
          className="w-20 h-20 object-cover rounded-lg"
          effect="blur"
        />
        <div className="ml-3 w-full">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-md font-semibold line-clamp-1 text-black">
              {restaurant.nombre}
            </h3>
            <button
              className={`p-1 rounded-lg right-2 top-2 cursor-pointer ${
                isFavorite ? "bg-yellow-400" : "bg-gray-200 dark:bg-dark"
              }`}
              onClick={() => {
                if(user){
                addRestaurant(restaurant, restaurant.id);
                }else{
                  alert("Inicia sesion para agregar a favoritos")
                }
              }}
            >
              <IconAddFavorite />
            </button>
          </div>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-sm ${
                  index < Math.floor(restaurant.estrellas)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-green-500">
              {restaurant.estrellas}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-2 px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              onClick={() => {
                navigate(`/viewDetails/${encodeURIComponent(restaurant.nombre)}`);
              }}
            >
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
