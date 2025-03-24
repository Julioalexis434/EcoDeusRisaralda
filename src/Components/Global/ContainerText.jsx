import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ContextAccesibility } from "../Context/ContextAccessibility";

const ContainerText = ({ text, style }) => {
  const { changeSize } = useContext(ContextAccesibility);

  const getSizeClass = () => {
    switch (changeSize) {
      case 2:
        return "text-xl";
      case 3:
        return "text-2xl";
      default:
        return "text-lg";
    }
  };

  return (
    <motion.p
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className={`${style} ${getSizeClass()}`}
    >
      {text}
    </motion.p>
  );
};

export default ContainerText;
