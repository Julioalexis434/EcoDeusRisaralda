import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";
import Accessibility from "../Accessibility";
import Footer from "../Global/Footer";

const AdminLayout = () => {
  return (
    <div className="relative dark:bg-dark">
      <Header />

      <Outlet />
      <Footer/>
    </div>
  );
};

export default AdminLayout;
