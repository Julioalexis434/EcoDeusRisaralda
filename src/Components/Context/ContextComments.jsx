import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "./AuthContext";

export const ContextComments = createContext();

export function ProviderComments({ children }) {
  const [commentsByPlace, setCommentsByPlace] = useState(() => {
    const saved = localStorage.getItem("commentsByPlace");
    return saved ? JSON.parse(saved) : {};
  });
  const {user} = useContext(AuthContext)

  useEffect(() => {
    localStorage.setItem("commentsByPlace", JSON.stringify(commentsByPlace));
  }, [commentsByPlace]);

  // Agregar comentario a un lugar específico
  const addComment = (placeId, text, rating) => {
    if (!user) return; // Verificar si hay un usuario autenticado
    const newComment = {
      id: uuidv4(),
      text,
      userId: user.id,
      picture: user?.user_metadata?.picture || user?.user_metadata?.avatar_url || "https://www.svgrepo.com/show/511194/user-circle.svg",
      name: user?.user_metadata?.full_name || user?.user_metadata?.name || user.user_metadata.displayName || "Anonimo",
      rating: rating,
      likes: 0,
      createdAt: new Date().toISOString(),
      likedBy: [],
      replies: [], // <- Aquí agregamos respuestas
    };
    

    setCommentsByPlace((prev) => ({
      ...prev,
      [placeId]: [newComment, ...(prev[placeId] || [])],
    }));
  };
  
  // Editar un comentario en un lugar
  const editComment = (placeId, commentId, newText) => {
    setCommentsByPlace((prev) => ({
      ...prev,
      [placeId]: prev[placeId].map((comment) =>
        comment.id === commentId ? { ...comment, text: newText } : comment
      ),
    }));
  };


  // Eliminar comentario
  const deleteComment = (placeId, commentId) => {
    setCommentsByPlace((prev) => ({
      ...prev,
      [placeId]: prev[placeId].filter((comment) => comment.id !== commentId),
    }));
  };

  // Dar like
const toggleLike = (placeId, commentId) => {
  if (!user) return; // Asegúrate de que hay un usuario autenticado

  setCommentsByPlace((prev) => ({
    ...prev,
    [placeId]: prev[placeId].map((comment) => {
      if (comment.id === commentId) {
        const likedBy = comment.likedBy || [];
        const hasLiked = likedBy.includes(user.id);

        if (hasLiked) {
          // Si ya le dio like, lo quitamos
          return {
            ...comment,
            likes: comment.likes - 1,
            likedBy: likedBy.filter((id) => id !== user.id),
          };
        } else {
          // Si no le ha dado like, lo agregamos
          return {
            ...comment,
            likes: comment.likes + 1,
            likedBy: [...likedBy, user.id],
          };
        }
      }
      return comment;
    }),
  }));
};

  return (
    <ContextComments.Provider
      value={{
        commentsByPlace,
        addComment,
        editComment,
        deleteComment,
        toggleLike,
      }}
    >
      {children}
    </ContextComments.Provider>
  );
}
