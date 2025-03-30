import React from "react";
import ContainerText from "../Global/ContainerText";
import  { TitleH1, TitleH2 } from "../Global/ContainerTitle";

const PoliticsAndPrivacity = () => {
  return (
    <section className="min-h-screen py-20 dark:text-white">
      <div className="w-[90%] mx-auto max-w-7xl">
        <TitleH2 text={"Politicas y privacidad"}/>
        <ContainerText text={"Titulo de terminos"}/>
      </div>
    </section>
  );
};

export default PoliticsAndPrivacity;
