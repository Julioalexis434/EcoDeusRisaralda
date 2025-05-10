import React from "react";
import Nav from "./Nav";
import MenuPerfil from "./MenuPerfilLogin";
import MenuPerfilLogout from "./MenuPerfilLogout";
import { Link, useNavigate } from "react-router-dom";
import { ContextNav } from "./Context/ContextNav";
import { useContext } from "react";
import { IconAddFavorite, IconMenuClose, IconMenuOpen } from "./Global/Icons";
import Logo from "./Global/Logo";
import { AuthContext } from "./Context/AuthContext";
import { ContextFavorite } from "./Context/ContextFavorite";
const Header = () => {
  const { isMenuOpen, ToggleMenu } = useContext(ContextNav);
  const { user } = useContext(AuthContext);
  const {toAddFavorite, setToAddFavorite} = useContext(ContextFavorite);
  const navigate = useNavigate();

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
        {user ? (
          <div className="flex gap-4 items-center cursor-pointer">
            <div className="relative" onClick={()=>{
              navigate("/profile/favorites")
              setToAddFavorite(false)
            }}>
              <IconAddFavorite />
              <div className={`absolute w-4 h-4 rounded-full bg-green-500 -top-1 -right-1 ${toAddFavorite ? "inline-block" : "hidden"}`}></div>
            </div>
            <MenuPerfil />
          </div>
        ) : (
          <MenuPerfilLogout />
        )}

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
