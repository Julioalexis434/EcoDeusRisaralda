import React from "react";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { IconLogout, IconSetting, IconUser, IconUserLine } from "./Icons";
import Anchor from "./Global/Anchor";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";

const MenuPerfilLogin = () => {
  const { user, Logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    Logout();
  };

  return (
    <Menu
      menuButton={
        <MenuButton
          className={"hover:bg-gray-400 p-1 rounded-full cursor-pointer"}
        >
          <img
            src={`${user.user_metadata.avatar_url}`}
            alt={`imagen personal de ${user.user_metadata.full_name}`}
            className="w-8 h-8 object-cover rounded-full"
          />
        </MenuButton>
      }
      align="start"
      transition
      menuClassName="bg-white p-4 rounded-lg w-max dark:bg-dark"
    >
      <MenuItem className=" flex gap-4 items-center justify-center mb-3 rounded-xl cursor-default p-0">
        <img
          src={`${user.user_metadata.avatar_url}`}
          alt={`imagen personal de ${user.user_metadata.full_name || user.user_metadata.displayName}`}
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span className="text-gray-700 text-lg font-medium">
            {user.user_metadata.full_name || user.user_metadata.displayName}
          </span>
          <span className="text-gray-500 text-sm font-medium">
            {user?.new_email || user?.user_metadata?.email}
          </span>
          <span className="text-gray-500 text-sm font-medium my-3">
            Tipo de cuenta: <span className="text-gray-400">{localStorage.getItem("typeAccount")}</span>
          </span>
        </div>
      </MenuItem>

      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default  flex items-center px-2">
        <IconUserLine />
        <Anchor url="/profile" text="Tu perfil" />
      </MenuItem>

      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default  flex items-center px-2">
        <IconSetting />
        <Anchor url="/settings" text="Configuración" />
      </MenuItem>

      <MenuItem
        className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl flex items-center px-2 cursor-pointer"
        onClick={handleLogout}
      >
        <IconLogout />
        <div className="inline-block p-4">Cerrar Sesión</div>
      </MenuItem>
    </Menu>
  );
};

export default MenuPerfilLogin;
