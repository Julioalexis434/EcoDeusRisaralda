import React, { useContext, useEffect, useState } from "react";
import Anchor from "./Global/Anchor";
import { AuthContext } from "./Context/AuthContext";

const AsideProfile = () => {
  const { typeAccount } = useContext(AuthContext);
  const [linksProfile, setLinksProfile] = useState([]);

  // Define base links that appear for all account types
  const baseLinks = [
    {
      url: "/profile",
      text: "Perfil Publico",
      current: true,
    },
    {
      url: "comentarios",
      text: "Comentarios",
      current: false,
    },
    {
      url: "favorites",
      text: "Favoritos",
      current: false,
    },
    {
      url: "/settings",
      text: "Configuracion",
      current: false, 
    }
  ];

  useEffect(() => {
    const currentPath = window.location.pathname.split('/').pop() || 'profile';
    
    const updatedLinks =
      typeAccount === "Empresa"
        ? [
            ...baseLinks.slice(0, 1),
            {
              url: "sucursales",
              text: "Tus sucursales",
              current: false,
            },
            ...baseLinks.slice(1),
          ]
        : baseLinks;

    // Update current status based on path
    const linksWithCurrentStatus = updatedLinks.map(link => ({
      ...link,
      current: currentPath === (link.url === '/profile' ? 'profile' : link.url)
    }));
    
    setLinksProfile(linksWithCurrentStatus);
  }, [window.location.pathname]);

  return (
    <aside className="lg:h-screen lg:shadow-xl lg:fixed top-0 left-0 lg:w-[250px] lg:py-[12vh] p-2 dark:text-white">
      <nav className="flex flex-wrap justify-start gap-2">
        {linksProfile.map((link, index) => (
          <div className="w-full" onClick={()=>{
            setLinksProfile((prevLinks) => {
              return prevLinks.map((prevLink) => ({
                ...prevLink,
                current: prevLink.url === link.url,
              }));
            })
          }}>

          <Anchor
            key={index}
            text={link.text}
            url={link.url}
            style={`${
              link.current
                ? "bg-green-700 text-white"
                : "bg-gray-300 lg:bg-transparent hover:bg-gray-300 dark:bg-dark2 dark:hover:bg-black/90"
            } rounded-lg py-2 lg:w-full`}
          />
            </div>
        ))}
      </nav>
    </aside>
  );
};

export default AsideProfile;
