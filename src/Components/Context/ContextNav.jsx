import { createContext, useState } from "react";
import { IconDestination, IconHome, IconHotel, IconRestaurants } from "../Icons";

export const ContextNav = createContext();

export function ProviderNav({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [links, setLinks] = useState([
    { url: "/", name: "Inicio", icon: <IconHome/> , delay: 0.5},
    { url: "/destinations", name: "Destinos", icon: <IconDestination/>, delay: 0.7 },
    { url: "/hotels", name: "Hoteles", icon: <IconHotel/>, delay: 0.9 },
    { url: "/Restaurants", name: "Restaurantes", icon:<IconRestaurants/>, delay: 1.1 },
    // AQUI SE AGREGAN LOS OTROS ENLACES DE NAVEGACION
  ]);

  const ToggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <ContextNav.Provider value={{ links, setLinks, isMenuOpen, ToggleMenu }}>
      {children}
    </ContextNav.Provider>
  );
}
