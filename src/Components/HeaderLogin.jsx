import React from "react";
import Logo from "./Global/Logo";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <header className=" bg-white border-b border-gray-300 backdrop-blur-md fixed z-10 top-0 left-0 w-full h-[10vh] py-2 px-4 flex justify-between items-center text-black dark:bg-dark dark:text-white dark:border-none">
      <Logo />
      <Link to="/" className="hover:text-gray-500 dark:text-white">Volver a inicio</Link>
    </header>
  );
};

export default HeaderLogin;
