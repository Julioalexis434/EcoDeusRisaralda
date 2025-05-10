import { useEffect } from "react";
import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const ContextNewPlace = createContext();

export function ProviderNewPlace({ children }) {
  const [showModalEdit, SetShowModalEdit] = useState(false);
  const [showModalAdd, SetShowModalAdd] = useState(false);
  const [showModalMessage, SetShowModalMessage] = useState(false);
  const [idPlace, setIdPlace] = useState(null);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const storedPlaces = localStorage.getItem("places");
    if (storedPlaces) {
      setPlaces(JSON.parse(storedPlaces));
    }
  }, []);
  
  // Crear un nuevo lugar
  const addPlace = (place) => {
    const newPlace = { ...place, id: uuidv4() };
    const updatePlace = [...places, newPlace];
    setPlaces(updatePlace);
    localStorage.setItem("places", JSON.stringify(updatePlace));
  };

  // Editar un lugar existente
  const editPlace = (id, updatedPlace) => {
    const updatePlace = places.map((place) =>
      place.id === id ? { ...place, ...updatedPlace } : place
    );
    setPlaces(updatePlace);
    localStorage.setItem("places", JSON.stringify(updatePlace));
  };

  // Eliminar un lugar
  const deletePlace = (id) => {
    console.log("Lugares antes de eliminar:", places);
    console.log("ID recibido para eliminar:", id);

    const updatePlace = places.filter((place) => place.id !== id);
    
    console.log("Lugares después de eliminar:", updatePlace);
    
    setPlaces(updatePlace);
    localStorage.setItem("places", JSON.stringify(updatePlace));
};


  const changeStateModalEdit = () => {
    SetShowModalEdit(!showModalEdit);
  };

  const changeStateModalAdd = () => {
    SetShowModalAdd(!showModalAdd);
  };
  const changeStateModalMessage = () => {
    SetShowModalMessage(!showModalMessage);
  };
  return (
    <ContextNewPlace.Provider
      value={{
        places,
        addPlace,
        editPlace,
        setIdPlace,
        idPlace,
        deletePlace,
        showModalEdit,
        showModalAdd,
        changeStateModalAdd,
        changeStateModalEdit,
        showModalMessage,
        changeStateModalMessage,
      }}
    >
      {children}
    </ContextNewPlace.Provider>
  );
}
