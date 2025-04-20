import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextDestinations } from "../Context/ContextDestinations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { IconAddFavorite } from "../Icons";
import { ContextFavorite } from "../Context/ContextFavorite";
import 'swiper/css';
import 'swiper/css/navigation';



const ViewDetails = () => {
 
  const { name } = useParams();
  const { destinations, hotels, restaurants, municipalities } =
    useContext(ContextDestinations);

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
  console.log(lugar);

   const { addPlaces, placesFavorites } = useContext(ContextFavorite);
  const isFavorite = placesFavorites.some((place) => place.id === lugar.id);

  if (!lugar) {
    return (
      <div className="pt-20 text-center text-red-500">Lugar no encontrado</div>
    );
  }

  return (
    <div className="min-h-screen mt-[8%] ml-[5%] mr-[5%] p-5 shadow-2xl shadow-button rounded-2xl">
      <div className="justify-between flex m-10 pt-10">
        <div>
          <h1 className="text-5xl font-bold text-green-800">{lugar?.nombre}</h1>
          <h2 className="m-4 text-gray-500">Direccion: {lugar?.direccion}</h2>
          <h2 className="m-4 text-gray-500">Telefono: {lugar?.telefono}</h2>
        </div>
        
        <div>
           <button
                   className={`p-2 rounded-lg  cursor-pointer flex text-2xl border-2 border-solid border-red-500 justify-between ${
                     isFavorite ? "bg-yellow-500" : "bg-white dark:bg-dark"
                   }`}
                   onClick={() => {
                     addPlaces()
                   }}
                 >  
                 Favorito
                   <IconAddFavorite />
              </button>

        </div>
      </div>
    <section className="pt-20 px-4 text-black m-10">
      
      {/* AQUI SE PUEDE UTILIZAR LAS IMAGENES PARA HACER EL SLIDER CON LA BIBIOLTECA SWIPPER O OTRA DE PREFERENCIA*/}
      <div className="w-[80%] content-center m-auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        loop
        className="rounded-2xl "
      >
        {lugar.imagenes?.map((img, index) => (
          <SwiperSlide className="w-full h-full" key={index}>
            <img
              className=" w-full h-[800px] object-cover"
              src={img}
              alt={`${lugar.nombre} ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {lugar.imagen && <img src={lugar.imagen} alt={lugar.nombre} />}
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
