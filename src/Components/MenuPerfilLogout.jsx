import { MenuButton } from "@szhsin/react-menu";
import { MenuItem } from "@szhsin/react-menu";
import { Menu } from "@szhsin/react-menu";
import React from "react";
import Anchor from "./Global/Anchor";
import { Link } from "react-router-dom";
import LoginButton from "./Auth/LoginButton";
import { IconUser } from "./Icons";
import '@szhsin/react-menu/dist/transitions/zoom.css';

const MenuPerfilLogout = () => {
  return (
    <Menu
      menuButton={
        <MenuButton className={'hover:bg-gray-400 p-2 rounded-full cursor-pointer'}>
          <IconUser />
        </MenuButton>
      }
      align="end"
      transition
      menuClassName="bg-white p-4 rounded-lg dark:bg-dark"
    >
      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default p-0">
        <Anchor
          url ="/settings"
          text = "Configuración"
        >
        </Anchor>
      </MenuItem>

      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition  mb-3 rounded-xl cursor-default p-0">
        <LoginButton />
      </MenuItem>
    </Menu>
  );
};

export default MenuPerfilLogout;
