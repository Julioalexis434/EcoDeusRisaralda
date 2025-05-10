import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Global/Footer";
import HeaderLogin from "../HeaderLogin";

const AuthLayout = () => {
  return (
    <>
      <section className="min-h-screen pt-[10vh]">
        <HeaderLogin/>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default AuthLayout;
