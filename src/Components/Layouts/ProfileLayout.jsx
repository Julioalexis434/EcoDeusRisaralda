import React from "react";
import { Outlet } from "react-router-dom";
import AsideProfile from "../AsideProfile";
import HeaderProfile from "../HeaderProfile";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Header from "../Header";
const ProfileLayout = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <div className="lg:pl-[250px] py-[10vh]">
        <h1>Por favor inicie sesion para visualizar su usuario</h1>
      </div>
    );
  }
  return (
    <div className="lg:pl-[250px] py-[10vh] dar:bg-dark">
      <Header/>
      <HeaderProfile />
      <AsideProfile />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
