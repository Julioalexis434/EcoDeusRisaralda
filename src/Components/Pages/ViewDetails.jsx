import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextDestinations } from "../Context/ContextDestinations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IconAddFavorite, IconDestination, IconSend } from "../Global/Icons";
import { ContextFavorite } from "../Context/ContextFavorite";
import "swiper/css";
import "swiper/css/navigation";
import { FaHeart, FaStar } from "react-icons/fa";
import CardComentary from "../Cards/CardComentary";
import { ContextComments } from "../Context/ContextComments";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ContextModalLogin } from "../Context/ContextModalLogin";

const ViewDetails = () => {
  const { name } = useParams();
  const { destinations, hotels, restaurants, municipalities } =
    useContext(ContextDestinations);

  // Buscar el lugar que coincide con el nombre en todos los municipios
  const lugar = destinations.municipios
    .flatMap((municipio) => municipio.lugares)
    .find((lugar) => lugar.nombre === name)
    ? {
        ...destinations.municipios
          .flatMap((m) => m.lugares)
          .find((l) => l.nombre === name),
        tipo: "lugar",
      }
    : hotels.find((hotel) => hotel.nombre === name)
    ? { ...hotels.find((h) => h.nombre === name), tipo: "hotel" }
    : municipalities
        .map((municipality) => restaurants[municipality])
        .flat()
        .find((restaurant) => restaurant?.nombre === name)
    ? {
        ...municipalities
          .map((m) => restaurants[m])
          .flat()
          .find((r) => r?.nombre === name),
        tipo: "restaurante",
      }
    : null;

  const {
    addPlaces,
    addHotels,
    addRestaurant,
    placesFavorites,
    restaurantsFavorites,
    hotelsFavorites,
  } = useContext(ContextFavorite);
  const isFavorite =
    placesFavorites.some((place) => place.id === lugar.id) ||
    hotelsFavorites.some((hotel) => hotel.id === lugar.id) ||
    restaurantsFavorites.some((restaurant) => restaurant.id === lugar.id);

  if (!lugar) {
    return (
      <div className="pt-20 text-center text-red-500">Lugar no encontrado</div>
    );
  }

  const {
    commentsByPlace,
    addComment,
    editComment,
    deleteComment,
    toggleLike,
  } = useContext(ContextComments);

  const comments = commentsByPlace[lugar.id] || [];
  const [inputComment, setInputComment] = useState("");
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [errorSentComment, setErrorSentComment] = useState("");
  const {toggleLoginModal} = useContext(ContextModalLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputComment.trim() === "" || rating === 0) {
      // Mostrar mensaje de error
      user
        ? setErrorSentComment("Debes agregar un comentario y puntuación")
        : setErrorSentComment("Debes Iniciar sesión para hacer esta acción");

      return;
    }
    addComment(lugar.id, inputComment, rating, user.id);
    setInputComment(""); // Limpiar textarea
    setRating(0); // Limpiar rating
    setErrorSentComment("");
  };

  const buttonFavorite = (text, style) => {
    return (
      <button
        className={`p-2 cursor-pointer flex border-1 justify-center rounded-full items-center gap-2 ${style}`}
        onClick={() => {
          if (user) {
            switch (lugar.tipo) {
              case "lugar":
                addPlaces(lugar, lugar.id);
                break;
              case "hotel":
                addHotels(lugar, lugar.id);
                break;
              case "restaurante":
                addRestaurant(lugar, lugar.id);
                break;
              default:
                console.warn("Tipo de lugar no reconocido");
            }
          } else {
            toggleLoginModal(
              "¡Inicia sesión para guardar tus lugares favoritos!"
            );
          }
        }}
      >
        <FaHeart
          className={`${
            isFavorite ? "text-yellow-500 dark:text-red-500 " : "text-gray-600"
          }`}
        />
        {text}
      </button>
    );
  };

  return (
    <section className="min-h-screen py-20  px-3 lg:px-22 shadow-2xl shadow-button rounded-2xl dark:text-white">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="font-bold text-xl lg:text-3xl text-green-800  text-center">
          {lugar?.nombre}
        </h1>

        {buttonFavorite()}
      </div>

      <div className="my-2">
        {/* AQUI SE PUEDE UTILIZAR LAS IMAGENES PARA HACER EL SLIDER CON LA BIBIOLTECA SWIPPER O OTRA DE PREFERENCIA*/}
        {lugar.imagenes && (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            loop
            className="w-full lg:h-[500px] object-cover rounded-lg "
          >
            {lugar.imagenes?.map((img, index) => (
              <SwiperSlide className="w-full h-full" key={index}>
                <img
                  className=" w-full object-cover"
                  src={img}
                  alt={`${lugar.nombre} ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {lugar.imagen && (
          <img
            src={lugar.imagen}
            alt={lugar.nombre}
            className="w-full lg:h-[500px] object-cover rounded-lg"
          />
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-500">
            Direccion: {lugar?.direccion || "Sin dirección"}
          </h2>
          <h2 className="text-gray-500">
            Telefono: {lugar?.telefono || "Sin teléfono"}
          </h2>
        </div>

        <div className="justify-between flex flex-wrap gap-4">
          <div className="my-4 flex flex-col gap-2">
            <div className="">
              {lugar?.puntuacion ? (
                <>
                  <h1 className="text-xl font-bold">Puntuación</h1>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-sm ${
                          index < Math.floor(lugar.puntuacion)
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  <h1 className="text-xl font-bold">Puntuación</h1>
                  <h1 className="text-xl m-2">⭐⭐⭐⭐⭐</h1>
                </div>
              )}
            </div>
          </div>

          {lugar.socialLinks && (
            <div className="flex  items-center gap-4 rounded-lg p-2">
              {lugar.socialLinks.map((socialLink, index) => (
                <a key={index} href={socialLink.url} className="text-3xl">
                  {socialLink.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* DESCRIPCIÓN */}
      <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-5">
        <div className="bg-gray-100 dark:bg-dark2 my-5  rounded-xl p-4">
          <h1 className="text-xl my-3">Descripción :</h1>
          <p className="text-xl text-gray-500">
            {lugar?.descripcion || "Sin descripción"}
          </p>
        </div>

        <div className="my-5 shadow-lg px-2 rounded-lg">
          <h1 className="text-2xl font-bold my-3">Ubicación</h1>
          <img
            src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/0/2/csm_google-my-maps_55b8661ca0.webp"
            alt="imagen de mapa"
            className="rounded-lg"
          />
          <a
            href="#"
            className="text-xl my-3 flex items-center gap-x-2 font-medium hover:underline justify-end text-gray-500 hover:text-gray-700 transition-colors"
          >
            Ver ubicación
            <IconDestination />
          </a>
        </div>
      </div>

      {/* Escribir comentarios */}
      <div className="flex flex-col gap-4">
        <hr className="border-t border-gray-300" />
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <h1 className="text-xl font-medium">¿Ya has visitado este lugar?</h1>
          {buttonFavorite(
            `${isFavorite ? "Guardado" : "Guardar"}`,
            "w-full max-w-[300px]"
          )}
        </div>

        <article className="rounded-2xl">
          <h1 className="text-xl my-3">Comparte tu opinion</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  className={`text-2xl cursor-pointer ${
                    ratingValue <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-500"
                  }`}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(ratingValue)}
                />
              );
            })}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <textarea
                placeholder="Escribe tu mensaje aquí..."
                className="flex-1 bg-transparent outline-none border py-2 px-4 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-500 max-w-xl resize-none overflow-hidden"
                style={{ height: "40px" }}
                value={inputComment}
                onChange={(e) => {
                  e.target.style.height = "40px";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                  setInputComment(e.target.value);
                }}
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 transition-colors p-2 rounded-full"
              >
                <IconSend className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
          <span className="text-red-500">{errorSentComment}</span>
        </article>
      </div>

      <hr className="border-t border-gray-400 my-5" />

      <div className="my-5">
        <h1 className="text-2xl font-bold my-3">Comentarios</h1>
        {comments.length === 0 ? (
          <p className="text-gray-500">Aún no hay comentarios.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-4 justify-items-start">
            {comments.map((comment) => (
              <CardComentary
                key={comment.id}
                comment={comment}
                lugar={lugar}
                toggleLike={toggleLike}
                deleteComment={deleteComment}
                rating={rating}
                editComment={editComment}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewDetails;
