import React from "react";
import { IconAccesibility, IconClose, IconContrast, IconLink } from "./Icons";
import { useState, useContext } from "react";
import { ContextAccesibility } from "./Context/ContextAccessibility";
import { useEffect } from "react";

const Accessibility = () => {
  const [asideToggle, setAsideToogle] = useState(false);
  const { changeContrast, setchangeContrast, changeSize, setchangeSize } = useContext(ContextAccesibility);

  const handleAsideToggle = () => {
    setAsideToogle(!asideToggle);
  };

  useEffect(() => {
    console.log(changeSize);
  }, [changeSize]);
  return (
    <>
      <button
        onClick={handleAsideToggle}
        className="p-2 rounded-full bg- fixed bottom-20 left-10 lg:bottom-10 lg:left-10 shadow-xl z-7 bg-[#5a804c] cursor-pointer text-white hover:scale-110 transition"
      >
        <IconAccesibility />
      </button>

      <div
        className={`fixed z-11 h-screen w-[90%] max-w-[400px] top-0 shadow-xl shadow-black  transition-all ${
          asideToggle ? "left-0" : "-left-full"
        }`}
      >
        <div className="bg-gray-100 w-full h-full rounded-br-2xl rounded-tr-2xl">
          <div className="bg-[#00C951] w-full h-15 flex items-center justify-between p-3">
            <h2 className=" text-white font-medium">
              Menu de Accesibilidad
            </h2>

            <button className="rounded-full bg-white cursor-pointer" onClick={()=>{
              setAsideToogle(false)
            }}><IconClose/></button>
          </div>
          <div className="bg-gray-100  relative -top-3 rounded-tl-lg rounded-tr-lg p-4 grid grid-cols-2 gap-4">

            <div className="p-4 bg-white rounded-sm flex flex-col justify-center items-center gap-2 font-bold cursor-pointer border-2 border-white hover:border-2 hover:border-[#00c951] transition duration-200">
              <IconContrast />
              <select 
                name="contrast" 
                className="bg-gray-200 p-2 rounded-md outline-0"
                value={changeContrast}
                onChange={(e) => setchangeContrast(parseInt(e.target.value))}
              >
                <option value={1}>Contraste normal</option>
                <option value={2}>Contraste Medio</option>
                <option value={3}>Contraste Alto</option>
              </select>
            </div>

            <div className="p-4 bg-white rounded-sm flex flex-col justify-center items-center gap-2 font-bold cursor-pointer border-2 border-white hover:border-2 hover:border-[#00c951] transition duration-200 ">
              <IconLink />
              <p>Resaltar Enlaces</p>
            </div>

            <div className="p-4 bg-white rounded-sm flex flex-col justify-center items-center gap-2 font-bold cursor-pointer border-2 border-white hover:border-2 hover:border-[#00c951] transition duration-200 ">
              <IconLink />
              <select 
                name="contrast" 
                className="bg-gray-200 p-2 rounded-md outline-0"
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
