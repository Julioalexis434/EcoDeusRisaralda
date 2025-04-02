import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const Hotels = () => {
  const [selectedMunicipio, setSelectedMunicipio] = useState('todos')
  const hoteles = [
    // Apía
    {
      id: 1,
      nombre: "Hotel Junior Plaza",
      municipio: "Apía",
      imagen: "https://lh5.googleusercontent.com/p/AF1QipNzPTUPiK5hNNkf1GGi6RS3J7VE3SpHixI5qsCk=w253-h142-k-no",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 2,
      nombre: "LA CASONA Finca Hostal",
      municipio: "Apía",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/square600/641086362.webp?k=e224c94bcb2cda6634f1db6b41889d7095772fa938754547501d73c842680fc1&o=",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 3,
      nombre: "Misiá Emilia, Hostal",
      municipio: "Apía",
      imagen: "https://misi-emilia-caf-hostal.hotelesejecafetero.net/data/Images/1920x1080w/13719/1371959/1371959339/image-apia-6.JPEG",
      puntuacion: 5.0,
      estrellas: 5
    },
      {
        id: 4,
        nombre: "Hostal la abuela",
        municipio: "Apía",
        imagen: "data:image/jpeg;base64,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",
        puntuacion: 4.5,
        estrellas: 4
      },
      {
        id: 5,
        nombre: "Finca Hotel Los Guayacanes",
        municipio: "Apía",
        imagen: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/partner-images/f9/7c/be755962cbd3337f8d1c7a1b2ba2f64da428943562c2e1a92025e4973c6f.jpeg",
        puntuacion: 3.5,
        estrellas: 3
      },
      {
        id: 6,
        nombre: "La Cabanita Santuario",
        municipio: "Apía",
        imagen: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/6c/4e/4cc1f4ef6e948367deca2f42f162bd0f8000bffa308c85dae9eaab1fd4bf.jpeg",
        puntuacion: 3.5,
        estrellas: 3
      },
      {
        id: 7,
        nombre: "Sky Club Eco Hotel",
        municipio: "Apía",
        imagen: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/74/2a/289ce8ee57c5ba7bf9df0879fd1a7750c19ea6dc7df9fff5219495bead90.jpeg",
        puntuacion: 3.5,
        estrellas: 3
      },
      {
        id: 8,
        nombre: "Hotel Dikasar",
        municipio: "Apía",
        imagen: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/partner-images/2a/e0/3d0ff0a7b2b4a7f656f5bc2c5f6ba66fdcd57002fc18e30170235b5fd2b4.jpeg",
        puntuacion: 3.5,
        estrellas: 3
      },
    // Balboa
    {
      id: 9,
      nombre: "Hostal Sueño Paraiso - Observatorio Astronómico",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2d/f9/5b/08/places-to-eat.jpg?w=500&h=500&s=1",
      puntuacion: 4.2,
      estrellas: 4
    },
    {
      id: 10,
      nombre: "Coba Negra Gran Imperio",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/6f/88/9c/hotel-hubicado-sobre.jpg?w=500&h=500&s=1",
      puntuacion: 3.0,
      estrellas: 3
    },
    {
      id: 11,
      nombre: "Alex Country House",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2d/fb/64/3b/property-building.jpg?w=500&h=500&s=1",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 12,
      nombre: "Hotel y Cabanas Rio Mayo",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2e/58/94/06/hotel-y-cabanas-rio-m.jpg?w=500&h=500&s=1",
      puntuacion: 4.2,
      estrellas: 4
    },
    {
      id: 13,
      nombre: "Casa de Cristal Hotel",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2e/0c/54/59/entrance.jpg?w=500&h=500&s=1",
      puntuacion: 4.2,
      estrellas: 4
    },
    {
      id: 14,
      nombre: "Hotel Panorama Sol",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fe/26/71/getlstd-property-photo.jpg?w=500&h=500&s=1",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 15,
      nombre: "Hotel La Posada Del Rancho",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/4a/64/1b/piscina-climatizada.jpg?w=500&h=500&s=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 16,
      nombre: "Hotel La Recta",
      municipio: "Balboa",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ba/50/d4/hermoso.jpg?w=500&h=500&s=1",
      puntuacion: 4.5,
      estrellas: 4
    },
    // Belén de Umbría
    {
      id: 17,
      nombre: "Sky Club Eco HotelSe",
      municipio: "Belén de Umbría",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59133071.jpg?k=d8437ddc685667c5a939f269766c2d40f2aab1df2e90b98ff2818f9649080d6f&o=",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 18,
      nombre: "Hotel Terra Belén",
      municipio: "Belén de Umbría",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426705004.jpg?k=936f269563aa404f821be7c7614d5d8e133d9297475a2ef296b02a635800847e&o=",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 19,
      nombre: "Hotel Mirador Santana",
      municipio: "Belén de Umbría",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/249252809.jpg?k=524fbdf442039f53c9efd1ab307add5a3c9465ceb39ccdf0eed9a8eefcef2077&o=",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 20,
      nombre: "Finca Hotel Tierra Verde",
      municipio: "Belén de Umbría",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2d/f8/ea/2f/pool-view.jpg?w=1400&h=800&s=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 21,
      nombre: "Puertas De San Pedro Hospedaje Campestre",
      municipio: "Belén de Umbría",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c8/a1/f8/caption.jpg?w=1400&h=800&s=1",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 22,
      nombre: "AguasClaras Bamboo Glamping",
      municipio: "Belén de Umbría",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/2e/05/f6/b8/aguas-claras-bamboo-e.jpg?w=1100&h=600&s=1",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 23,
      nombre: "Hotel La Posada",
      municipio: "Belén de Umbría",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/4f/e2/9c/cumpleanos.jpg?w=1400&h=800&s=1",
      puntuacion: 3.8,
      estrellas: 4
    },
    {
      id: 24,
      nombre: "Hotel Orillas del Pizano",
      municipio: "Belén de Umbría",
      imagen: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/322199965.jpg?k=cf1b6732e03c17f65b5c640fd82e7f7678a0bfd244359b8103a93c3a76202a46&o=&s=1024x",
      puntuacion: 4.8,
      estrellas: 5
    },
    // Dosquebradas
    {
      id: 25,
      nombre: "Refugio entre montañas- la loma ecolodge",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/583922178.jpg?k=e9e97fc1b9b5419a8cb33ed0df2b6904aee1e88b3b704491e1bad4cef260d985&o=&hp=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 26,
      nombre: "Hotel Pachamama Campestre",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/571376542.jpg?k=fd4faabda4f740c09e7a5d1f13d6d413696cc2be052c6f661b1ceb82ffa20d54&o=&hp=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 27,
      nombre: "Bongalow San mateo",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/524049672.jpg?k=9f03be9266aae1d1803e8bdd9add52540611176f10e7e05fe727817adcd009fc&o=&hp=1",
      puntuacion: 4.6,
      estrellas: 4
    },
    {
      id: 28,
      nombre: "Reserva Natural Finca La Cabaña",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507465137.jpg?k=a23b3450afd7231428caa7dbbb7a97349484157878b35f31a7a5ea692db49a18&o=&hp=1",
      puntuacion: 4.0,
      estrellas: 4
    },
    {
      id: 29,
      nombre: "Glamping Galcano",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/567400961.jpg?k=cc015e62f6574d37dccd5be2f14d8f6bc52fabc8afcf60d3d3cd5d172f36cc44&o=&hp=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 30,
      nombre: "Preciosa Cabaña alpina en zona rural",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/502266343.jpg?k=7c2c2bc648e56028fd8e4f6365e90f15c69276a82ae618b096fd4317a3046eb5&o=&hp=1",
      puntuacion: 4.0,
      estrellas: 4
    },
    {
      id: 31,
      nombre: "Villa Bersabeth finca- hotel ",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/637917329.jpg?k=189f590042e6bc29e3ee627512275bda6f2604075a5b617c8471315592b552dd&o=&hp=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 32,
      nombre: "Ecohotel Sky Green Pereira",
      municipio: "Dosquebradas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/617435640.jpg?k=d7815c9425a3f461855939860f39c01ef3d0bf539c83a260bd70eac6cd2cebd6&o=&hp=1",
      puntuacion: 4.6,
      estrellas: 4
    },
    
    // Guática
    {
      id: 33,
      nombre: "Hotel Lago Valdivia",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/107000000/106310000/106300800/106300726/cb992d3e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 34,
      nombre: "WR BOUTIQUE HOTEL",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/109000000/108770000/108767200/108767149/22210bb8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.4,
      estrellas: 4
    },
    {
      id: 35,
      nombre: "Avalon Hotel Campestre en Jardin",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/101000000/100170000/100162200/100162178/af9ac120.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.4,
      estrellas: 4
    },
    {
      id: 36,
      nombre: "EcoHotel Montenegro",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/109000000/108760000/108755000/108754912/cd9b2129.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.4,
      estrellas: 4
    },
    {
      id: 37,
      nombre: "HOTEL EMBRUJO CAMPESTRE",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/111000000/110360000/110350300/110350284/31b177c2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.4,
      estrellas: 4
    },
    {
      id: 38,
      nombre: "Hospedaje Casa Real",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/40000000/39760000/39754400/39754305/b80b05e2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.0,
      estrellas: 4
    },
    {
      id: 39,
      nombre: "Fami Hotel Vive Jardin - Hostel",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/39000000/38380000/38379800/38379704/493493a7.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 3.4,
      estrellas: 3
    },
    {
      id: 40,
      nombre: "Bonsai Casa Hotel",
      municipio: "Guática",
      imagen: "https://images.trvl-media.com/lodging/41000000/40900000/40890900/40890811/9846907a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.4,
      estrellas: 4
    },
    // La Celia
    {
      id: 41,
      nombre: "Casa San Carlos Lodge",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/25000000/24110000/24102200/24102185/f927fce6.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 42,
      nombre: "EL PARAISO HOTEL CAMPESTRE",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/106000000/105380000/105370600/105370569/160fd9ff.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.3,
      estrellas: 4
    },
    {
      id: 43,
      nombre: "Syvanna Hotel Wellness & SPA",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/16000000/15880000/15875900/15875856/7b9b34db.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 44,
      nombre: "Hotel Campestre Villa Juana",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/13000000/12460000/12454500/12454466/e9160b62.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 45,
      nombre: "Casa Luz Hospedaje Campestre",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/49000000/48430000/48422100/48422082/c8948501.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 46,
      nombre: "Sazagua Hotel Boutique",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/13000000/12010000/12004800/12004708/8fd526d5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 47,
      nombre: "Room in Guest Room - Room With",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/75000000/74690000/74688000/74687926/3ef7a977.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 48,
      nombre: "Hotel Spa La Colina",
      municipio: "La Celia",
      imagen: "https://images.trvl-media.com/lodging/17000000/16270000/16263800/16263758/a406fb32.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 5.0,
      estrellas: 5
    },
    // La Virginia
    {
      id: 49,
      nombre: "Finca El Jordan",
      municipio: "La Virginia",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/532667256.jpg?k=d4c08842f7df7253239a144db8d90efc2c0c4e24d6048cf5426969eb98e8bfd3&o=&hp=1",
      puntuacion: 4.7,
      estrellas: 5
    },
    {
      id: 50,
      nombre: "Torre Osadía",
      municipio: "La Virginia",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/627520025.jpg?k=1980ee5ea956bfdaf7ca591a4c1f49f1362ec04891e555b8d588ddb09ec36280&o=&hp=1",
      puntuacion: 4.5,
      estrellas: 5
    },
    {
      id: 51,
      nombre: "Las Camelias Apartahotel",
      municipio: "La Virginia",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/478764402.jpg?k=e15ae687802e1c17ee754cc755b3dccd598cd45f4d7171d3bd3bc8933fd0ad99&o=&hp=1",
      puntuacion: 4.0,
      estrellas: 4
    },
    {
      id: 52,
      nombre: "HOTEL LAS PALMAS",
      municipio: "La Virginia",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/549447287.jpg?k=d573781c4be98fe3c3853c68222e1bbda910c437b1a5afc520d699cd398bc0ed&o=&hp=1",
      puntuacion: 4.7,
      estrellas: 5
    },
    {
      id: 53,
      nombre: "HOTEL PUERTO DULCE",
      municipio: "La Virginia",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/656232217.jpg?k=37e32c3a21d9313580c9772bd06e9d9d6b4479a9b8a93e13fcac9260987670f7&o=&hp=1",
      puntuacion: 4.2,
      estrellas: 4
    },
    {
      id: 54,
      nombre: "Virginia Palace",
      municipio: "La Virginia",
      imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
      puntuacion: 4.7,
      estrellas: 5
    },
    {
      id: 55,
      nombre: "Virginia Palace",
      municipio: "La Virginia",
      imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
      puntuacion: 4.7,
      estrellas: 5
    },
    {
      id: 56,
      nombre: "Virginia Palace",
      municipio: "La Virginia",
      imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
      puntuacion: 4.7,
      estrellas: 5
    },
    // Marsella
    {
      id: 57,
      nombre: "Hotel La Casona Real",
      municipio: "Marsella",
      imagen: "https://lh3.googleusercontent.com/p/AF1QipOcTi794Zfq7i9DntoX9HWoaJW0eYX_bzzFXYXd=s1360-w1360-h1020-rw",
      puntuacion: 3.0,
      estrellas: 3
    },
    {
      id: 58,
      nombre: "Hotel Carmen",
      municipio: "Marsella",
      imagen: "https://lh3.googleusercontent.com/p/AF1QipPDZfd74S7j7Q6KEEbB96Vv1WKyP79XoyeGSiTf=s1360-w1360-h1020-rw",
      puntuacion: 4.0,
      estrellas: 4
    },
    {
      id: 59,
      nombre: "House Don Leo",
      municipio: "Marsella",
      imagen: "https://a0.muscache.com/im/pictures/miso/Hosting-806709772432519050/original/1b78a3c4-d6a7-43ad-854b-c18909cfeb5f.jpeg?im_w=720",
      puntuacion: 3.0,
      estrellas: 3
    },
    {
      id: 60,
      nombre: "Fabio y Mery HOSTAL",
      municipio: "Marsella",
      imagen: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-E3U-cqCEF2GoQC3YP36QDuZ0kZ26dl83L9hnPZ2QcKEgUbI29x_Btir9j-5Z0Fi0_3wwfrU7hIXqGBo-7kJxVcd1kRsZ3pcn2wN0zGlRxst-bGbZXgBMBgGcqPWTEOF9K84YW5w=s1360-w1360-h1020-rw",
      puntuacion: 4.0,
      estrellas: 4
    },
    {
      id: 61,
      nombre: "Finca La Alegría",
      municipio: "Marsella",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518077783.jpg?k=ea22225328a41037b1ed833d0b929d0cebb7610d35644012cff70993cd485a62&o=&hp=1",
      puntuacion: 4.1,
      estrellas: 3
    },
    {
      id: 62,
      nombre: "FERRETERIA POSADA",
      municipio: "Marsella",
      imagen: "https://img.trovit.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMTkzYzJhOC1iNjA1LTcxYjYtOTNmNC1iMjgzY2I3ZDU1ZTYvZDE3NDJkMmYyNzk2MGRlODRjYzBkZDI4MmQ2NTdhY2Q3OGM1YWVkMmUzMWE1MGY1ZTBjOTAwZjIyMTI3N2Q4ZS5qcGVnIiwiYnJhbmQiOiJ0cm92aXQiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjI3MCwiZml0IjoiY292ZXIifX19",
      puntuacion: 4.1,
      estrellas: 3
    },
    {
      id: 63,
      nombre: "Rancho Cattleya",
      municipio: "Marsella",
      imagen: "https://lh3.googleusercontent.com/p/AF1QipMLtPAZC1zltmg8ud0-mJli8oIFy_SjxEWfimR4=s1360-w1360-h1020-rw",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 64,
      nombre: "Finca Los Alamos",
      municipio: "Marsella",
      imagen: "https://lh3.googleusercontent.com/p/AF1QipNgfOD6NCvkGX5vtpHtgjZ8C9lTfn0i8ncg3nnJ=s1360-w1360-h1020-rw",
      puntuacion: 3.0,
      estrellas: 3
    },
    // Mistrató
    {
      id: 65,
      nombre: "ECOLODGE ENTRENUBES",
      municipio: "Mistrató",
      imagen: "https://lh3.googleusercontent.com/p/AF1QipOJi4VGGaIMnLJEylIDox7IlIqYTNey6CA28v9B=w574-h384-n-k-rw-no-v1",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 66,
      nombre: "Hotel Arrayanal",
      municipio: "Mistrató",
      imagen: "https://images.trvl-media.com/lodging/45000000/44360000/44352700/44352638/59b22835.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 67,
      nombre: "Pitojué Luxury Camp | Glamping",
      municipio: "Mistrató",
      imagen: "https://glampify.net/wp-content/uploads/2024/04/IMG_3110.jpg",
      puntuacion: 4.1,
      estrellas: 4
    },
    {
      id: 68,
      nombre: "Puertas de San Pedro",
      municipio: "Mistrató",
      imagen: "https://lh3.googleusercontent.com/p/AF1QipNS-WlInLjpf784Rc1z3EsZcGRKaHIC_VjoO-nN=w574-h384-n-k-rw-no-v1",
      puntuacion: 4.2,
      estrellas: 4
    },
    {
      id: 69,
      nombre: "Mistrato - Río Risaralda",
      municipio: "Mistrató",
      imagen: "https://lh5.googleusercontent.com/p/AF1QipM034Swcx-i6caQag2n64v6Qb3JIggwMz_otTTA=w408-h264-k-no",
      puntuacion: 3.5,
      estrellas: 3
    },
    {
      id: 70,
      nombre: "Posada Campesina",
      municipio: "Mistrató",
      imagen: "https://lh5.googleusercontent.com/p/AF1QipMmL7HZS9--HCRYZw4Kap672DZkiWARbNgUepYZ=w426-h240-k-no",
      puntuacion: 4.5,
      estrellas: 4
    },
    // Pereira
    {
      id: 71,
      nombre: "Sonesta Hotel Pereira",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/57/f3/37/vista-panoramica-habitacion.jpg?w=2000&h=-1&s=1",
      puntuacion: 4.9,
      estrellas: 5
    },
    {
      id: 72,
      nombre: "Hotel San Antonio del Cerro",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/6e/47/86/hotel-san-antonio-del.jpg?w=2000&h=-1&s=1",
      puntuacion: 4.9,
      estrellas: 5
    },
    {
      id: 73,
      nombre: "Hotel Don Alfonso",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/61/d3/e2/don-alfonso-hotel-boutique.jpg?w=1800&h=-1&s=1",
      puntuacion: 4.5,
      estrellas: 4
    },
    {
      id: 74,
      nombre: "Hotel Palo Grande CF Pereira",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e2/6a/2d/caption.jpg?w=1400&h=800&s=1",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 75,
      nombre: "Petra Santa Hotel Boutique",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/14/b5/24/espectacular-arco-iris.jpg?w=1400&h=800&s=1",
      puntuacion: 3.9,
      estrellas: 4
    },
    {
      id: 76,
      nombre: "Agata Lodging House",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/de/89/23/caption.jpg?w=1400&h=800&s=1",
      puntuacion: 4.9,
      estrellas: 5
    },
    {
      id: 77,
      nombre: "Sazagua Hotel Boutique Pereira",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/35/ad/8c/jardin-vista-desde-las.jpg?w=1400&h=800&s=1",
      puntuacion: 4.9,
      estrellas: 5
    },
    {
      id: 78,
      nombre: "Visus Hotel Boutique & Spa",
      municipio: "Pereira",
      imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/58/06/4f/hotel-visus-spa.jpg?w=1100&h=-1&s=1",
      puntuacion: 5.0,
      estrellas: 5
    },
    // Pueblo Rico
    {
      id: 79,
      nombre: "ECOLODGE ENTRENUBES",
      municipio: "Pueblo Rico",
      imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgaGBcYGB8dGhobHx4dGh0dHRgYHSggHSAlIBcYITEhJSkrLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLzAtLS0tLS0tLTAtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEcQAAEDAgQDBQUFBQYFAwUAAAECAxEAIQQSMUEFIlEGE2FxgTKRobHRI0JSwfAUYnKC4QczU5KiwhYkQ7LxFaPiNERjc9L/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAMBEAAgEDAwIFAwMEAwAAAAAAAAECAxEhEjFBBFETIjJhcYGx8BRCwSMzkdFScqH/2gAMAwEAAhEDEQA/AF7aAAAAABoBpUgq58a7MAJjIGlRyqAtPiBYj41TU8PxQVlVh1H95BBSfUkR61Op0047ZXsWhWjL2+TBXQR0t5fSsxuHWyoJcEE+zcQfI6HyoHG8UQ0JWY6Dc+lQcWnZoqmmrjALI1v5fT/zSbivaZDchvnV/pHmdz4D4Uh4lxlx6w5EdAbnzP5UPgeGrcOVCfM6AefSu0pbjIFx2KceVK1FR2Gw8hoKa8E7MrWQtZKE6g7+g/M286sHDOAttQTCl+I5R6b+fypt3h3Huv8A1oSnwjrIUYrs+D7CttFX+I+lVzGcNKCUrTroD8wfzFX1KhSjjvaBhkFCh3iv8MX95+786nFO+BnJclKUwtBlJNtDuPXcUaO1T6EEJAzC3h5x18KjwvFA4opLUAm2WTHhf5711xLhZBPKUqtEiJHjNUUrO00K43V4iZbrr6u8eWT+8s2HkPyFdvLLau7bEri6zt5DbzoXiTSkgAgjeNqaNKSD3qhIABtc2GkEwb9arJ88E4rdckLmFU0EE3W5JzHWBqfLp1r0js9he7w7Y3IzHzVzfnHpXm2J4kHXwtZVlAiYuBqbD3VZ/wDixH+J/wC2r8qScWxoyRcCayaqA7WI/wAQf5F/SpU9qU/jT/qH+2p6GNqRayuBVB4ziFYvFhtF0tmAOqjr9PQ1PxXtUruyG4KjYEHTx0qDsliEMfaKUgqIMSoAibE33i3qetFRaVwXu7EXCY5r6nSsZs655J+QrjhTZk+EfL+lY1/eLnw+FvpU2syKrZFg7HJh5f8ACs+9Qojtf2gGHRCbuKskdPE+FJ2eJjChTkZjBSB5mR8qRYNtWJe798ykm4BGg2Em3Snpxv5nsTquz0oa9juzxdUXnhKZm/3z08p166davxpIjjyEgJSiABAAIgD31o9oU/hPw+tNK8ncCSSsOyqKqvaztJ3Q7tsy6f8ASDv59B+iJxztfAKGgc5tfbx8T4Uv7P4BCV97iQpatcusn96f0fmYwtlgcr4Qd2U7MZoffuDcA6q8T4fPy1u4FKFdoW/wr91QYjtSygSQoeYoNOTGwkPVuBIk1Re0Patbqu5w0mbFY32hP191LuK8aexiihEpb38fOPlVh7NM4XDAGFKd3UUG38P1plFRy9xG3LbYVYfsA8pIUpaUqNyCTI87Gt1cTx1rqr/KfpW6OuQdET1HD8XWkweZPQ3tR7eAYeBUAUnoD+WlKVtZHL5YB1pzw5mDnzgA7T+Vei3bKMFr7ld43wJK0FDqQtsm2xnYiDI8xXm/bXsdkS2vDodXdQWIKyNCk8omBcadK9x4i0haQkqyybGg2+CJBOddpsBb30W4TXm3BFzg7R2PFOE/2f4xWU9wVA6gONgjzClCP1oab8V4UvBqS06gN5hKIPKrrB3I3GvvFew4PABvNCrGNf1pQnEsO26O7ebQ63rlUkKg9ROh8ayToRbelmmNd2WpHkIXUON4i20nMtQSPn4Aak1cuLdnmVpyMgM5ScikJFr6FOih53rzDinY3FqxS2wlbuW4cIypKSJsVHKOmUGZFJLpJR90NCvGWwu4r2odclLQ7tP4j7Z8tk/E1Hwjs24/zEZUm+Y7/X0qzYXsp+zZFPNKUpUxbOkEbHJmHjf8jR/Esb3KMzgUkRaQRPQCdalPVHCVisdLy3cFbZw2CbKouB7Ruo+Cf6etUzH8afxDuYEpA9lIuAD16k2/Ks4hjHcS4NYnlSNvdqqrd2d4KlmFrgubDZP1V4+7xWygrvcN3J+xU+NYVWQpWMqkJunxib1LhmgsJbgQYt5+frR3ahuXXZm99f3RS7BKMI2sD/ppM6Sq9X0D8FwZt3N3Sc2XW0WOmsdD7qkV2WP+F8R+Rpv2XRlaKt1qJ9BYfGffTcu0jcu7ObXZFNX2Y/8Axr20Kq4PZk/hcH+b86uhepH2m4oUIyJPOuw8Bufy9aKc27XBePYRNcDQowhWY9EqzHx09KlHZtXRz3H6U+7MYAMtyfaUPcNh66+7pToO6jwoOUu4fKuCi4d1KTH69ahwaEqcUdQaMb+IobCJhajXX9Q3YmxGEDycies2HQkH40EezpjVXhb6irD2XMOq/gV/3j+tWMu+NdGUlhMWWlvKPOldm1dVe4fSuV8AixXB6HKPyqzdo+0fdfZt8zp0/d8T9Kg7O8ACT37/ADOG8G8HqfHw/Qpqna7Ynl7CL/hlX7/u/pXLnZzKCokhI1JAsOp5a9G77xpP2j4ojulszKlpIgdOp6C1BTn3OtHsUFWEauc5PTS/uFMcP2czpCkkwegFvAwNaCxIgoEfePyr07hCwnDsgQPs0fEAmqOUrYYqUb5R5/8A8LHqfh9K0rs2ofeg/wAtWbjnazIe6Y53Da1wD0tqfCguF9llOL73GKKlG4b3P8XQeArk57tneTsKP/QV/wCJ8R9a3XoqHUIAQMqQNE2EelZS3n3O8nY9Hfw6Vxlk+JNF8OUUyFADf9eNKUoIMtqkbTWPhxRkwLXM2r1nE8/Uh286FKEg+nhUi2lLImQdukVzw5sJSMygrx6UQnEwCVKSEzrp7qm2MLcQpbSwkGQReamew5AzgzNTuYRCua8+NqAxmKUgAGIVoRefdTRyK8ADuFIJjTxrvBNIJIXIi9iNtr6+lCPcRTO59I/rTthLS0phEA3kGFA+JNWlJpZJRSbwcYoIWkKJKVaSQATvzAH41U+1nBziWFNJKcwUFIJnLIkagTcE7VcF8JG6hJOpkmK7Uy22IDefqoif/FT1q1tx9Lvc877M9jmcMiXUpdeNyoplKfBAOg8dT5WFmRgQu2RJCjluBB8KaHBpXJQCk7pOnofyojCMZSSTMC2gHjajeKWEBqUnlnin9pXCwxiSlIyy2gwPL+lVbBt/3V7KgTExtXoP9sCZxSFDQsge5S68/wAK5CG4OhT8CJrzKnqf0PTp+lfB7wxw9httvDLaQQ2lKAooTJygCTImTr60RiOCN93ytIBBscqQCL7AeVR8UQSoqE3ozBJOSc1h1+QrckllGFtvcU4bgoghLSE7nlTf4Un4r2HS++y/CQG5zoCYK4ukSIEdbGRarp34A8SfWhi4Sb6ef0o3TxYCus3EjmBQfabQY6oH0ro4RBsUIj+AUaUA/wBBMecVotQbEEelVTiyTUkeHhVz6VylO/60T9akCbn0rRaJjmgX85yo/pXh48x7XYs/9nDQ753MAR3drfvA716E0yyDPdIzH72RM1Qv7N2D3ru4DY/7hHyq/jCq6e+1en0yTpK/v9zzepbVV2K+eyTLWMdxagFlZlCcnKgwATH3jaRpE+Rpqp9kwe6QSNDkEj4Wohc6VwhMWgRVdCRJ1GwN9DaiCUItoSkW8pFVntDwXDHv8VJ7zu7JtlzRlzQLkxHhV1ew6CKr/aVjLhnoty6+opJxWljxbUkeNY4czf8AEfkK9m4Q+f2bDdUstAWuORNeNvi6bk3Vr5CvaME2y2wykrSFJZbkFYBHKNtal0pXqAfg3BmsO4p1DRzqJJUbkAmSE9B+jTtThmd43ocY3DoTzOJnwX+WtJsb2oYTORKlnbYe83+FbIxvsjLKT7jtbt9/d/SsqludrsSSSMiR0CdPeayqeExNYxbxriTIV76MRxhX3pPqfkaVk1sVpcUZ1IsLHFZtm9DamDHG3UDKNOh0qnpVU7WJUN7eNTlTQym0XA9pXD7UQdorpXGApGXIk2/UdNappxy+oPpUjfER94R4ik8JDeJIsiS2dSpIjYZvmaK4fimmzJzHwI+ihVfaxoO4PwogLFBw4Cp2LNi+0aVWyq99DHtJH3fjVbcxAqIuUqoobxZDfE8ccJ5TlEzGt/EmoF8XdJnMZ3NLFLHnWi5FNoSE1vuJO3uIU6ptS7nKRoBYGdvOqQyeRP8AEof6iKunazmS2fFQ+X0ql4UAognRaxHrP6868jqfLUl9D1+leqnH6nrquOuzMiOldt9oVhOWbdDf40hSqUJPVIPwFclfWvYVOLV7HkOck7XHq+PqOigP5frXf/q7vUe6q9NdJWRpR8NA1ssDfG3BskjxH0NEtcfO7Y9/9KriXDrXQxIB5jHhSumgqoyiuOhJiCdNL7xt766aUIB6yfgipGzJUDqDXJTf0V/tr51/uPoFwWX+z/GKbLhAElCBfa56VbHeMOdE/H615/wPEKbSqLSEgx/UGiHMWdAVf5ya9foop0k7d/ueV1baqvPb7Fud4s4LlYA8h9KGPaVSToFje0e6KqxCwAozB8PjetJcJ3/XpWzSjLdlsc7Wp+61J8Vf0ofE8aW82tstpCVIWTqTZKlDfqkVWe9PketT4B4ys3MNumP5FJ3/AIqlWglTk/ZlaTvNfJTXW5KfNX+2rStX5VWMRJKLRden8u9WhxUjlIEGDJtb51j6KrGF3L83NfVxbtYgNYlJ6esUO++o+UyI9owI06WM7XPhXOJxq4ACVXgBUwZ6BMRqa2vquyMape4UET934VlLRxQ/44/mRf51lD9U+35/gPhe5cVa1sKrhS65Sa3mMlQfdWyufLaoSoVI2/Gw9fppSsZG1VHNdqXP9KiJoHHWY7VO09bUjxH0oYmsWvaaVoId+2ga/Ig+6iG3Uq3pIASYGpoqJVlTtaRf4UjwFDBSo09BFzWtPa9w286HbUtJuLDfUD8xpvXDhVIJsPPy3pb3OsDdpCO7B6KHyNUnDgSqNnPmBV14yghqI6H8vzqnIHM4I++n5f8AmvI6v+6/g9fo/wC0vkvGEJ7tv+BPyrvXSxpIeMFtCOSUgJBMbmbToLddYPSp08VsYGciRZPiIJvuD8RW6n1kNCunsedUoS1v5GBT/wCaxLguZmKVPYsrIyGZzJgyYNtY2HWh31OQecH90TYiYNojrcdNDXPrFwhVQ7jRzEk6CpGLnxOmaR+v1akuJSpSZzZrjRQgAgayb6xG3zixuMIHMoymwgZQDIkFRURoJ9ANpA/U6tkP4VjYTC1jx+v0qB1pZWkJIAAOu9x9PjR7bV1eJ/KhXTzWkQlV68Ry80j3EsIJZHdoUpZkTt8B8aLaxrQzge0NFESD4Aaafq1DoUMpSYUMyotNgkH9HypdiSgJmATAHtEEQOhIkxJjYxczW/pqklTSPO6qK8Vh2M4toSZtE5rzMaaQBFRjFpIOUSdhMHWLUGcYVtgJSvMlOuUZRdRVJIkSUEz/ABCg0Yd1xOaMwzK08dTEWFtTsRoK0KbXJDSh6l5OquW03Pum0XuKl4aQVO80kMO2IIMQB5G6qrjeHcmUm4PW4Ig+W4qycFbyjETc9yslWsmUpOmlz8TUuoqNxd3wPRilNW7lcfHO2OpV8x9KcYx0BK7kDmiIEba3uef09BSp5Mus8pGuv8XhTDE4kKiYICSO7KbcoNxFxmVrfrNrVno4NPUkLi3UlZCgkJSMogmxgiFDfSb291EuMKWVEyjIkEkSpQgiBJ00UfdM1y5xJBRmbSEFI3AEgwCABrY9BYC9RYjGLcSQ2ZzcyhIkEdBsSYHwq15MzWNnh2k5JgTKATMCblU61laaOIjSdZOXNeb8ybG86VlC77o4sZbWbhCj5JP0rtvBunRtZ/lI+Ypw1girm7wAHcLB8dQSK6cagbqtP3ifIlQSAa9CXW27GZURSOGOb5U/xLT8gSaGUUpMFaT/AA5j+VM8c00bF0kdBlRPz+R1pWrBqB5W5GxKk9bWCpNv0KMOsi95I50Wb79H4lf5f/lWJcSdM5/kH/8AVSOvJbstmCbyBlAHiVTI00NbRi1KRlCVlIujKlSr6CVbDUxIAn0ovqQql3NNtFQ5Z9UkfKaxWFMTmQZ6Kn4JBI9ahUvEDmLMiPwEnTwJM+8UE0vFgnIlxM6hIMfHTQXEUv6i/KO8OKHLuELROdK4iyymEyfGTWkOJISEEZbzCoJtsbEk2tBj4Ugc4RifaUhQnckfG9HYHAhAh1xAT+ETmPwqVSvi+q/wNGK7DFL6EJzBQRFirKSZt49eltbUJiOLAKyoOcwSgzAJGqVAxMyIPyiucXi0EZAnl6SQPXL+RpRiXQHU5UpAAzLjSIuLCZvvfwtUHVlJFFElONKnS2RAKSoDpJSfzvpf4LyiHXPJPrUmCUk4gEXORUbCMpOhA3A0FqmU2e9cKgByt+P3iD86w1sS+n8no9N6fqB4vDczpUCRkBSJA5sttfEEb+VAJZW0lspckEFUDUFAlR0vYm3jvW+1GIWh8QSElAttuDb0FKW8csgJE5UxA8bifnWilfQn7GasrVJfIw4ljVtKGVwKEJJIjLOosLaQDFtqNwmIdWkQkwZnceWaTMgb+A6UhU/fmm4uJvv008B0pyxxUBtCWxzAak7kDXSYnXbyqliRNgMU7n5TBFyJ2m+uoBGsxapMUxKspUZVbkTykgQYTbQZf9VDYJ/vZShta4BkJkzOptO9/QeZzE4Z5AKnA43E3UlSbkfvRcxTLcWRZMQhUnIRE+NqERPeX2n50QwdR4J+RocNEuG8QJ9yj9K8l7yuexHZEzqkoaGaCSoxIsdNT0FjuLXobFIbSClfKLGUpus367Sd5gR6MHOEqeSOVSwkk8oJgWJED8QB/rNd/wDpakkgMuCMpK1pKRpspZtFxY2nzrXRklBHn9Qm6jFCcZYkZW0DSST7KcwJ1J1idyqokcSUTCFZkk3JTEZlAAE+g+AvYU3awQsIaRlgx3rUk3IElegmLgzrvNbYwjTSQA60gC8ZirmvJlAVJuQJJ0FU8WJJU5dgFhh5ShnCQlItNlAX2v0v18dKa8HQA2/CiYZVc7/aIP8Aujyib0JiO6Ks3fIm/wB1w69Psx5zXTfEWm0OgKUtS28gCW8o9pKsxlX7ugTqanOalHcrTpSUk2hPP27MmwTPvWv6VPmELCW1Zi2RnOpFjpJA2PWKXlz/AJhr+AedlrNPGlIJCy2s9AXkxHSEtXGh9BXRlGCyVqQlN+UU8O4dmTKipJgQkX1NtTuCTtFtZobF4NSSCl1JKs9k2UIMAW1J8N5F9TaiEE/3TYJN1FapgXElBTYHaom8Bh0xKGQJJEqdVc/xOxtuKZdQr7k/08+QBjhnKC4+UrIlSUpsD0taRvG81qnKUYX7/dBW4LTc+EzO0b1lJ4y7v/CO8B90JFcXc+8pSv5jHpvRGF48tOnu1Hzn9aUqCa6QkzKbHwNehKlBqzRk1MtTXaVUQpCVdbH4kwKlGPaVct5epSqPDUyPSqicx6/GpEEpIBUQdgBPztWZ9NBenA+otKOItj2FOR1kfOL0UjiKVAwF/wAYAB9xB+QpHg7pmJMwAb36kg3Gtpolpy5mTBskTbzV0m/p41nlDNh0jeMcM3cUvLcpJVPrlUEJnS6aUP8AaBwADIEgzAm1tdNfSjsQXFCT7Ikm4uRsCR4Hw/MPFJw884nYQo2H6G/TxvaCX7sga7GlcSKYJkdcs23jWDtqKKw3HUrs4ASd1C/ooAfl60Czgm+8MLOTLY9FdD1sCep+NMneDsABIVLiQlRKlQFzeIOnS0HS9dUq0o2TFyHoQ0q4udgdPHx32mqjiMwWpKlR94EaSBpfSJJ9FCasvEMOG5ICUm05LIgkiMszsfAzUL/Zdx1KXXVDDNi2dxPORFsqEnMrYXIBFwYtQpSVr3GSvsV3giicWjNmSObKkiBcKkCf4hHhNNMY6O9N7FHXWFA7U7ZxTOH/APpkFTgH/wBQ8AXI05EgAI89TvNVXiiVd+FkklfeSTurWbWqFWcZzx2N9GEoQz3JOJ8M/aIAeaQEiwc7yZJuRkbVYwBc7Vxh+zCEwTiJUPwMrP8A3rR+hUuN4gWchSEmUEgm9xtbzpYrtG+SqSkACRCfdr501N1nHy2sCoqKk9V7jnDdmWPvrfWZH/TQifCVLX+jRLPZvDA5g27czBeSAPRDQ+dV9vjjypPeKECeWBsN/efWuGeJqVKluuKMJgFRygAibT0m4ijo6h7yRPXQW0WWxnhjTd0MIT4lx2/gYcAI8DajnMY7ZI7sJINghKgdo+0zE+VUtlLnI93vIXGxZZJAzgiE7HlJ02G9WzGKSgISCBK08x3gxJgC95PrUp0p3zK5yr0+IIFM51TrvaOuw0rO65kn8SCf/ccT/tqXibQaeWkncQZ2gH/dXaX0lvDxez1/57fn8ahK9zZDZAfE8ShGTPmObOQBvBAjUfqaXL4izlP2agYETE3kDr0nWtdpLhoAEmHI8OZOtANsZRC1GIlWVJNpIJOwjWT1rXSoQlBSZkrdROE2kHOcTCSB3V+XVfVIVGmvNpNEDEJUQkwCoqjXQKI06wOvXpdFiORZAMcqReLAoQbx4R+hUjacrmY5sveASk+N7HX+tW/T0+xJ9RUfI7cUktpVlAOVokiSLpSVe0T1NaTh0raeWUoBSlJTl2JWBJ8wTY0Twbi2OYZbGCLqyG0lSUoK02nYDbl0vR2I7bPIUS402sqICiUFJBjTlI6E/wDiouFlhFtV5JuXYq/DMKp14FKkju2xOYm8lVhAN705RhFrLaQ246E5pyhR2G4udrTpRjPFkYgryN5F8sHMopABAslSjv40bw3E4B+FB9eYaBxWUj3Jj40FUy9S2GlS1Ws+4nRgy2s942tPMlICkkA8oOYZh5jwvQzDye7bKZ+5ntI9rePA6WHuq8ngLKpyrV4lKwR7oNDr7MIAOVxJ6hbKFEj+a9PGtB8/n/pN9LLg8/X2hZBIUiVbnT4BVZV4HY9I+7h/cR8BYVlP4lPuJ+nmUk1Lh28xvp7qgzUwwajlhCQSdTyz5STI8hWucrIxox5JsImdPLoCLGik8MQ2nM6kknbNlCU2va8mRAIiimg1hoU8QVm4AEq9ZHL8/lSvEY7vDCQRrf7x3vG4toB9cmuc8R27/wCiqS5GbzqUhPcnliVK1y2MAkE2MRIESNTsuYcEPLUuVZQJBsJnzn9epGDbWUZUjmuIJ6zqCYGhtuZtSnC8FeeU41lKUg3WbJBnSYuN4A6daMUknkIRwzFKeStObuwMqSTcAE7gb6naabcN4eyUxm7wJBgLIUAOoCR0MW6xvXOO4Mw22GWjlSogrvKlEQIgqgTlPvsNaccE7LyjvlHu0EWccjLe5UhMTM3tIO5FTlP/AInJC1LKWkmAjuyQQDZKSRCjFjOhyqPXoKzC9nH3AXC8cO0RdxwRIEiyScywQVb5b6m8s8XxrDsH/lm+9WNXXL3G6Eeyk+QnS9qScS4itZLj7pI6q09BUtVnd5f5+YLR6dvL2HKOLs4cxhkFxf8AjuATPggWHnr40nxmJcc7x5xRX3aSpUkTYFUDYEwYG9I18XzrS23yBRAzmM2oFhon2hc1pONH2qBfvLAq1BHL1i4TXaJPfCHdSFPEEPOKNBtLiAoHPhSUkp35wcp3BGW/hSjiDYC2iJuVakxcVpGLUVSQFyytNzYCUKkZrJgSbda74jcMEaa/6ZpFDTb84GoSctTlvj7h7jaVpbbWmc6kJPiCq4ChpoPd4UH2v4Vh2W0raTkklMZlGZAVYquIyn31NjkpLSAon20QRH4wCRNpyqVHnQ/HMUJKgpRUo73SIMyLcqr6zMAaaU1BSumm+cE+p/uv6fZFVwjkBfl5WtNutEqaKFFM6AzG0jx+lO8HhMOpCXEzmStpJnLOUrQCSmQY1A16eIUYtClPKyyqJBULgk9SLD2gI6xvW5STZAKZxiEtwls5jcKUZ9kySkAWk0ThMI8ttSlkJSIhJkLKnHCAQj+M7208ahYwSUJV3gPeJE5VSItqND7/ABpljcakthRylzOknKdIKVQCb+yNpA18aEm+ALdDjGFKlk2kpbVPXMhJ/M0M+zyNKvIS6LGLBc/7q6xWLzupXEd4ywqJmJbQdfWusWJDaZ3X8015krqR6sMxQvZwGclROaNJMx5dLjTwrG+7QcomNCApV4nUmTbMd+nSoON41bCWu7gEhWa0gx8aVt8a5JUkFRMCLA3EzMnetVONS11sZqjp6rPccHDMq7wqUtQVFpsIAEzMk8ouelcI4eErBSUlJUpXNNuaU2KCLCAb9a5KUa7yBsblKVdds0HpFTYF9BKkaqEWEiBJBnbX8qdzqR3QminLZknClv4dKQ08oHMk8q9LpkHYxB0npTXifal7uk/tLTWITmiHEAK9mZzFNjedtaUvyNoFot8fGhS8oeW8Wn3j86ldS4K6WrD3AoZCm1NtdyXQCG85MIkEKSlUkAzEk32EGqH36EqGRJMqINykzbcX33p8jiCgvvLZvxWKttSb7fKhwwyuPsyCCTIkGSZPUU1NaW2+TpvUkkYvGuJKFB0jMRlCpUZ28h5+NHYTj2LQYGJKt8q4UDImwUmfcaBxHD2yUqlYyxAsdD5CjMfh0PNgKVlKUwnlt4BRkmPTpT3hZC3lqHuF7XYgoSSlqY/A7/sJT7jWVUmWMQ2AhJZKRoSJPxE1lDw4ewfEl2Y27wuQ00QlBVBva9r2KvWfyox95rC5Q2O9c/GrQE/hG1V3CYm4I0SZ8/pTzhnDlulS18gVBCrZiDY5Z00iY330q9WK5ePuYEDfsq3CpeQKdVBS2fHdQ6QLX89IpthuE5EKUrKHQCSE3CY0iPZm0/CKZF5tpMXCdh94m8yo73A6+unbfCcRiWyGUFCT/wBRSsraRaRmIvpcCTrUPFcsRKKNhecIwooWSpeVKSnMTEayfvE2FjbWmHD2X8Z/coIaRMvrVkaSRYgR7Z1skGN4qbusDgmwhxX7U4AOWIakCPZF1j+Ix4Uo4v2nxGJhIORsWCE2AHQAWA8qV2WZO5WFJyHBxuEwmn/NYlP31pASD1SgSP8AMVHypFxTiz+JUVOKMdJsKDGHCQCpQG8kwI3kmg2+LJUHUKGUaBYIsgjmmTqQdgdh41O8p+ks/DpfISHUgLy8ykEJKZg3BVN9RbYG5FJw6ha/t5VcHNKpCYAISByjrOWRW0uhx10gmCEwuPtLJKBECxVluPHwFbw6koUS4QSI5lyBEE6Zb5tIJFWp09Lf4zPOtKe4WjhbH7M08FLQ79lmCgFIPOlKiCmCkDWIVMHrU/8Aw5ig4tLQQ+chV9ic8NqUUxlUAsGx2kWv1UtODItOqkNLy+AC81/VPxNMHeLrafcJhWUlKfKQoc2s3G31ql3ewMNA2EbWFNt8tyRtPsmypMAcgsff0IdUO7w9jokE7ewRR2B7Q5/2dtXOGnCcjic6YWhwQCOYjnFrXv0oPGK+zb2hyLbQopqFTdfncvRVmzXH3srTUX5yPgSPyoXiXAcW3LjqBlCVE/aIJSIkzCrmZtTVIUph4pglLTirkCEgc0TrabC+tGcbcd7p1L7JbWULAzgibaiba6RQpTcYpJcsetBSndvgA4hwF1DWfIpOQKkAhUgXk3kjfzmhA3iW215mnEpiTaBbmk77eQpy7xBQwrjORKQW3E5Qoz7Ji19vGmOMx6cQw+JTm7pfrym4m+w+td4klhrkl4MeGVXiOPzoW2oDk7wgKBEEgjlMAzO2+9TLwTAbU4yoEkAELOaTKYvAjQyCLg1ZOOJnDunWWlXsCOQkbzv8qF4hwRPdrKMIdMxWnMBa8wmB7/yro1trCug1yCvA5m8wAIZZkDQHu0WAG1q4ddPegQSA2D71Ln5Cp+MMnvcvMnKhsC4JgISIJvJ0vJoHLlWVAySkC99D/wDIVB5bZshhIW9pXFBLeYWOYa6pMRfxy0nDJUlK0gkBe8akpAF9RNXZhxpKW1Lzg3HLl9k6cyp32jQ+lL+MYjDgDIlZOdv23JJhaSfYSnUAiPdFa6VZKKiZatKTk5C1/hi3XCnvEJUR7NxcjQWiNvCNKjweFX3zihH2aoUOtiLTY7n0FjVjwi3VkqYwSCDBH2BcgjQhTub9X61LwXCY4u4oNJLZLie8AUlsAlAOgjrNutP4zawhfBtu0CcOw+IDaFrw6w2EJCs4WEEhQCQRIVobRFa4UnDLQrvF904XHcueVthOaAkrHMkC9yFGBtTrFcAfabU4662QlJ5QpRV4RIi1j5CqKHc0piyFu3H7xNSu5N4tsXjGMUrO+48awyVLyrRlsYU2cyFERcGTaJ8aT4bEBQByqE9Lgetq74BgnEOrJCkICSrKqUyREHKdes037OcfOFYbD+DUWTBD2VQCgTJ5tDeQNdK5rLtnb+Qali+N/wCDjCMuOAZQVdYBnUbRUT6SNiCDB2g/WvRsPxvB4hKUJdUxblEBNzfeQT6dapfZ3hKnXccUuoypdglasua64MgQZjfrQSuNqECh4n3n61uieM8CxvfLyYfEKTIyqaSrIRAgiAfnrNap1G63QrfsNcHwFtChnMgRCIET+8o6j0E9ItVk4Zw17ET3TZCRYvKIShP83usNhpTBWAwWDGbEL/aHB9ywaB8hdfrY9KQcd7aPv8iORsWCQIEeCRYUJXeaj+hCFNvZDfGM4HBplZGKf2CkyyD4IN1eaj41X+L9r8RiTlnIAICRsPCLAUpQyVGVGfOjcDhEq5goZZyyDqbzG20XqfiOXlijSqcYK8gBGHvKjckanUnS5qxYLgnKFEzY2SCY2ElJnx9N5qt9qcKUIbcMAB4AiPZBn2jJP3esVaG0ONpbSmQlJykDVRgyYiSDJMbAEXiioJLVLJKdfiOCtcLUpeHbzhKiFOJIWBnUZuJIPhcgx4RQ3B8Mlxx5tALiu7agnKmEpADntiQkEJEJvlEUz7J4YOJxDZVZLrkREKJICRCjGxNwbA0DxHBJGMSpZcyBorztnMuEqIUSqQZCSdIgQBpVlhtGZrkGwA+1fS3ISprNNzISqSSQIuQTMQNBtSteOLZMQtChBm8WhJ2gp29BpRGIxqG3s7C1pSUEEnUJVqPQHxvHnQjzi20JJSoymBnmQnY+EEgx408U759gIIbQO8VEyUPggi5lpZTME3nXxipuNE96SSopKW1AgC0tgmASATOoqLhr4LiCrNKkwAkWzEJQmY/iIrfFG5DZIOVWHa0tcAj5j/xXP1K5Relk3D8VkKVIJ9pKgcsHYA6nY3G1tZo3HGWirq6VdNV5t/4qA4Rw9x4oQCQj7MKOqUZloTnI/mHSbCnHbXBtNFTTK1FtJSJnUjKDM9INx+V51Urr5KUbq79iHCIzIWnOhIUhaZVMAkH8IJ8rVBg+KYxALaXnMi7ZM2ZMdAFSE+kVDw1xKgErUQDBJTr8bbVbsFg+FBIUt3EKUPuqsP8ASmD76SMJZsWlOOLi9DmHSgJLbqzlg5nQBJ1gBE+V/wA623xFKRCMO2VRBUQpajaPvKIHoBT1HE+HI/u8GpfivQ+hUfiK2rtgUWZwzLfTeP8AKEih4UuWDxI8IW4J7HrbCUodyxFmwkRpeBJtUyOy2OcgLgJ/fcmPIV0e0uOd9lR8m2/6En31w3gMa/Mrd1ghTkR4ZSZHqKPgLlg8V8JCzjbBZfDSiCUpSCRp7I0mhX12T/P8MhqbjeGU26EK9pKUgwZ260Fj4ytH7xW8kHyDJ/3GoOK1WLReLlg4XjcK2iXmO+XPKdgOkExrfSh+0PaNJQ2lvDNNfbsqkQScqgoTCR0o3sng21tKUprvMqgJkyDE+xN/n0FSdocI2lOG7tKIOMYGXKM0yTBMZh45pNaKTSSIVd2cO9o8e6JBIHVDcgDzVPvpNwvC4p1zEkKcP2gz88ScoiUg3t0Bq9pVBgEoVs2ocvoJ/wC0+lJOAuQ/jSVFB7/2kmUjkT1GX1UIplNu4jxYW4vgimWlPFTastlIkn2iE80gdbi29R9luB4bE4UZ1uNLUp2IV9lGYgWIJEaTofOrTxNlC21JcSFpI9tNlazYHaQLgmelVzsS48ME0Alt5HMS3OVxPOozeUq6icsTrQy038DatvqMMeyBhFBbbalNt5Uu92W3AOXlWmNcusnNvHQLguGV+wsKZQX1BsZ0pfykTJhSDt/CRNSccx7XcuICnULCSpTKwYgeYIAv91UG/omwS4wzahh31ZWkZlkwkCNuQyLnfSpuMrY7jprA1w6cI43zIcwi4PtXQo/wrgn0Iqq4RCC4/eftTlPUdYP9KfYLgb7wS6juu6zJJSlU2ESNPOxM0m4O4gKf7xpKh3qr5i2pJ/dX7A8lA1WmndpsE2rJo6/Yo0y/rzFZXbqASSk4gJ2BYCv9QcAPmAKyqaRNR2rO4ZUST1NEBoJ2KjayQSb6EgaDxNRv41AS4E5ypIgZUzBMiSCQQAR0+VJMNjFBnMVCQpdzdaicvLoYEEmVWkCINZo0JSzLBWddRxEtDTPeJWCUotAkz4k2Tb7trEXnXlB7G4oDDSIKwVDKQbCc0gz8IvAGwhfw3i5XZRIWeZOc8oE3IASAYEmSLmepFOex+By960dW3ZB+8CoFAISdCMqttvCqT/pwwZXJyyybthhgrCOKtOZvSwSMyRdMed56U9wywltK0nWFaCZy6EyNj6T4gUD2hQg4Z5IhIUhROsiCLkCL8p62Gu9ccNxoVh2SoqAShtJUDYgAAySdNZ0if3rZJOc6a+QJXIeAOZcVjUZRdTRyn94Cbe7xoXj2NJxTZbcDR7t5JWB0GeLHeNfHrBreDfIxuIKgCVMAxNpTLY9n3RQvFsSkOYYpAlDqk3VHtgpHMNBYSZneRTqP9S/t/AriV1ttXepKiZUpRz3BmAZtqQUza6ib61JxdvuQgi4gw2VQUjlMKCIjNmmxve9pLjtOwUstOqUCoufd9lI+0VYa7psDAgRUJxfe906oJzLU6DIjMCgG5g2kkC29q1xm3Z8ZOQnU4Q8ySgIGdtWUADKJBAgeEG9zqdaYqwTjn7O2hIK1IS2mYurPlSDNrld5tHrQnG8O4pxYIUFykJTlyqJtAyC83sPKNqvOHZZYwZLif+bLi0gGymS27nEfzIQo9RA01aeLNlIK90SdyvAtuYJGV117uwtaQL8uVTYEbKmP4psar3avAtoUhgKK3AD3xnkzGDlTa+XQnc9Ip8hw4Vv9oXfEvAloHVCTYukdTcJHz2RYLBKcdSnOAVkAqVtJ6nxPqSBvU4xbeplW0lpQtwnDwCL+n9KcYJlnOO9zhOkoIKh4wRBHhVi432YQ0JRYbKOoOkOHSCdF2gmFWgituAglKgQQYI0g+NUWRLjlHCFtlKghL6FCUiVDOImUwQc0apuRexAmm3BsTh4s2mE6goHeN+YiXEj8QuLSNTVe4bxZTUpIC2ieZtRMT+JJ+6odR4eEWzA8TRHeyFoMAukc7fQOgbD8Y9fxES2OQWWyAFMqTlN8hPKqbykichPgCDe29YhxCzIltwa7LHnqFJ16p6G1RPMkErZIvdST/dr6kR7J8RY7g7cN5HrEKQtPkHETuNoPW6TG9S+AlM7VKJxS5gqhMxYGwvF48pNJcQ5/dg7FxXhcNj/ZTftW2UYo5jJITeIkQBpsbUldHOn+f4BH1NS/caE8F77BNlTTikkA5hYiUkRuNR5gj1rntZBVhMwKFftbPNqCIX7LkXE3vHlFD9h2kraWSeYqlMWUPqNJBta4ontYpc4TvgFI/a27gajK5ZSNz4i2thvWnbBCo8sbYhKwmFpC2+oHN/Mib9eW5P3aQdn0q73GFsykPJ5VTfkH3rkEdCD6RT9QKYLagtJulBVI/lc198jYZar3A1JViMYSSl0u2AICgAhM9QoCd5GnhRWzBygzGvIbbcVKm1ZFnLsYSSY1SoxqRzR0obs0jLg8OFon7NJCk3KQb/dhSdfuz5iiO0hWjCP5wFgsucybRKSBmQdLkXBN9hUvZ1sjCYfulgktNylRzAHIJuOZJBtFwOgoftO5Bu1JBwL+VYWkINzBI/nHugifGkGBexuFShIUot5U2jOACLACQQY2SbCnHbh5Awb0oKFlIE/i5gPbTZQ1hJv4CLWBhKkoS2UhYygGPaA8Uqsrzm/SjHCC3krOGfZcl1OfDKHtOsHO0Tt3jdlJ/mSPM0nwWLw5Vik4hIczPLVnAhRIgGFAyASCQIi9yKuHEOz+FxF0EoWNcuoH7yVXHlbrVK4LworYLpZUtKluHOhXOkBRHsGygY3je9NHkDAnUYKTl/aQNh9nWU8b4i4gZUuYfKNMzBSfUJbIHoT5msp7sGAXiuCW06Wg6HHnwFLBHdwBlKSVTBGYKMJmwEEkUD2dwwdL7GVtcLzAqFt0gjoLA6aWpvhVrUnu+9ztQChFiATuVGVDzT0PQigOD4JKcbiGlFITkzKINgJSbKOg54knTXpSzmrOxOxY+F8CbRlcUQooHK3EhESIT+Kx3kcx8wowqiMTiUtEArDa0iJBglfXbvB1p9xAtaZiVACwTAFjEglJAjTXeKQspbYx4JORJZIJUrPNhlNxvlTyxraLVljqldy7BQ4fXmwrpdHOpvISYkEhSQmYknmFgLbkAGkvZbHt/szYWhCsoPtazMGNhAg+MUTjeK53ChMthYBJzAlERcm8cq0kxKvA1XuHYhYbCDlBLgmbcu9zoDAJJvbppWNO8GjhvkJxrZXYqZUbXsCViImdYHpUfaOEpCk8wD7a1RHJBKUozakXPhPrUGOBDzC55VZkjLJsEJmAZNySJ6AWFR8VUssqIIieYAyAtKgrTVOkX1E7UfD8yaATdoMSl8d6UnldTv8AZwVBJ5drAXGs7VPxjDJSG1AJs4hITbJBSoC0+N+tL8SCWniISnlIRqSgKSU3kZTa9juKt6+FqOHbxRMBtxpbSFCO8CFpUpRtoUpMfit6mMbJJbDRVjrCYNzAPNYvEkvKWy4EBd1NLlBR7SiRKe8jpNawLYdK8biv7pJnL/iubIHUWEnp6xtQXxHEqKlZWkypazohHW9pMH47A0q7QcWD6whoZWGxlQD03J/eP08Z6K1u72K+hW5BMfjlPuKeXqo+4bAdABaPCrp2X4chtDjT6IccQCUqE5mjsnyPtDUGNLUj7OcKcWDiAkKDRBCVf9QiCUjoQLjaY8at2LCMU2lbayk+227ulXkdtlJPiI3qzJNg7eILagw7zIVIaUblQ/As7qj7x9obyDSXj3Boi4SmwQr8PRDh/DslX3dDIgh3hn04hC2XUALTAdT46hSTqQdUq1HhFQsYooV+zvHMFA924QIcG6VbZwNfxC43AnezGKC82UqKVAhQsQdRUuCxa2lBSFQfgR0I3FWTjXBxABPJo26f+n0Qs6ls7KPs+VVh/DKbUULEEa/UdQetUjaR2xcOC8RChLaZgSrDg3H7zU6j9w6bRu67tDqUrB5hJSpFlIO9zobXBHmK81bcKSCkkEGQoG4PgatHBuNZz7QbdMDMfYd8FAaKt7Q+XLSypvg66EnbsKGKTnIKsiJIEA3MGPKKr6nOdI//AGfJurD22We+7wpUMqQlQOoVexPidDodtDFOXiecE2AB95if+0VFQbZTUkiy8K4wvD8pbS4lRzRdK0mNUrF0+4jwppxHtK24cJmVdOKbUcwhQSErF8oykAkXEeW9VXC4yYvmjqOtEKKTY6+NMrx3QHaR6WpkH7RpYClXkXQrzSD8QQfE1XOzjqFKxaXQMysW6BPs5gEiy4EEbaHpSPAcUeY/u123Sbg+Y+lMey3Hm2w+h9IBeeccJF0kLjlINxp41y2YGsjftY0tvBYjmzgoI5vbHUhX3gPG/iTaiOHttlCChSkuBCAT7KxAAGZJ1T0kEdKXdp0zgcQtpwKbKIicwFxZCpJAH4TPpTXDFt0JCrLSlNvZWgeEXg9RIPjXftByKO3C3P2QoWArM42M4tPONUbabE+lWVtsIbzMrkH7vtIJ6C8o6WMDcVXu2Da0tMhagsKxLICohYuTBAsrQ3EeW9Pyhtwl1C8qvxJsZ/fSbHyUJA6V37UdyD8TxAS2suoyrSlRCtRMaJWLjYQYJ8aVdjEON4JmIUCkqI0VzEqsd9RYx51D2s40P2Z9slKlFBAUg2kwDKZlNiRYnegmOPoabbQwlXIhCTmPKSAAeU6ehGt65J6Q8lndSwokuMkrOsslR/zBJB99ZVTX2sxE6o/yispdEh7oH7MpAUlYHNChm3iE2nWt4AZuJGbyyJm82bn5msrK6frf/UzE7SQp1YNx3SrG41/qaUTOIRN/snNfJz6CsrKWHPx/sMNzkqIbbgxIRMb8ma/qAfMVBwtAJUSASNJ25wPkSKysrQBcm+NGzXhEf5R9TW2v7pfj30+MJt7qysoS4O5JEn/lnT+4kenLXof9oLhysiTEJtNtOlarKSXpZaG6BE8vCVlNszl4tPOkXjW1qqWH099ZWVWn6V8Alu/k9K7Nj/lmB+4o+uc386g4PZ7FpFgHgQNgSlJMDaZNZWVz5EIONWxWFIsSHUkjdISCAeom8daztOkfsrp3Ccw8CIII6EHQ1lZU+UMN0CUJBvIEzvKbz1qkcYSDhcMSJIcdSDuEhRgT0HSsrKMNzmI1ajzrFG3oKysrUibLw6gLwuDKwFFS8iiq5KCFSkzqkwLaWFeTOJEnzNZWVLlhR1hNfdR+Dub9aysqi2AdNG5866xOh8jWVlZH6jQtiBl1QZeSFEJU0rMAbGIiRvXpHGkj9mzRzJAKVbpMag7elZWVz/kQX9uFHucJf/7pj5Kqr8RfUVKJUonqSa3WU0NkHkW4wfZL/k/7k0Y2LVlZVGBECaysrKAT/9k=",
      puntuacion: 4.5,
      estrellas: 4
    },
    // Quinchía
    {
      id: 80,
      nombre: "Hotel Campestre los Alpes",
      municipio: "Quinchía",
      imagen: "https://images.trvl-media.com/lodging/107000000/106330000/106327700/106327629/9189036e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.6,
      estrellas: 4
    },
    {
      id: 81,
      nombre: "Bosques de la pradera",
      municipio: "Quinchía",
      imagen: "https://images.trvl-media.com/lodging/107000000/106550000/106543800/106543779/2db50b3f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 5.0,
      estrellas: 5
    },
    {
      id: 82,
      nombre: "Eco Lodge La Juanita",
      municipio: "Quinchía",
      imagen: "https://images.trvl-media.com/lodging/4000000/3710000/3700500/3700482/56a6c1f3.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.7,
      estrellas: 4
    },
    // Santa Rosa de Cabal
    {
      id: 83,
      nombre: "Eco Hotel Glamping El SIlencio",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/95000000/94940000/94939900/94939892/ffae6624.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 84,
      nombre: "HOTEL HACIENDA SANTA CLARA",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/91000000/90050000/90049700/90049603/44bf5eee.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.9,
      estrellas: 5
    },
    {
      id: 85,
      nombre: "Cabañas La Herradura",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/22000000/21330000/21329900/21329856/22e53490.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 86,
      nombre: "FINCA LA FORTALEZA",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/103000000/102350000/102342000/102341979/50826faa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 87,
      nombre: "Hotel La Finca del Café",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/13000000/12030000/12027800/12027722/799aa3aa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.9,
      estrellas: 5
    },
    {
      id: 88,
      nombre: "VILLA NATALIA",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/90000000/89230000/89225400/89225305/9fdac6b8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.7,
      estrellas: 5
    },
    {
      id: 89,
      nombre: "Lagos de Venecia",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/36000000/35590000/35589900/35589805/b2bd17f0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.8,
      estrellas: 5
    },
    {
      id: 90,
      nombre: "Cabañas arabi",
      municipio: "Santa Rosa de Cabal",
      imagen: "https://images.trvl-media.com/lodging/107000000/106770000/106765900/106765898/ccfa767b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      puntuacion: 4.8,
      estrellas: 5
    },
    // Santuario
    {
      id: 91,
      nombre: "Casa de Campo Atenas",
      municipio: "Santuario",
      imagen: "https://fincasvip.co/wp-content/uploads/2021/04/GOPR5523-scaled.jpg",
      puntuacion: 4.4,
      estrellas: 4
    },
    {
      id: 92,
      nombre: "Finca buenos aires",
      municipio: "Santuario",
      imagen: "https://www.turismoquindio.com/wp-content/uploads/2022/04/finca-buenos-aires-quindio-48-1.jpeg",
      puntuacion: 4.5,
      estrellas: 4
    },
  ]

  const municipios = ['todos', ...new Set(hoteles.map(hotel => hotel.municipio))]

  const filteredHoteles = selectedMunicipio === 'todos' 
    ? [...hoteles]
    : hoteles.filter(hotel => hotel.municipio === selectedMunicipio)



  return (
    <section className='min-h-screen py-20 dark:text-white'>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center border-b-2 border-green-500 pb-2 hover:text-green-600 transition-colors duration-300">¡MÁS QUE UN HOTEL ES TU LUGAR PERFECTO PARA REÍR, DISFRUTAR Y SOÑAR!</h1>
        
        <div className="mb-8 flex justify-center">
          <select 
            value={selectedMunicipio}
            onChange={(e) => setSelectedMunicipio(e.target.value)}
            className="p-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
          >
            {municipios.map(municipio => (
              <option key={municipio} value={municipio}>
                {municipio === 'todos' ? 'Todos los municipios' : municipio}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredHoteles.map((hotel) => (
            <div 
              key={hotel.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img 
                src={hotel.imagen} 
                alt={hotel.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotel.nombre}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{hotel.municipio}</p>
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                  {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-sm ${
                  index < Math.floor(hotel.puntuacion)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
                  </div>
                  <span className="text-sm text-green-500 dark:text-gray-500">
                    ({hotel.puntuacion})
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hotels
