import React from "react";
import { FaEdit, FaRegComment, FaStar } from "react-icons/fa";
import { MenuButton } from "@szhsin/react-menu";
import { MenuItem } from "@szhsin/react-menu";
import { Menu } from "@szhsin/react-menu";
import Anchor from "./Global/Anchor";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { IconEdit, IconOption } from "./Icons";
import { FiDelete } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const CardComentary = ({ comment, lugar, toggleLike, deleteComment }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white dark:bg-dark2 rounded-lg border-1 border-gray-100 p-6 mb-6 w-full max-w-4xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-center flex-wrap text-sm">
        <span className="text-gray-400">{comment.createdAt}</span>
        {user.id === comment.userId && (
          <Menu
            menuButton={
              <MenuButton
                className={
                  "hover:bg-gray-400 dark:hover:bg-dark2 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center"
                }
              >
                <IconOption />
              </MenuButton>
            }
            align="end"
            transition
            menuClassName="bg-white p-4 rounded-lg dark:bg-dark2 w-max"
          >
            <MenuItem className="hover:shadow-lg  transition  cursor-default py-4 border-b border-b-gray-300 px-4 flex items-center">
              <FaEdit />
              Editar
            </MenuItem>

            <MenuItem
              className="hover:shadow-lg  transition  cursor-default py-4 border-b border-b-gray-300 px-4 flex items-center"
              onClick={() => {
                deleteComment(lugar.id, comment.id);
              }}
            >
              <FiDelete />
              Eliminar
            </MenuItem>
          </Menu>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <img
          src={comment.picture}
          alt={`foto de perfil de ${comment.name}`}
          className="h-12 w-12 rounded-full object-center"
        />
        <div className="flex flex-col">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-sm ${
                  index < Math.floor(comment.rating)
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <span>{comment.name}</span>
        </div>
      </div>

      <div className="px-4 my-4">
        <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
      </div>

      <div className="flex gap-6">
        <button
          className={`flex items-center ${
            comment.likes.length > 0 ? "bg-blue-400" : "bg-transparent"
          }`}
          onClick={() => {
            toggleLike(lugar.id, comment.id);
          }}
        >
          <AiOutlineLike />
          {comment.likes}
        </button>
        <button className="flex items-center">
          <FaRegComment />
          Comentar
        </button>
      </div>
    </div>
  );
};

export default CardComentary;
