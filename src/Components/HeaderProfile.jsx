import React, { useState } from "react";
import { motion } from "framer-motion";
import { TitleH2 } from "./Global/ContainerTitle";
import ContainerText from "./Global/ContainerText";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { IconEdit } from "./Global/Icons";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

const HeaderProfile = () => {
  const { user, UploadImage, DeleteImage, loading, setLoading, typeAccount } =
    useContext(AuthContext);

  const handleUploadImage = async (file) => {
    try {
      setLoading(true);
      await UploadImage(file);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleUploadImage(file);
    }
  };

  const handleImageDelete = async () => {
    setLoading(true);

    try {
      await DeleteImage();
    } catch (error) {
      console.error("Error al eliminar imagen:", error);
    } finally {
      setLoading(false);
    }
  };

  const isImageChange = ()=>{
    return user?.user_metadata?.avatar_url !== "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s";
  }
  
  return (
    <div className="p-2 text-black dark:text-white">
      <div className="h-[150px] w-full bg-gray-200 dark:bg-dark2 rounded-tl-lg rounded-tr-lg"></div>
      <div className="h-[150px] w-full bg-white dark:bg-dark rounded-bl-lg rounded-br-lg relative py-2 pl-40 shadow-xl">
        <div>
          {user ? (
            <div className="w-30 h-30 bg-gray-300 dark:bg-gray-600 rounded-full absolute -top-1/2 left-2 object-contain">
              <img
                src={`${user?.user_metadata.avatar_url}`}
                alt=""
                className="rounded-full w-full h-full object-cover"
              />
              {typeAccount === "Empresa" && (
                <Menu
                  menuButton={
                    <MenuButton
                      className={
                        "absolute -bottom-5 bg-[#f9f9f9] dark:bg-dark2 p-2 rounded-xl cursor-pointer"
                      }
                    >
                      <IconEdit />
                    </MenuButton>
                  }
                  menuClassName={
                    "bg-[#f9f9f9] dark:bg-dark2 py-4 px-2 rounded-lg shadow-lg w-max"
                  }
                >
                  <MenuItem
                    className={
                      "py-2 px-4 bg-white rounded-lg mb-2 cursor-pointer hover:bg-gray-300 dark:bg-dark2 dark:hover:bg-black/90 border border-gray-200"
                    }
                  >
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleChangeImage}
                        disabled={loading}
                      />
                         {isImageChange() ? "Actualizar imagen" : "Subir imagen"}
                    </label>
                  </MenuItem>
                  {isImageChange() && (
                    <MenuItem
                      className={
                        "py-2 px-4 bg-white rounded-lg mb-2 cursor-pointer hover:bg-gray-300 dark:bg-dark2 dark:hover:bg-black/90 border border-gray-200"
                      }
                      onClick={handleImageDelete}
                      disabled={loading}
                    >
                      Eliminar foto
                    </MenuItem>
                  )}
                </Menu>
              )}
            </div>
          ) : (
            <div className="w-30 h-30 bg-gray-300 dark:bg-gray-600 rounded-full absolute -top-1/2 left-2"></div>
          )}

          <div>
            <TitleH2
              text={
                user?.user_metadata?.displayName ||
                user?.user_metadata?.full_name
              }
              style="font-medium text-xl dark:text-white"
            />

            <ContainerText
              text={user?.email}
              style={"text-gray-700 dark:text-gray-300 text-sm"}
            />
            <p className="text-gray-500 text-sm my-4">
              Tipo de cuenta: {localStorage.getItem("typeAccount")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
