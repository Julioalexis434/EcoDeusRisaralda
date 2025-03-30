import React from "react";
import { Outlet } from "react-router-dom";
import AsideProfile from "../AsideProfile";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderProfile from "../HeaderProfile";
const ProfileLayout = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <div className="lg:pl-[250px] py-[10vh]">
        <h1>Por favor inicie sesion para visualizar su usuario</h1>
      </div>
    );
  }
  return (
    <div className="lg:pl-[250px] py-[10vh] dar:bg-dark">
      <HeaderProfile />
      <AsideProfile />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
