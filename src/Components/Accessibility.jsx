import React from "react";
import { IconAccesibility, IconClose, IconContrast, IconLink } from "./Global/Icons";
import { useState, useContext } from "react";
import { ContextAccesibility } from "./Context/ContextAccessibility";

const Accessibility = () => {
  const [asideToggle, setAsideToggle] = useState(false);
  const { changeContrast, setchangeContrast, changeSize, setchangeSize, highlightlinks, sethighlightlinks } = useContext(ContextAccesibility);

  const handleAsideToggle = () => {
    setAsideToggle(!asideToggle);
  };
  return (
    <>
      <button
        onClick={handleAsideToggle}
        className="p-2 rounded-full bg- fixed bottom-10 left-3 lg:bottom-10 lg:left-10 shadow-xl z-30 bg-[#5a804c] cursor-pointer text-white hover:scale-110 transition"
      >
        <IconAccesibility />
      </button>

      <div
        className={`fixed z-11 h-screen w-[90%] max-w-[400px] top-0 shadow-xl shadow-black  transition-all ${
          asideToggle ? "left-0" : "-left-full"
        }`}
      >
        <div className="bg-gray-100 w-full h-full rounded-br-2xl rounded-tr-2xl dark:bg-dark">
          <div className="bg-greenDark w-full h-15 flex items-center justify-between p-3">
            <h2 className=" text-white font-medium">
              Menu de Accesibilidad
            </h2>

            <button className="rounded-full bg-white cursor-pointer" onClick={()=>{
              setAsideToggle(false)
            }}><IconClose/></button>
          </div>
          <div className="bg-gray-100 dark:bg-dark  relative -top-3 rounded-tl-lg rounded-tr-lg p-4 grid grid-cols-2 gap-4">

            <div className="p-4 bg-white rounded-lg flex flex-col justify-center items-center gap-2 font-bold cursor-pointer border-2 border-white hover:border-2 hover:border-greenDark transition duration-200 dark:bg-dark2 dark:border-dark">
              <IconContrast />
              <select 
                name="contrast" 
                className="bg-gray-200 p-2 w-full rounded-md outline-0"
                value={changeContrast}
                onChange={(e) => setchangeContrast(parseInt(e.target.value))}
              >
                <option value={1}>Contraste normal</option>
                <option value={2}>Contraste Medio</option>
                <option value={3}>Contraste Alto</option>
              </select>
            </div>

            <div className={`p-4 ${highlightlinks ? "border-greenDark dark:border-greenDark" : "border-white dark:border-dark"} bg-white rounded-lg flex flex-col justify-center items-center gap-2 font-bold cursor-pointer border-2  hover:border-2 hover:border-greenDark transition duration-200 dark:bg-dark2 dark:text-white `} onClick={()=>{sethighlightlinks(!highlightlinks)}} >
              <IconLink />
              <p>Resaltar Enlaces</p>
            </div>

            <div className="p-4 bg-white rounded-lg flex flex-col justify-center items-center gap-2 font-bold cursor-pointer border-2 border-white hover:border-2 hover:border-greenDark transition duration-200 dark:bg-dark2 dark:border-dark ">
              <IconLink />
              <select 
                name="contrast" 
                className="bg-gray-200 p-2 rounded-md outline-0 w-full"
                value={changeSize}
                onChange={(e) => {
                  setchangeSize(parseInt(e.target.value))                  
                }}
              >
                <option value={1}>Tamaño normal</option>
                <option value={2}>Tamaño Medio</option>
                <option value={3}>Tamaño Alto</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
