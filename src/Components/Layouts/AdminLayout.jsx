import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";
import Accessibility from "../Accessibility";

const AdminLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Accessibility />

      <Nav style={"flex lg:hidden w-full fixed bottom-0 left-0"} />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
