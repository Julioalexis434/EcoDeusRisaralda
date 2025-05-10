import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ContextAccesibility } from "../Context/ContextAccessibility";

 export const TitleH1 = ({ text, style }) => {
  const {changeSize } = useContext(ContextAccesibility);

  const getSizeClass = () => {
    switch (changeSize) {
      case 2:
        return "text-6xl";
      case 3:
        return "text-7xl";
      default:
        return "text-4xl";
    }
  };

  return (
    <motion.h1
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={` font-bold text-[#016630]  text-center  pb-2   ${style} ${getSizeClass()}`}
    >
      {text}
    </motion.h1>
  );
};
 export const TitleH2 = ({ text, style }) => {
  const {changeSize } = useContext(ContextAccesibility);

  const getSizeClass = () => {
    switch (changeSize) {
      case 2:
        return "text-4xl";
      case 3:
        return "text-5xl";
      default:
        return "text-2xl";
    }
  };

  return (
    <motion.h2
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={` font-bold text-green-800  text-center ${style} ${getSizeClass()}`}
    >
      {text}
    </motion.h2>
  );
};

export default TitleH1 ;



