import React from "react";
import { Link } from "react-router-dom";
import Anchor from "./Global/Anchor";

const AsideProfile = () => {
  const LinksProfile = [
    {
      url: "/profile",
      text: "Perfil Publico",
      current: true,
    },
    {
      url: "sucursales",
      text: "Tus sucursales",
      current: false,
    },
    {
      url: "comentarios",
      text: "Comentarios",
      current: false,
    },
    {
      url: "Lugares favoritos",
      text: "Lugares favoritos",
      current: false,
    },
  ];
  return (
    <>
      <aside className="lg:h-screen lg:shadow-xl lg:fixed top-0  left-0 lg:w-[250px] lg:py-[12vh] p-2 dark:text-white">
        <nav className="flex flex-wrap justify-start gap-2">
          {LinksProfile.map((link, i) => {
            return (
              <Anchor
                key={i}
                text={link.text}
                url={link.url}
                style={`${
                  link.current
                    ? "bg-green-700 text-white"
                    : "bg-gray-300 lg:bg-transparent hover:bg-gray-300 dark:bg-dark2 dark:hover:bg-black/90"
                } rounded-lg py-2 lg:w-full`}
              />
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default AsideProfile;
