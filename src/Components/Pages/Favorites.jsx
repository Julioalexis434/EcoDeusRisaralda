import React from "react";
import { useContext } from "react";
import { ContextFavorite } from "../Context/ContextFavorite";
import CardPlace from "../Cards/CardPlace";
import { TitleH2 } from "../Global/ContainerTitle";
import CardHotels from "../Cards/CardHotels";
import CardRestaurant from "../Cards/CardRestaurant";

const Favorites = () => {
  const { placesFavorites, restaurantsFavorites, hotelsFavorites } =
    useContext(ContextFavorite);
  console.log(restaurantsFavorites);

  return (
    <>
      {placesFavorites?.length > 0 ||
      restaurantsFavorites?.length > 0 ||
      hotelsFavorites?.length > 0 ? (
        <section>
          {placesFavorites?.length > 0 && (
            <>
              <TitleH2 text={"Destinos"} />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-start p-2">
                {placesFavorites.length === 0 ? (
                  <div className="text-center font-bold text-2xl">
                    No hay lugares
                  </div>
                ) : (
                  <>
                    {placesFavorites.map((lugar, index) => (
                      <CardPlace key={index} lugar={lugar} />
                    ))}
                  </>
                )}
              </div>
            </>
          )}

          {restaurantsFavorites?.length > 0 && (
            <>
              <TitleH2 text={"Restaurantes"} />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-start p-2">
                {restaurantsFavorites.map((restaurant, index) => (
                  <CardRestaurant key={index} restaurant={restaurant} />
                ))}
              </div>
            </>
          )}

          {hotelsFavorites?.length > 0 && (
            <>
              <TitleH2 text={"Hoteles"} />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-start p-2">
                {hotelsFavorites.map((hotel, index) => (
                  <CardHotels key={index} hotel={hotel} />
                ))}
              </div>
            </>
          )}
        </section>
      ) : (
        <TitleH2 text={"No hay favoritos"} />
      )}
    </>
  );
};

export default Favorites;
