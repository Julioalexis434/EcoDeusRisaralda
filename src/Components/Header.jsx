import React from "react";
import Nav from "./Nav";
import { useAuth0 } from "@auth0/auth0-react";
import MenuPerfil from "./MenuPerfilLogin";
import MenuPerfilLogout from "./MenuPerfilLogout";
const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className=" bg-white border-b border-gray-300 backdrop-blur-md fixed z-10 top-0 left-0 w-full h-[10vh] py-2 px-8 flex justify-between items-center text-black">
      <img src="/logo.png" width={100}></img>

      <Nav style={"hidden lg:flex"} />

      <div className="flex items-center gap-x-4">
      <select className="p-4 outline-none cursor-pointer">
          <option value="Es">Español</option>
          <option value="En">Ingles</option>
        </select>
        
        {isAuthenticated ? <MenuPerfil /> : <MenuPerfilLogout/>}
      </div>
    </header>
  );
};

export default Header;
