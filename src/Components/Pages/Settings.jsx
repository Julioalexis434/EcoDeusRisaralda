import React, { useContext } from "react";
import { TitleH1, TitleH2 } from "../Global/ContainerTitle";
import ContainerText from "../Global/ContainerText";
import { Button, Switch } from "@headlessui/react";
import { useState } from "react";
import { FiBell, FiSun, FiMoon, FiTrash2 } from "react-icons/fi";
import { ThemeContext } from "../Context/ThemeContext";
import ButtonBack from "../Global/ButtonBack";

const Settings = () => {
  const [enabled, setEnabled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`py-[12vh] ${theme === 'dark' ? 'bg-dark' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <ButtonBack url={-1}/>
      <div className="w-[90%] max-w-7xl mx-auto">
        <TitleH2 text={"Configuración"} style={`font-bold text-3xl mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">        
        {/* CONTENEDOR NOTIFICACIONES */}
        <div className={`flex flex-col gap-6 p-6 ${theme === 'dark' ? 'text-white bg-dark2 border-emerald-600' : 'text-gray-700 bg-white border-emerald-200'} border-2 rounded-xl w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 my-5`}>
          <div className="flex items-center gap-3">
            <FiBell className="text-emerald-600 text-xl" />
            <TitleH2 text={"Notificaciones"} style={"text-emerald-600 font-semibold"} />
          </div>
          
          <div className={`flex items-center justify-between p-3  rounded-lg transition-colors duration-200`}>
            <ContainerText text={"Recibir notificaciones de lugares nuevos"} />
            <Switch 
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-emerald-500' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
            >
              <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200`} />
            </Switch>
          </div>

          <div className={`flex items-center justify-between p-3  rounded-lg transition-colors duration-200`}>
            <ContainerText text={"Recibir notificaciones de comentarios"} />
            <Switch 
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-emerald-500' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
            >
              <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200`} />
            </Switch>
          </div>
        </div>

         {/* APARIENCIA */}
         <div className={`flex flex-col gap-6 p-6 ${theme === 'dark' ? 'text-white bg-dark2 border-gray-600' : 'text-gray-700 bg-white border-gray-200'} border-2 rounded-xl w-full max-w-2xl shadow-lg my-5`}>
          <div className="flex items-center gap-3">
            {theme === 'light' ? <FiSun className="text-amber-500 text-xl" /> : <FiMoon className="text-indigo-500 text-xl" />}
            <TitleH2 text={"Apariencia"} style={`font-semibold ${theme === 'dark' ? 'text-white' : ''}`} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <button 
              onClick={theme === 'dark' ? toggleTheme : undefined}
              className={`flex items-center justify-between p-4 rounded-lg ${theme === 'light' ? 'bg-amber-50 border-2 border-amber-200' : 'bg-dark2 border-2 border-gray-600'} hover:bg-amber-50  dark:hover:bg-[#101010] transition-colors duration-200 cursor-pointer`}
            >
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : ''}`}>Tema claro</span>
              <FiSun className="text-amber-500" />
            </button>
            <button 
              onClick={theme === 'light' ? toggleTheme : undefined}
              className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-indigo-50 border-2 border-indigo-200 dark:bg-dark' : 'bg-gray-100'} hover:bg-indigo-50  dark:hover:bg-[#101010] transition-colors duration-200 cursor-pointer`}
            >
              <span className="font-medium">Tema oscuro</span>
              <FiMoon className="text-indigo-500" />
            </button>
          </div>
        </div>  

        {/* ZONA DE PELIGRO */}
        <div className={`flex flex-col gap-6 p-6 ${theme === 'dark' ? 'text-red-400 bg-dark2 border-red-800' : 'text-red-700 bg-white border-red-200'} border-2 rounded-xl w-full max-w-2xl shadow-lg my-5`}>
          <div className="flex items-center gap-3">
            <FiTrash2 className="text-red-500 text-xl" />
            <TitleH2 text={"Zona de peligro"} style={"text-red-500 font-semibold"} />
          </div>
          
          <div className="flex items-center justify-between p-3">
            <ContainerText text={"Eliminar Cuenta"} />
            <button className={`px-6 py-2 border-2 border-red-500 rounded-lg ${theme === 'dark' ? 'bg-red-500/10' : 'bg-red-500/20'} text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium cursor-pointer`}>
              Eliminar cuenta
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
