import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TitleH1 from '../Global/ContainerTitle';

const municipalities = [
  "todos",
  "Pereira",
  "Dosquebradas",
  "Santa Rosa de Cabal",
  "La Virginia",
  "Marsella",
  "Belén de Umbría",
  "Apía",
  "Santuario",
  "Pueblo Rico",
  "Mistrató",
  "Guática",
  "Quinchía",
  "Balboa",
  "La Celia"
];

const restaurantsByMunicipality = {
  "Pereira": [
    { name: "El Olivo Campestre", rating: 4.8, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/68/e3/9e/restaurante-con-su-nuevo.jpg?w=1200&h=800&s=1",},
    { name: "Hacienda La Colina", rating: 5.0, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a7/24/49/caption.jpg?w=1200&h=800&s=1" },
    { name: "Octavo Restaurante Giratorio", rating: 4.4, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/81/4e/05/restaurante-octavo-cocina.jpg?w=1000&h=-1&s=1" },
    { name: "Restaurante El Mesón Español", rating: 4.0, image: "https://lh3.googleusercontent.com/p/AF1QipMvcNacQhHu25XJQyZN0VjiUL_T8_vXeGtLaanB=s1360-w1360-h1020" },
    { name: "El Secreto Español", rating: 4.0, image: "https://lh3.googleusercontent.com/p/AF1QipOuK0z0wkeSLs2zvVcoOrYHc0YBSM3RtpJbkSqG=s1360-w1360-h1020" },
    { name: "Restaurante Latino Cocina Popular", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPjPxsfBl9l5OlVnQGAkpti5LRFfcdnMVPWdsPR=s1360-w1360-h1020" },
    { name: "Leños & Parrilla1", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNXuLiCyaDSK0z7-cSI2U7FhOxWP9GLpW8L--8t=s1360-w1360-h1020" },
    { name: "Restaurante Gastro Bar Discotecas ocultas en Pereira | La Cantina Legre", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPq9Nz1DX6MVpOP3tmezG67m-W4N2nf9ZmiHkik=s1360-w1360-h1020" },
  ],
  "Dosquebradas": [
    { name: "El Zurriago Campestre", rating: 4.2, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/18/eb/18/iexpertos-en-sabor.jpg?w=900&h=500&s=1" },
    { name: "Jardín & Parrilla", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOrdtK8EoGHTrYva2EzWQJ_PBwfy6WyhRgk-9t5=s1360-w1360-h1020" },
    { name: "El Columpio Parrilla", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOAbVbeqHhFzOYUxSZ4TahFexcyXpme27XSI91n=s1360-w1360-h1020" },
    { name: "Restaurante El refugio", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOOv4IWS4kBMPJ3TiRtmvuMThmV2hAhZrWF1D4_=s1360-w1360-h1020" },
    { name: "La Estancia", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPb7cp8bEqShi-Uk7LB5U7dPWdCbMvcslufzTa4=s1360-w1360-h1020" },
    { name: "Restaurante Mi Pequeño Refugio", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipM7g_8D2cNcbLaiKQ7pseRhWcrIHFZxKynwd6VK=s1360-w1360-h1020" },
    { name: "Chuzos & Carnes,al carbon", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNABaVkwLiZUwVKJCst5CbPPnSBJJeIdYUDDLTC=s1360-w1360-h1020" },
    { name: "Donde claritza fish and shellfish", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOPtP7Xlw43EYIsRbcs4tNnkP3wCkaREYaFJ9Ta=s1360-w1360-h1020" },
  ],
  "Santa Rosa de Cabal": [
    { name: "La Cocina Hidden", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPehn4iJwZ7OmRcE6Hv3t10EFurWUs1IALSor57=s1360-w1360-h1020" },
    { name: "Restaurante London´s House", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOEWtu14Fn6AAmflsFFvwUu81APJkLtbass5LZ4=s1360-w1360-h1020" },
    { name: "Veranera Cocina Restaurante", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNYA3dd-8AKYQZcsfEn4RLP0Ykm1MDeg5vsTJD3=s1360-w1360-h1020" },
    { name: "Baldoria Restaurante Bar", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNfle3wmbx3KXxRFYX95etFg5bu9NN27E-bYgc3=s1360-w1360-h1020" },
    { name: "Restaurante Fiambre", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPijmswhdBQPiVF7HiLJ9gP-_aFUiSgjBXLI1sR=s1360-w1360-h1020" },
    { name: "El Sarape", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipMQ3FqjR6j3xvfhSfUMBhIijvk80Vo6mQWN5kbi=s1360-w1360-h1020" },
    { name: "Restaurante Don Lolo", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipP7h5UBv4QMiMLAiuBQQK7oI2rp8U_dmnwdt0VJ=s1360-w1360-h1020" },
    { name: "Restaurante La Casa de la Abuela", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOuUry6dLOysqI9iunFjcL4XOwRsne9IyTsPeYh=s1360-w1360-h1020" },
  ],
  "La Virginia": [
    { name: "Restaurante El Buen Apetito", rating: 4.2, image: "https://img.restaurantguru.com/ca19-dishes-Restaurante-El-Buen-Apetito-La-Virginia.jpg" },
    { name: "Faroles Plaza", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOZ2KYwAtMQ-ezsPAPSE14AqBissT7amVSUNEan=s1360-w1360-h1020" },
    { name: "Mia Piccola Pizzeria", rating: 4.2, image: "https://img.restaurantguru.com/c2a2-Restaurant-Mia-Piccola-Pizzeria-interior.jpg" },
    { name: "Restaurante el molino", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOSUjYm4E6Z1LEBSR5LQcBuIRVSSfiCo3fijYNw=s1360-w1360-h1020" },
    { name: "Los Paisanitos ", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipN3aUvLQIkSYjd268_sbp_1Ebw1x4AQL5-vszK9=s1360-w1360-h1020" },
    { name: "La Churrasquería", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNMepk5uKm7gQ6_SKdEoSuT_WLzrpof4ewobP-E=s1360-w1360-h1020" },
    { name: "Restaurante La Pesebrera", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOv7ir5TisfSdrn6TOuaQ3Q9qKV_UgGrirjCxSU=s1360-w1360-h1020" },
    { name: "La Fondita De Garcia", rating: 4.2, image: "https://img.restaurantguru.com/c9ca-Restaurant-La-fondita-de-Garcia-photo.jpg" },
  ],
  "Marsella": [
    { name: "El Mirador", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipO8uM5c3G0eQodfvzJNxQbpCuyGNW-osDnoqWXw=s1360-w1360-h1020" },
    { name: "La Estancia", rating: 4.2, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/17/d7/02/20160720-134005-largejpg.jpg?w=900&h=500&s=1" },
    { name: "La Fonda Paisa", rating: 4.2, image: "https://media-cdn.tripadvisor.com/media/photo-s/05/11/29/6a/bandeja-paisa.jpg" },
    { name: "Villa Fuerte Restaurante y Parrilla", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipM37c9ie-yI77vEjWgpfkrryE5dNThaSWlOTonh=s1360-w1360-h1020" },
    { name: "La Molienda Cafe Bar1", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipM0M7vApvG51R7lOaiYgTyfCJqI9HfZQr_9IMwG=s1360-w1360-h1020" },
    { name: "Restaurante Estercita", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPFaAl8uUe2NUDaqRfk6G-EheIl3NObEdVVXH3V=s1360-w1360-h1020" },
    { name: "La Casa de Ayda", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipO9BSnnQTeFFeoCUlkIoaxC6dizy7a6ZdTPxxoK=s1360-w1360-h1020" },
    { name: "RAYUELA", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNi0XdODKbWDSx8ZQfDZRipJX72MWsKMg-U-3OU=s1360-w1360-h1020" },
  ],
  "Belén de Umbría": [
    { name: "La Delfa Restaurante Picnic", rating: 4.2, image: "data:image/jpeg;base64,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" },
    { name: "Benditas Alitas", rating: 4.2, image: "https://jetextramar.com/wp-content/uploads/2021/11/receta-de-alas-de-pollo-mitades-jet-extramar.jpg" },
    { name: "Bambinos Pizza", rating: 4.2, image: "https://www.cocinadelirante.com/sites/default/files/images/2023/08/receta-de-pizza-sin-horno.jpg" },
    { name: "Latinos Bar", rating: 4.2, image: "https://lacomidalatina.com/wp-content/uploads/2016/05/comida-latina.jpg?w=1200" },
    { name: "Movimiento Natural Gourmet", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNbp-DD1Bwk0O3yBjKsk3G1nBtQQ2xk-KvNfEd0=s1360-w1360-h1020" },
    { name: "genios coffee", rating: 4.2, image: "https://i.pinimg.com/736x/dd/d4/d7/ddd4d73a87f3ef13a777a6e469f5dbc2.jpg" },
    { name: "La Loma Restaurante", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipMSk3qtilTzlvr6A9194WMG5SNtHFFKyxeIhrkj=s1360-w1360-h1020" },
    { name: "La Fonda", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipONGtMZFpbAcO0Tze7idkxFw3tFUYit87wbE1pl=s1360-w1360-h1020" },
  ],
  "Apía": [
    { name: "Apia", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOlcNLJa5RImuUPF5cVtAdTlSdoqpsgOtSVQeL9=s1360-w1360-h1020" },
    { name: "Come & vive Restaurante Gourmet", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPEvtV-JnXUZOo7H2BZdX6ENct0VyPEB7lgcOy0=s1360-w1360-h1020" },
    { name: "Restaurante El Reposo - Donde Canelo", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPcBc1yHdcLKIwhDmtqH-I3u8lw_yAzXaGfI0GA=s1360-w1360-h1020" },
    { name: "Don plátano", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNVAdg9iwfDUBmAxo4_OSvpcKWZzi1fVSSrkqAE=s1360-w1360-h1020" },
    { name: "La Suegra", rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0nRL-f_pXTEOQ4Oe0gN4-WR6TzWN3o2zgA&s" },
    { name: "Asadero La Marina", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNVD7MetOS_2_hIkoeg9uXP5Mw_A4KfCHVQKvIN=s1360-w1360-h1020" },
    { name: "Fanny's", rating: 4.2, image: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB8-6gC6QrmkRdSplH2zJHq5tt-NeMRwaQiEueI6C94IoMGzWKJ6U24ZQcQ94mvFz00Cv9K6b_ng9UPk6jafLez-LQo6xlUtIwy5wAdtqd8sLde957WNO8TEC7UAt6A16F8Aq5I=s1360-w1360-h1020" },
    { name: "BRISAS DEL RIO", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipN3JGcdXZVcepg_XR8K8WltynhwYkxEcw5m2e2r=s1360-w1360-h1020" },,
  ],
  "Santuario": [
    { name: "El deleite de Santuario", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipN_eRMlvzOXNuw3VMgcJV7TnrDb6RAkkL3H9M_F=s1360-w1360-h1020" },
    { name: "Tatamá", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPo7NCzKT4lc9Lwp_fCih96ohiD-yLFcniIupy5=s1360-w1360-h1020" },
    { name: "Asadero La Marina", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOoNaT4IekR3vA8S2F7zRdvHYjyJaZwcnamtT1d=s1360-w1360-h1020" },
    { name: "Restaurante y asadero la esquina del buen sabor", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOiVXEDNiepK2nPDaCMWZh9Wagn2rqTVcepGSJy=s1360-w1360-h1020" },
    { name: "Possopolis - Restaurante y pesca", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOnOWwaX_a654hG0hC21GW9LwqWPF3y1g7C7jnS=s1360-w1360-h1020" },
    { name: "Mirador Restaurante La Floresta", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipN4ensGSFyw-Qg-XJeWSuNY_oK9PRR6QaW42S_U=s1360-w1360-h1020" },
    { name: "Pite'Tierra", rating: 4.2, image: "https://phantom-telva.unidadeditorial.es/1a955e652db65ba06b60d1da93857dc4/resize/640/assets/multimedia/imagenes/2022/01/28/16433841046581.png" },
    { name: "Restaurante Panorama", rating: 4.2, image: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/01/suegras-de-chorizo-receta.jpg" },
  ],
  "Pueblo Rico": [
    { name: "Bangsia Restaurante bar", rating: 4.2, image: "https://www.cardenasmarkets.com/wp-content/uploads/fly-images/601/suegra-kit-1464x920-c.jpg" },
    { name: "Donde Adry - Parrilla Bar", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPxsgpcDv7GqdrAZ5o1Qs-YOELOb9UqWQhQPDW-=s1360-w1360-h1020" },
    { name: "Restaurante La Negra Ceci", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipP3qIBrzGV3IpFLei2sjl0Wfij0eHinmoN0CMhw=s1360-w1360-h1020" },
    { name: "La Sazón De Adri", rating: 4.2, image: "https://i.blogs.es/4fab49/carne-suegra-dap-pakus-collage-1-/450_1000.jpg" },
    { name: "Restaurante Sabores", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNHsOjYqSgxT0h3c-0q0Wo2WHWEd78vw-TAW67U=s1360-w1360-h1020" },
    { name: "Restaurante y Hospedaje LA CUCHARA", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipMepTcaJGyUE1RSwoNRObAsKyK9mgPIrZiLuFee=s1360-w1360-h1020" },
    { name: "Restaurante La Viuda", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOLaGLKIxhnRYIwJcVcn4JqWEDiSOyiCcHTZIhT=s1360-w1360-h1020" },
    { name: "Restaurante Rancho Familiar", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNo8JxfUrax8DVVme4izJU-TvzqCpzPeUiewsQY=s1360-w1360-h1020" },
  ],
  "Mistrató": [
    { name: "La Terraza", rating: 4.2, image: "https://phantom-elmundo.unidadeditorial.es/6e6e12704b7471ffc003bdbc8a1950d0/resize/414/f/jpg/assets/multimedia/imagenes/2021/02/18/16136464017830.jpg" },
    { name: "REl Gourmet", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPIwSuFwjWnOaTYHUUEj2oVlvoz3_Qkv6dJfqah=s1360-w1360-h1020-rw" },
    { name: "Piqueteadero el Cura", rating: 4.2, image: "https://teveoenmadrid.com/wp-content/uploads/2025/02/cocido-la-gran-tasca-en-casa-te-veo-emadrid.jpg" },
    { name: "La Perrada Paisa 2", rating: 4.2, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/4a/8b/1e/img-20191214-134533-largejpg.jpg?w=700&h=400&s=1" },
    { name: "Piedras Pintadas", rating: 4.2, image: "https://conservaslasuegra.com/wp-content/uploads/2023/08/conservas-la-suegra-quienes-somos-3.jpg" },
    { name: "Bocaditos con Amor", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNceSNwLLDJA9CcjDfSTenAEgVhL5R69_JGheyC=s1360-w1360-h1020-rw" },
    { name: "Café A Vuelo de Pájaro", rating: 4.2, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163785342.jpg?k=cf6a86cbfd1e5e3bef6dbf871d678a37dfd130702fd2df99defdaa4ae1729991&o=&hp=1" },
    { name: "Maná Sabor", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipO74ENle8xyJ9btECn63rI9t-SEBJhD6bQ1jh5x=s1360-w1360-h1020-rw" },
  ],
  "Guática": [
    { name: "El Maderero Campestre", rating: 4.2, image: "https://i.pinimg.com/474x/70/96/63/7096636118cf2304b190c6c3704c5537.jpg" },
    { name: "la Casona", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPXUwv4KnuIbzZMSxrvkezD9F9qrds0aXdH8T0=s1360-w1360-h1020-rw" },
    { name: "Restaurante y comidas rápidas", rating: 4.2, image: "https://i.revistapym.com.co/old/2016/10/las-comidas-rapidas-1.png?w=728" },
    { name: "MYSAN", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPRQS8b0nyH-mM0Nac-Yos0V4PR1zdoCOJ4L3Pu=s1360-w1360-h1020-rw" },
    { name: "La Elda Café & Tradición", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipONu4gNZG4VPGBAwdsSUyzofeO82RhnuskyfLsP=s1360-w1360-h1020-rw" },
    { name: "Restaurante estadero san clemente", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPgnOQU7QqET2kg1S8fYF_etYAavtw7NQJedL0C=s1360-w1360-h1020-rw" },
    { name: "restaurante el Paraíso", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPwfcJI6qLjvhRG3inK0ZIvVeqFh82kidl_dIh2=s1360-w1360-h1020-rw" },
    { name: "Food Lover", rating: 4.2, image: "data:image/jpeg;base64,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" },
  ],
  "Quinchía": [
    { name: " Merced Latino", rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgRgEoEQMot3i_0n3tErJPlngQIYu2I-Aqg&s" },
    { name: "Los Guayacanes Restaurante", rating: 4.2, image: "https://losguayacanesfincahotel.com/wp-content/uploads/2022/12/img-retaurante05.jpeg" },
    { name: "El Rancho del Tío Picnic", rating: 4.2, image: "https://ranchomx.co/wp-content/uploads/LOMO-AZTECA.jpg" },
    { name: "LA FRIDUCHA", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPeVf-sGxzVb4Efn7DgM7NWcyXyYLhN7WX8XTpd=s1360-w1360-h1020-rw" },
    { name: "El Balcón de las Delicias", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPtwbbbLt8STxdLAp6Ic9mvIfhtHFy7gT8oY7EY=s1360-w1360-h1020-rw" },
    { name: "Niño Dios", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOmOMI_EGTMM7xfiQ-Tr-sobDS09kzSJBz1j3z_=s1360-w1360-h1020-rw" },
    { name: "FINCA LAS MARÍAS", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOPVr0bl51X2SEe9zYurTHU168QBCh4TrkkY9rH=s1360-w1360-h1020-rw" },
    { name: "Villa Gloria", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipN6ZH9Svp-Ea-L8JcAjjQsBxqbTTLWDsRBTrb0B=s1360-w1360-h1020-rw" },,
  ],
  "Balboa": [
    { name: "pa`onde oscar", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipPLxfiDlKXg3XZOXW9-Lo5v9z57LqSaaDjVsRqA=s1360-w1360-h1020-rw" },
    { name: "el Establo", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNdywMhUfvMhNvIMqKuVoei7GMCsZcVgESltd0C=s1360-w1360-h1020-rw" },
    { name: "Casa Roja", rating: 4.2, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/c6/61/c9/papas-arrugadas.jpg?w=900&h=500&s=1" },
    { name: "el Maizal", rating: 4.2, image: "https://res.cloudinary.com/tf-lab/image/upload/w_640,c_fill,q_auto,f_auto/f_auto,q_auto,w_800,c_limit/customer/4cb1abf8-1952-4c54-bbf5-3a18880fd953/225f6680-cb27-4cb2-a59e-710705573d6c.jpg" },
    { name: "La Tartaleta Café", rating: 4.2, image: "https://www.shutterstock.com/image-photo/cheesecake-on-plate-restaurant-cafe-260nw-2000238779.jpg" },
    { name: "Dónde marcela", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipMasxLKiazxb8GCvXlms4_6712jO9yHzlh_uOwW=s1360-w1360-h1020-rw" },
    { name: "Sabor a café", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipP4Q8-NETHEfDf449le7DIljmTJFL1DwhykbHDO=s1360-w1360-h1020-rw" },
    { name: "Perros Mario", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNeI6XBnFK8e1m7rLKHlcuYRUQJQp98_SsDFyjn=s1360-w1360-h1020-rw" },,
  ],
  "La Celia": [
    { name: "Donde Obdulio", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipM5sHh0YH6UVaUSuBV5YpBmVUx4mldj7X4UWOjz=s1360-w1360-h1020-rw" },
    { name: "Cafetería Bar - BamBam", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNGng0t3jdurnnB-zanriSDBggDU_qwyfGsE2Jy=s1360-w1360-h1020-rw" },
    { name: "Donde Tana", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipOZmDTEzrpar64bLI3dkbvumRU5PTQfEOHCbQr7=s1360-w1360-h1020-rw" },
    { name: "La tangueria parrilla y tango-show", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipM3af8qqxDJbh9JfNJk66SP9GgFyt0jD3pjXp2t=s1360-w1360-h1020-rw" },
    { name: "Mirador San Antonio", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipMZGt2VPSSJ6Evw3e57zfJEvI4D2tr5ARdSZda5=s1360-w1360-h1020-rw" },
    { name: "LAS DELICIAS DEL MAÍZ", rating: 4.2, image: "https://lh3.googleusercontent.com/p/AF1QipNukbwyrcgqLPV6qzb3wvu6vKxC11RWfEZsf5GV=s1360-w1360-h1020-rw" },
  ]
};

const RestaurantCard = ({ name, rating, image, description, address, phone }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col w-full p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-sm transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-3">
          <h3 className="text-md font-semibold line-clamp-1">{name}</h3>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-sm ${
                  index < Math.floor(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-green-500">{rating}</span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-2 px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              {showDetails ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="mt-3 p-2 border-t border-gray-200 dark:border-gray-700">
          {description && <p className="text-sm mb-2">{description}</p>}
          {address && <p className="text-sm"><strong>Dirección:</strong> {address}</p>}
          {phone && <p className="text-sm"><strong>Teléfono:</strong> {phone}</p>}
        </div>
      )}
    </div>
  );
};

const Restaurants = () => {
  const [selectedMunicipio, setSelectedMunicipio] = useState('todos');

  return (
    <section className='min-h-screen py-20 dark:text-white'>
      <div className="px-4">
        <TitleH1 text={"¡LA VIDA PARA LLEVAR, ES PARA COMER AQUI CON GUSTO Y SABOR!"} style="text-lg lg:text-3xl font-bold text-green-800 mb-6 text-center"/>

        <div className="mb-8 flex justify-center">
          <select 
            value={selectedMunicipio}
            onChange={(e) => setSelectedMunicipio(e.target.value)}
            className="p-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
          >
            {municipalities.map(municipio => (
              <option key={municipio} value={municipio}>
                {municipio === 'todos' ? 'Todos los municipios' : municipio}
              </option>
            ))}
          </select>
        </div>
        
        {municipalities
          .filter(municipality => selectedMunicipio === 'todos' || municipality === selectedMunicipio)
          .map((municipality) => (
            municipality !== 'todos' && (
              <motion.div 
                key={municipality} 
                className="mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-green-800 mb-6 text-center border-b-2 border-green-500 pb-2 hover:text-green-600 transition-colors duration-300">{municipality}</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center">
                  {restaurantsByMunicipality[municipality]?.map((restaurant, index) => (
                    <RestaurantCard
                      key={index}
                      {...restaurant}
                    />  
                  ))}
                </div>
              </motion.div>
            )
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
