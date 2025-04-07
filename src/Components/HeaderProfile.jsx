import React, { useState } from "react";
import { motion } from "framer-motion";
import { TitleH2 } from "./Global/ContainerTitle";
import ContainerText from "./Global/ContainerText";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { IconEdit } from "./Icons";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

const HeaderProfile = () => {
  const { user, UploadImage, DeleteImage, loading, setLoading, typeAccount } =
    useContext(AuthContext);
  const [fileImage, setFileImage] = useState(null);

  const handleUploadImage = async (file) => {
    try {
      setLoading(true);
      await UploadImage(file);
      setFileImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileImage(file);
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
                        "absolute -bottom-5 dark:bg-dark2 p-2 rounded-xl cursor-pointer"
                      }
                    >
                      <IconEdit className="text-gray-500 dark:text-gray-300 hover:text-gray-600 transition-colors" />
                    </MenuButton>
                  }
                  menuClassName={
                    "bg-white dark:bg-dark2 py-4 px-2 rounded-lg shadow-lg w-max"
                  }
                >
                  <MenuItem
                    className={
                      "py-2 px-4 bg-black/10 hover:bg-gray-600 rounded-lg mb-2 cursor-pointer"
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
                      Subir foto
                    </label>
                  </MenuItem>
                  <MenuItem
                    className={
                      "py-2 px-4 bg-black/10 hover:bg-gray-600 rounded-lg mb-2 cursor-pointer"
                    }
                    onClick={handleImageDelete}
                    disabled={loading}
                  >
                    Eliminar foto
                  </MenuItem>
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
