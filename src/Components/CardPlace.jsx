import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const CardPlace = ({lugar}) => {
  return (
    <motion.div
     initial={{ opacity: 0}}
     whileInView={{ 
       opacity: 1, 
     }}
     viewport={{once: false, amount: 0.2}}
     transition={{ 
       duration: 1,
       ease: "easeOut",
       delay: 0.2
     }}
     
     className="rounded overflow-hidden shadow-lg bg-white dark:bg-dark2 hover:shadow-xl transition-shadow duration-300">
      {lugar.imagenes && lugar.imagenes.length > 0 ? lugar.imagenes.slice(0,1).map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          alt={lugar.nombre}
          className="w-full h-[192px] object-cover"
        />
      )): 
      <img
      src={""}
      alt={lugar.nombre}
      className="w-full h-[192px] object-cover"
    />
      }
      <div className="px-6 py-4 h-[calc(100%-192px)] flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2 line-clamp-1 dark:text-white">{lugar.nombre}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
            {lugar.descripcion.slice(0, 70)}...
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {lugar.actividades.slice(0, 2).map((actividad, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full text-green-800 dark:text-green-100 text-[12px]"
                >
                  {actividad}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 my-8'>
          <div className='text-green-500 dark:text-green-400 flex justify-between items-center w-full'>
            <span className="text-green-500">{lugar.puntuacion}</span>
            <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-sm ${
                  index < Math.floor(lugar.puntuacion)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            </div>
          </div>
          <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300">
            Ver detalles
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CardPlace