import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Components/Layouts/AdminLayout";
import Home from "./Components/Pages/Home";
import ProfileLayout from "./Components/Layouts/ProfileLayout";
import Sucursales from "./Components/Pages/Sucursales";
import Profile from "./Components/Pages/Profile";
import Settings from "./Components/Pages/Settings";
import Destinations from "./Components/Pages/Destinations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations/>} />
          <Route path="settings" element={<Settings />} />
          
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />}></Route>
            <Route path="sucursales" element={<Sucursales />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>ERROR PAGINA NO ECONTRADA</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
