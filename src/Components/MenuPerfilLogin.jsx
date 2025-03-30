import React from "react";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { IconLogout, IconSetting, IconUser, IconUserLine } from "./Icons";
import { useAuth0 } from "@auth0/auth0-react";
import Anchor from "./Global/Anchor";
import LogoutButton from "./Auth/LogoutButton";

const MenuPerfilLogin = () => {
  const { user } = useAuth0();

  return (
    <Menu
      menuButton={
        <MenuButton
          className={"hover:bg-gray-400 p-1 rounded-full cursor-pointer"}
        >
          <img
            src={`${user.picture}`}
            alt={`imagen personal de ${user.nickname}`}
            className="w-8 h-8 object-cover rounded-full"
          />
          
        </MenuButton>
      }
      align="start"
      transition
      menuClassName="bg-white p-4 rounded-lg w-max dark:bg-dark"
    >
     
      <MenuItem className=" flex gap-2 items-center justify-center mb-3 rounded-xl cursor-default p-0">
        <img
          src={`${user.picture}`}
          alt={`imagen personal de ${user.nickname}`}
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span className="text-gray-700 text-lg font-medium">
            {user.nickname}
          </span>
          <span className="text-gray-500 text-sm font-medium">
            {user.email}
          </span>
        </div>
      </MenuItem>

      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default  flex items-center px-2">
        <IconUserLine />
        <Anchor url="/profile" text="Tu perfil" />
      </MenuItem>
      
      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default  flex items-center px-2">
        <IconSetting />
        <Anchor url="/settings" text="Configuración"/>
      </MenuItem>

      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default flex items-center px-2">
        <IconLogout />
        <LogoutButton />
      </MenuItem>
    </Menu>
  );
};

export default MenuPerfilLogin;
