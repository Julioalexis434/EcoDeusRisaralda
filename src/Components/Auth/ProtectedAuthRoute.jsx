import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedAuthRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const ChangeNavigate = () => {
      navigate("/");
      return null;
  };
{loading && (
<p>Cargando...</p> // Para evitar parpadeo mientras se verifica el usuario
)}


  return user ? ChangeNavigate() : children; //no está autenticado, muestra la página
};

export default ProtectedAuthRoute;
