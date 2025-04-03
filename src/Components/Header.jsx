import React from "react";
import Nav from "./Nav";
import MenuPerfil from "./MenuPerfilLogin";
import MenuPerfilLogout from "./MenuPerfilLogout";
import { Link } from "react-router-dom";
import { ContextNav } from "./Context/ContextNav";
import { useContext } from "react";
import { IconMenuClose, IconMenuOpen } from "./Icons";
import Logo from "./Global/Logo";
import { AuthContext } from "./Context/AuthContext";
const Header = () => {
  const { isMenuOpen, ToggleMenu } = useContext(ContextNav);
  const {user} = useContext(AuthContext);

  return (
    <header className=" bg-white border-b border-gray-300 backdrop-blur-md fixed z-10 top-0 left-0 w-full h-[10vh] py-2 px-4 flex justify-between items-center text-black dark:bg-dark dark:text-white dark:border-none">
      <div className="flex items-center gap-x-3">
        <div
          className={` ${
            isMenuOpen ? "relative z-11" : "block"
          } md:hidden cursor-pointer`}
          onClick={ToggleMenu}
        >
          {isMenuOpen ? <IconMenuClose /> : <IconMenuOpen />}
        </div>
        <Logo />
      </div>

      <Nav />

      <div className="flex items-center gap-x-4">
        {user ? <MenuPerfil /> : <MenuPerfilLogout />}

        {user ? (
          ""
        ) : (
          <Link
            to={"/authentification"}
            className="py-2 px-2  bg-green/30 rounded-lg  text-sm 
        lg:text-md"
          >
            Iniciar Sesión{" "}
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
