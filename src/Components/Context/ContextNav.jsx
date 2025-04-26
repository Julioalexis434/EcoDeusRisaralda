import { createContext, useState } from "react";
import { IconDestination, IconHome, IconHotel, IconRestaurants } from "../Global/Icons";
import { useEffect } from "react";

export const ContextNav = createContext();

export function ProviderNav({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [links, setLinks] = useState([
    { url: "/", name: "Inicio", icon: <IconHome/> , delay: 0.5, current: true},
    { url: "/destinations", name: "Destinos", icon: <IconDestination/>, delay: 0.7 , current: false},
    { url: "/hotels", name: "Hoteles", icon: <IconHotel/>, delay: 0.9 , current: false},
    { url: "/Restaurants", name: "Restaurantes", icon:<IconRestaurants/>, delay: 1.1 , current: false},
    // AQUI SE AGREGAN LOS OTROS ENLACES DE NAVEGACION
  ]);

  useEffect(() => {
    const currentPath = window.location.pathname.split('/').pop() || '';
     // Actualizar el estado de los enlaces para marcar el que está activo actualmente.
     setLinks((prevLinks) => {
      return prevLinks.map((prevLink) => ({
        ...prevLink,
        current: prevLink.url === `/${currentPath}`,
      })); 
     })
  }, [window.location.pathname]);

  const ToggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <ContextNav.Provider value={{ links, setLinks, isMenuOpen, ToggleMenu }}>
      {children}
    </ContextNav.Provider>
  );
}
