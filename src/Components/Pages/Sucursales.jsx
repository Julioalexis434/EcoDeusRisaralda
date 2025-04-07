import React, { useState } from "react";
import Modal from "../ModalEdit";
import CardEdit from "../CardEdit";
import { ContextNewPlace } from "../Context/ContextNewPlace";
import { useContext } from "react";
import ModalAdd from "../ModalAdd";
import ModalEdit from "../ModalEdit";

const Sucursales = () => {
  const {
    changeStateModalAdd,
    places
  } = useContext(ContextNewPlace);

  return (
    <>
      <div className="p- m-2 rounded-md shadow-2xl border-1 border-gray-200 py-2 text-right">
        <button
          className="p-2 bg-blue-500 text-white rounded-md mr-5"
          onClick={changeStateModalAdd}
        >
          Añadir lugar
        </button>
        <ModalAdd
          titulo={"Añadir un lugar"}
          accion={"Cancelar"}
          className="lg: z-[99]"
        />
        <ModalEdit />
      </div>

      <div className="grid md:grid-cols-2 gap-4 p-2 text-white">
        {places.length === 0 ? (
          <div className="text-center font-bold text-2xl">No hay lugares</div>
        ) : (
          places.map((data, index) => <CardEdit key={index}  data={data} />)
        )}
      </div>

     
    </>
  );
};

export default Sucursales;
export function insertar() {}
