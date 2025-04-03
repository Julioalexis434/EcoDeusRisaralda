import React from 'react'
import { motion } from 'framer-motion'
import { TitleH2 } from './Global/ContainerTitle'
import ContainerText from './Global/ContainerText'

const CardPlace = ({lugar}) => {
  return (
    <motion.div
     className="rounded overflow-hidden shadow-lg bg-white dark:bg-dark2 hover:shadow-xl transition-shadow duration-300">
      {lugar.imagenes && lugar.imagenes.length > 0 ? lugar.imagenes.slice(0,1).map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          alt={lugar.nombre}
          className="w-full h-[192px] object-cover"
        />
      )): 
      <div className="w-full h-[192px] object-cover">
      </div>
      
      }
      <div className="px-6 py-4 h-[calc(100%-192px)] flex flex-col justify-between">
        <div>
          <TitleH2 text={lugar.nombre} style = {"font-bold text-xl mb-2 line-clamp-1 text-black dark:text-white mt-0"}/>
          <ContainerText text={`${lugar.descripcion.slice(0, 50)}...`} style={"text-gray-700 text-base mb-4 line-clamp-3 dark:text-gray-300"}/>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {lugar.actividades.slice(0, 2).map((actividad, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-[12px]"
                >
                  {actividad}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 my-3'>
          <div className='text-green-500 flex justify-between items-center w-full'>
            <span>{lugar.puntuacion}</span>
            <div className="flex">⭐⭐⭐⭐⭐</div>
          </div>
          <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
            Ver detalles
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CardPlace