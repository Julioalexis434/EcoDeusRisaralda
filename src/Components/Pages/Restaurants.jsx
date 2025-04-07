import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import TitleH1 from "../Global/ContainerTitle";
import { useContext } from "react";
import { ContextDestinations } from "../Context/ContextDestinations";
import CardRestaurant from "../CardRestaurant";





const Restaurants = () => {
  const [selectedMunicipio, setSelectedMunicipio] = useState("todos");
  const { restaurants, municipalities } = useContext(ContextDestinations);

  return (
    <section className="min-h-screen py-20 dark:text-white">
      <div className="px-4">
        <TitleH1
          text={
            "¡LA VIDA NO ES PARA LLEVAR, ES PARA COMER AQUI CON GUSTO Y SABOR!"
          }
          style="text-lg lg:text-3xl font-bold text-green-800 mb-6 text-center"
        />

        <div className="mb-8 flex justify-center">
          <select
            value={selectedMunicipio}
            onChange={(e) => setSelectedMunicipio(e.target.value)}
            className="p-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
          >
            {municipalities.map((municipio) => (
              <option key={municipio} value={municipio}>
                {municipio === "todos" ? "Todos los municipios" : municipio}
              </option>
            ))}
          </select>
        </div>

        {municipalities
          .filter(
            (municipality) =>
              selectedMunicipio === "todos" ||
              municipality === selectedMunicipio
          )
          .map(
            (municipality) =>
              municipality !== "todos" && (
                <motion.div
                  key={municipality}
                  className="mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold text-green-800 mb-6 text-center border-b-2 border-green-500 pb-2 hover:text-green-600 transition-colors duration-300">
                    {municipality}
                  </h2>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center">
                    {restaurants[municipality]?.map((restaurant, index) => (
                      <CardRestaurant
                        key={index}
                        restaurant={restaurant}
                      />
                    ))}
                  </div>
                </motion.div>
              )
          )}
      </div>
    </section>
  );
};

export default Restaurants;
