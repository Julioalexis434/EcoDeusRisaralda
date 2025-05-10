import React from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "./Icons";

const ButtonBack = ({url}) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="px-4 py-2 rounded-full bg-gray-200 absolute top-[15vh] left-5 cursor-pointer text-white dark:bg-dark2"
        onClick={() => {
          navigate(url);
        }}
      >
        <IconArrowLeft />
      </button>
    </>
  );
};

export default ButtonBack;
