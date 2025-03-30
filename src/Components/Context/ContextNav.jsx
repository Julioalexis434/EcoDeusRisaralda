import { createContext, useState } from "react";

export const ContextNav = createContext();

export function ProviderNav({ children }) {
  const [links, setLinks] = useState([
    { url: "/", name: "Inicio", delay: 0.5 },
    { url: "destinations", name: "Destinos", delay: 0.7 },
    { url: "hotels", name: "Hoteles", delay: 0.9 },
    { url: "Restaurants", name: "Restaurantes", delay: 1.1 },
    // AQUI SE AGREGAN LOS OTROS ENLACES DE NAVEGACION
  ]);
  return (
    <ContextNav.Provider value={{ links, setLinks }}>
      {children}
    </ContextNav.Provider>
  );
}
