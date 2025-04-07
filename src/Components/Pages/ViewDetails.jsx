import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextDestinations } from "../Context/ContextDestinations";

const ViewDetails = () => {
  const { name } = useParams();
  const { destinations, hotels, restaurants, municipalities } =
    useContext(ContextDestinations);

  // Buscar el lugar que coincide con el nombre en todos los municipios
  const lugar =
    destinations.municipios
      .flatMap((municipio) => municipio.lugares)
      .find((lugar) => lugar.nombre === name) ||
    hotels.find((hotel) => hotel.nombre === name) ||
    municipalities
      .map((municipality) => restaurants[municipality])
      .flat()
      .find((restaurant) => restaurant?.nombre === name);
  console.log(lugar);

  if (!lugar) {
    return (
      <div className="pt-20 text-center text-red-500">Lugar no encontrado</div>
    );
  }

  return (
    <section className="min-h-screen pt-20 px-4 text-black">
      {lugar?.nombre}
      {/* AQUI SE PUEDE UTILIZAR LAS IMAGENES PARA HACER EL SLIDER CON LA BIBIOLTECA SWIPPER O OTRA DE PREFERENCIA*/}

      {lugar.imagenes?.map((img, index) => (
        <img key={index} src={img} alt={lugar.nombre} />
      ))}

      {lugar.imagen && <img src={lugar.imagen} alt={lugar.nombre} />}
    </section>
  );
};

export default ViewDetails;
