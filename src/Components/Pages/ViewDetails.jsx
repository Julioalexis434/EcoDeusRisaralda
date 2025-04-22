import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextDestinations } from "../Context/ContextDestinations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IconAddFavorite, IconDestination, IconSend } from "../Icons";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContextFavorite } from "../Context/ContextFavorite";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import CardComentary from "../CardComentary";
import { ContextComments } from "../Context/ContextComments";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const ViewDetails = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const { name } = useParams();
  const { destinations, hotels, restaurants, municipalities } =
    useContext(ContextDestinations);
    const {user} = useContext(AuthContext)

  // Buscar el lugar que coincide con el nombre en todos los municipios
  const lugar =
    destinations.municipios
      .flatMap((municipio) => municipio.lugares)
      .find((lugar) => lugar.nombre === name) ||
    hotels.find((hotel) => hotel.nombre === name) ||
    municipalities
      .map((municipality) => restaurants[municipality])
      .flat()
      .find((restaurant) => restaurant?.nombre === name);

  const { addPlaces, placesFavorites } = useContext(ContextFavorite);
  const isFavorite = placesFavorites.some((place) => place.id === lugar.id);

  if (!lugar) {
    return (
      <div className="pt-20 text-center text-red-500">Lugar no encontrado</div>
    );
  }

  const { commentsByPlace, addComment, deleteComment, toggleLike } =
    useContext(ContextComments);
  const comments = commentsByPlace[lugar.id] || [];
  const [inputComment, setInputComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Por favor, selecciona una calificación");
      return;
    } else {
      if (inputComment.trim() === "") return;
      addComment(lugar.id, inputComment, rating, user.id );
      setRating(0);
      setInputComment(""); // Limpiar textarea
    }
  };
  return (
    <section className="min-h-screen py-20 px-2 shadow-2xl shadow-button rounded-2xl dark:text-white lg:px-20">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="font-bold text-xl text-green-800 text-center">
          {lugar?.nombre}
        </h1>

        <div className="w-full flex justify-end lg:w-auto">
          <button
            className={`p-2 rounded-lg cursor-pointer flex  border-1 justify-between items-center gap-2 ${
              isFavorite ? "bg-[#14cc5e]" : "bg-white dark:bg-dark"
            }`}
          >
            Guardar
            <IconAddFavorite />
          </button>
        </div>
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
            className="rounded-2xl h-screen"
          >
            {lugar.imagenes?.map((img, index) => (
              <SwiperSlide className="w-full h-full" key={index}>
                <img
                  className=" w-full h-full object-cover rounded-lg"
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

      <div className="flex flex-col gap-2">
        <h2 className="text-gray-500">Direccion: {lugar?.direccion}</h2>
        <h2 className="text-gray-500">Telefono: {lugar?.telefono}</h2>
      </div>

      <div className="justify-between flex flex-wrap gap-4">
        <div className="my-4 flex flex-col gap-2">
          <div className="">
            {lugar?.estrellas ? (
              <>
                <h1 className="text-xl font-bold">Puntuación</h1>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-sm ${
                        index < Math.floor(lugar.estrellas)
                          ? "text-yellow-400"
                          : "text-gray-300"
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

        <div className="flex  items-center gap-4 rounded-lg p-2">
          <a href="#">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* DESCRIPCIÓN */}
        <div className="bg-gray-100 my-5  rounded-xl p-4">
          <h1 className="text-xl my-3">Descripción :</h1>
          <p className="text-xl text-gray-500">
            {lugar?.descripcion || "Sin descripción"}
          </p>
        </div>
        {/* MAPA DE UBICACION */}
        <div className="my-5">
          <h1 className="text-2xl font-bold  lg:font-normal my-3">Ubicación</h1>
          <div className="flex lg:items-start gap-2 flex-wrap">
            <img
              src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/0/2/csm_google-my-maps_55b8661ca0.webp"
              alt=""
              className="lg:w-3xl"
            />
            <a
              href="#"
              className="text-xl my-3 flex items-center gap-x-2 font-medium lg:font-normal hover:underline justify-end"
            >
              Ver ubicación
              <IconDestination />
            </a>
          </div>
        </div>
      </div>

      {/* Escribir comentarios */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-medium">Opina sobre este lugar</h1>
        <hr className="border-t border-gray-300" />

        <article className="rounded-2xl">
          <h1 className="text-xl my-3">Comparte tu opinion</h1>
          <div className="flex text-xl text-greenDark font-bold items-center gap-4 flex-wrap mb-4">
            <span>Califica este lugar</span>
            <div className="flex">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    className={`text-2xl cursor-pointer ${
                      ratingValue <= (hover || rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(ratingValue)}
                  />
                );
              })}
            </div>
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
        </article>
      </div>

      <hr className="border-t border-gray-400 my-5" />

      <div className="my-5">
        <h1 className="text-2xl font-bold my-3">Comentarios</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">Aún no hay comentarios.</p>
        ) : (
          comments.map((comment) => (
            <CardComentary
              key={comment.id}
              comment={comment}
              lugar={lugar}
              toggleLike={toggleLike}
              deleteComment={deleteComment}
            />
          ))
        )}
        </div>

      </div>
    </section>
    <div className="justify-between flex m-10">
      <div className="">
          <h1 className="text-4xl font-bold">Puntuacion</h1>
          <h1 className="text-3xl m-2">⭐⭐⭐⭐⭐</h1>
      </div>
      <div className="grid grid-cols-4 gap-2"> 
        <button><img className="w-17 h-17" src="https://www.svgrepo.com/show/509923/facebook.svg" alt="" />
</button> 
        <button><img className="w-15 h-15" src="https://www.svgrepo.com/show/512399/instagram-167.svg" alt="" /></button>
        <button><img className="w-15 h-15" src="https://www.svgrepo.com/show/521923/whatsapp.svg" alt="" /></button>
        <button><img className="w-15 h-15" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" /></button>
      </div>
    </div>

    <div className="grid grid-cols-2 m-10">
      <div className="bg-gray-200 mb-5 m-10 rounded-2xl"> 
        <h1 className="text-3xl m-4 rou">Descripcion</h1>
        <p className=" text-1xl m-4">{lugar?.informacion}</p>
      </div>
        
      <div className="mb-5 m-10">
      <img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/0/2/csm_google-my-maps_55b8661ca0.webp" alt="" />
      </div>

    </div>
    <div className="m-10">
      <h1 className=" text-4xl font-bold">Opiniones</h1>
    </div>
        <div className="m-10 bg-gray-200 w-[45%] rounded-2xl">
        <h1 className="m-5 text-2xl">Comparte tu opinion</h1>
        <form action="">
          
          <h1 className="m-5"> ⭐⭐⭐⭐⭐</h1>
          <textarea className="w-[95%] border-2 m-5 rounded-2xl" name="" id=""></textarea>
          
        </form>
        <div className="text-center">
          <button className="m-3 border-1 p-2 rounded-2xl bg-green-600 text-white">Enviar </button>
        </div>
        

        </div>
        <div className="m-10 shadow-2xl w-[96%]">
          <div className="flex">
            <div>
              <img className="w-[100px] h-[100px] m-5" src="https://www.svgrepo.com/show/511194/user-circle.svg" alt="" />
            </div>
            <div>
            <h1 className="m-5">Nombre</h1>
            <h1 className="m-5"> ⭐⭐⭐⭐⭐</h1>
            <p className="m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem voluptate magni quod eum expedita nihil saepe perferendis quaerat consequuntur ratione, excepturi tenetur id sunt ipsam voluptas perspiciatis et accusantium.</p>
            </div>
          </div>


        </div>
        

    </div>
  );
};

export default ViewDetails;
