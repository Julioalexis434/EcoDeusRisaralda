import React from "react";
import { FaEdit, FaRegComment, FaStar } from "react-icons/fa";
import { MenuButton } from "@szhsin/react-menu";
import { MenuItem } from "@szhsin/react-menu";
import { Menu } from "@szhsin/react-menu";
import Anchor from "../Global/Anchor";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { IconEdit, IconOption, IconReport } from "../Global/Icons";
import { FiDelete } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { ContextComments } from "../Context/ContextComments";

const CardComentary = ({ comment, lugar }) => {
  const { toggleLike, deleteComment, editComment } =
    useContext(ContextComments);
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [showReportModal, setShowReportModal] = useState(false);
  const handleReport = (reason) => {
    console.log(`Reportado por: ${reason}`);
    setShowReportModal(false);
  };

  // FORMATEAR FECHA
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <>
      <div className="bg-white dark:bg-dark2 rounded-lg border-1 border-gray-100 p-6 mb-6 w-full  max-w-4xl flex flex-col gap-4">
        <div className="flex justify-between items-center flex-wrap text-sm">
          <span className="text-gray-400">{formatDate(comment.createdAt)}</span>
          {!isEditing &&
            (user && user.id === comment.userId ? (
              <Menu
                menuButton={
                  <MenuButton className="hover:bg-gray-400 dark:hover:bg-dark2 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center">
                    <IconOption />
                  </MenuButton>
                }
                align="end"
                transition
                menuClassName="bg-white p-4 rounded-lg dark:bg-dark2 w-max"
              >
                <MenuItem
                  className="hover:shadow-lg transition py-4 border-b border-b-gray-300 px-4 flex items-center cursor-pointer"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit className="dark:text-black" />
                  Editar
                </MenuItem>

                <MenuItem
                  className="hover:shadow-lg transition py-4 border-b border-b-gray-300 px-4 flex items-center cursor-pointer"
                  onClick={() => deleteComment(lugar.id, comment.id)}
                >
                  <FiDelete className="dark:text-black" />
                  Eliminar
                </MenuItem>
              </Menu>
            ) : (
              <button
                className="p-1 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
                onClick={() => setShowReportModal(true)}
              >
                <IconReport />
              </button>
            ))} 
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <img
            src={comment.picture}
            alt={`foto de perfil de ${comment.name}`}
            className="h-12 w-12 rounded-full object-center"
          />
          <div className="flex flex-col gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-sm ${
                    index < Math.floor(comment.rating)
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              ))}
            </div>
            <span>{comment.name}</span>
          </div>
        </div>

        <div className="px-10 my-4">
          {isEditing ? (
            <div className="flex items-center flex-wrap gap-4 justify-between">
              <textarea
                className="bg-transparent outline-none border py-2 px-4 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-500 max-w-xl resize-none overflow-hidden w-full"
                style={{ height: "40px" }}
                value={editText}
                onChange={(e) => {
                  e.target.style.height = "40px";
                  const newHeight = Math.min(e.target.scrollHeight, 150);
                  e.target.style.height = `${newHeight}px`;
                  if (e.target.scrollHeight > 150) {
                    e.target.style.overflowY = "auto";
                  } else {
                    e.target.style.overflowY = "hidden";
                  }
                  setEditText(e.target.value);
                }}
              />
              <div className="flex gap-2 flex-wrap">
                <button
                  className="bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-600 transition-colors"
                  onClick={() => {
                    setIsEditing(false);
                    editComment(lugar.id, comment.id, editText);
                  }}
                >
                  Guardar
                </button>

                <button
                  className="bg-gray-500 py-2 px-4 rounded-lg text-white hover:bg-gray-600 transition-colors"
                  onClick={() => {
                    setIsEditing(false);
                    setEditText(comment.text);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
          )}
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
            <AiOutlineLike className="dark:text-black" />
            {comment.likes}
          </button>
        </div>
      </div>

      {/* MODAL DE REPORTE */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white dark:bg-dark2 rounded-lg p-6 w-11/12 max-w-md shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-center">
              ¿Por qué quieres reportar este comentario?
            </h2>
            <div className="flex flex-col gap-3">
              <button
                className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded transition"
                onClick={() => handleReport("Contenido inapropiado")}
              >
                Contenido inapropiado
              </button>
              <button
                className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium py-2 px-4 rounded transition"
                onClick={() => handleReport("Spam")}
              >
                Spam
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
                onClick={() => handleReport("Otro")}
              >
                Otro
              </button>
            </div>
            <button
              className="mt-6 block mx-auto text-sm text-gray-500 hover:underline"
              onClick={() => setShowReportModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardComentary;
