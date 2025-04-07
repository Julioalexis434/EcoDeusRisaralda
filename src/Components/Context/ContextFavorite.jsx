import { useState } from "react";
import { createContext } from "react";
import { ContextDestinations } from "./ContextDestinations";
import { useContext } from "react";
import { useEffect } from "react";

export const ContextFavorite = createContext();

export function ProviderFavorite({ children }) {
  const [placesFavorites, setPlacesFavorites] = useState([]);
  const [restaurantsFavorites, setRestaurantsFavorites] = useState([]);
  const [hotelsFavorites, sethotelsFavorites] = useState([]);
  const [toAddFavorite, setToAddFavorite] = useState(false);
  useEffect(() => {
    const storedPlaces = localStorage.getItem("favorites");
    if (storedPlaces) {
      setPlacesFavorites(JSON.parse(storedPlaces));
    }


    const storedRestaurants = localStorage.getItem("restaurants");
    if (storedRestaurants) {
      setRestaurantsFavorites(JSON.parse(storedRestaurants));
    }

    const storedHotels = localStorage.getItem("hotels");
    if (storedHotels) {
      sethotelsFavorites(JSON.parse(storedHotels));
    }
  }, []);

  const addPlaces = (lugar, id) => {
    // Check if the place is already in favorites
    const isAlreadyFavorite = placesFavorites.some(place => place.id === id);
    
    if (!isAlreadyFavorite) {
      setToAddFavorite(true);
      const newFavorite = { ...lugar, id };
      setPlacesFavorites((prevPlace) =>{
        const updatePlace = [...prevPlace, newFavorite];
        localStorage.setItem("favorites", JSON.stringify(updatePlace));
        return updatePlace;
      });
    }else{
      const updatePlace = placesFavorites.filter(place => place.id !== id);
      setPlacesFavorites(updatePlace);
      localStorage.setItem("favorites", JSON.stringify(updatePlace));
    }
  };

  const addRestaurant = (restaurant, id) => {
    // Check if the place is already in favorites
    const isAlreadyFavorite = restaurantsFavorites.some(place => place.id === id);
    
    if (!isAlreadyFavorite) {
      setToAddFavorite(true);
      const newFavorite = { ...restaurant, id };
      setRestaurantsFavorites((prevPlace) =>{
        const updateRestaurant = [...prevPlace, newFavorite];
        localStorage.setItem("restaurants", JSON.stringify(updateRestaurant));
        return updateRestaurant;
      });
    }else{
      const updateRestaurant = restaurantsFavorites.filter(place => place.id !== id);
      setRestaurantsFavorites(updateRestaurant);
      localStorage.setItem("restaurants", JSON.stringify(updateRestaurant));
    }
  };


  const addHotels = (hotel, id) => {
    // Check if the place is already in favorites
    const isAlreadyFavorite = hotelsFavorites.some(place => place.id === id);
    
    if (!isAlreadyFavorite) {
      setToAddFavorite(true);
      const newFavorite = { ...hotel, id };
      sethotelsFavorites((prevPlace) =>{
        const updateHotel = [...prevPlace, newFavorite];
        localStorage.setItem("hotels", JSON.stringify(updateHotel));
        return updateHotel;
      });
    }else{
      const updateHotel = hotelsFavorites.filter(place => place.id !== id);
      sethotelsFavorites(updateHotel);
      localStorage.setItem("hotels", JSON.stringify(updateHotel));
    }
  };

  return (
    <ContextFavorite.Provider value={{ addPlaces, placesFavorites, addRestaurant, restaurantsFavorites, hotelsFavorites,addHotels, toAddFavorite, setToAddFavorite}}>
      {children}
    </ContextFavorite.Provider>
  );
}
