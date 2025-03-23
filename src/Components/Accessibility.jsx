import React from "react";
import { IconAccesibility } from "./Icons";
import { useState } from "react";

const Accessibility = () => {
  const [asideToggle, setAsideToogle] = useState(false);

  const handleAsideToggle = () => {
    setAsideToogle(!asideToggle);
  }
  return (
    <>
      <button onClick={handleAsideToggle} className="p-2 rounded-full bg- fixed bottom-2 left-2 shadow-xl z-7 bg-[#5a804c] cursor-pointer text-white">
        <IconAccesibility />
      </button>

      <div className={`fixed z-6 h-screen w-[200px] top-0 pt-[10vh] transition-all ${asideToggle ? "left-0" : "-left-full"}`}>
        <div className="bg-[#446034] w-full h-full rounded-br-2xl rounded-tr-2xl"></div>
      </div>
    </>
  );
};

export default Accessibility;
