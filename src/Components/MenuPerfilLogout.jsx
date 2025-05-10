import { MenuButton } from "@szhsin/react-menu";
import { MenuItem } from "@szhsin/react-menu";
import { Menu } from "@szhsin/react-menu";
import React from "react";
import Anchor from "./Global/Anchor";
import { IconOption } from "./Global/Icons";
import '@szhsin/react-menu/dist/transitions/zoom.css';

const MenuPerfilLogout = () => {
  return (
    <Menu
      menuButton={
        <MenuButton className={'hover:bg-gray-400 dark:hover:bg-dark2 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center'}>
          <IconOption />
        </MenuButton>
      }
      align="end"
      transition
      menuClassName="bg-white p-4 rounded-lg dark:bg-dark2"
    >
      <MenuItem className="hover:shadow-lg hover:-translate-y-1 transition rounded-xl cursor-default p-0">
        <Anchor
          url ="/settings"
          text = "Configuración"
        >
        </Anchor>
      </MenuItem>
    </Menu>
  );
};

export default MenuPerfilLogout;
