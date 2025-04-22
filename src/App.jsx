import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Components/Layouts/AdminLayout";
import Home from "./Components/Pages/Home";
import ProfileLayout from "./Components/Layouts/ProfileLayout";
import Sucursales from "./Components/Pages/Sucursales";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Destinations from "./Components/Pages/Destinations";
import Restaurants from "./Components/Pages/Restaurants";
import Hotels from "./Components/Pages/Hotels";
import PoliticsAndPrivacity from "./Components/Pages/PoliticsAndPrivacity";
import TypeAuthentication from "./Components/Auth/TypeAuthentication";
import AuthLayout from "./Components/Layouts/AuthLayout";
import LoginCompany from "./Components/Auth/LoginCompany";
import ProtectedAuthRoute from "./Components/Auth/ProtectedAuthRoute";
import ScrollToTop from "./Components/ScrollToTop";
import Accessibility from "./Components/Accessibility";
import RegisterCompany from "./Components/Auth/RegisterCompany";
import { useContext } from "react";
import { AuthContext } from "./Components/Context/AuthContext";
import { useEffect } from "react";
import Favorites from "./Components/Pages/Favorites";
import ViewDetails from "./Components/Pages/ViewDetails";
import LoginModal from "./Components/LoginModal";

// Hacer que el scroll vuelva arriba cada que navigate cambie
// Scroll to top when navigation changes

const App = () => {
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    document.body.scroll = "none";
  }, [loading]);
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-black/90 text-white flex items-center justify-center z-50">
          <h2 className="text-2xl font-bold">Cargando...</h2>
        </div>
      ) : null}

      <LoginModal/>

      <BrowserRouter>
        <ScrollToTop />
        <Accessibility />
        <Routes>
          <Route path="/authentification" element={<AuthLayout />}>
            <Route
              index
              element={
                <ProtectedAuthRoute>
                  <TypeAuthentication />{" "}
                </ProtectedAuthRoute>
              }
            />
            <Route
              path="loginCompany"
              element={
                <ProtectedAuthRoute>
                  <LoginCompany />
                </ProtectedAuthRoute>
              }
            />

            <Route
              path="registerCompany"
              element={
                <ProtectedAuthRoute>
                  <RegisterCompany />
                </ProtectedAuthRoute>
              }
            />
          </Route>

          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="settings" element={<Settings />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="viewDetails/:name" element={<ViewDetails />} />{" "}
            {/* Modified this line */}
            <Route
              path="politicsAndPrivacity"
              element={<PoliticsAndPrivacity />}
            />
          </Route>

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />}></Route>
            <Route path="sucursales" element={<Sucursales />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>

          <Route path="*" element={<h1>ERROR PAGINA NO ECONTRADA</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
