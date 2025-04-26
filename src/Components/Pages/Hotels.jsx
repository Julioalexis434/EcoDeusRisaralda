import React, { useState } from "react";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { ContextFavorite } from "../Context/ContextFavorite";
import CardHotels from "../Cards/CardHotels";
import { ContextDestinations } from "../Context/ContextDestinations";
const Hotels = () => {
  const [selectedMunicipio, setSelectedMunicipio] = useState("todos");
  const {hotels} = useContext(ContextDestinations)

  const municipios = [
    "todos",
    ...new Set(hotels.map((hotel) => hotel.municipio)),
  ];

  const filteredHoteles =
    selectedMunicipio === "todos"
      ? [...hotels]
      : hotels.filter((hotel) => hotel.municipio === selectedMunicipio);

  return (
    <section className="min-h-screen py-[12vh] dark:text-white">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-3xl font-bold text-green-800 mb-6 text-center border-b-2 border-green-500 pb-2 hover:text-green-600 transition-colors duration-300">
          ¡MÁS QUE UN HOTEL ES TU LUGAR PERFECTO PARA REÍR, DISFRUTAR Y SOÑAR!
        </h1>

        <div className="mb-8 flex justify-center">
          <select
            value={selectedMunicipio}
            onChange={(e) => setSelectedMunicipio(e.target.value)}
            className="p-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
          >
            {municipios.map((municipio) => (
              <option key={municipio} value={municipio}>
                {municipio === "todos" ? "Todos los municipios" : municipio}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHoteles.map((hotel) => (
          <CardHotels
            key={hotel.id}
            hotel={hotel}
          />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
