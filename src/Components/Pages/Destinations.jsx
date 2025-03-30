import React from 'react'
import CardPlace from '../CardPlace'
import { useContext } from 'react'
import { ContextDestinations } from '../Context/ContextDestinations'

const Destinations = () => {
    const {destinations}= useContext(ContextDestinations)
    return (
        <div className="container mx-auto px-4 py-[12vh]">
            {destinations.municipios.map((municipio, index) => {
                return (
                    <div key={index} className="mb-12">
                        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center 
                            border-b-2 border-green-500 pb-2 hover:text-green-600 
                            transition-colors duration-300">
                            {municipio.nombre}
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                            gap-6 p-4 animate-fade-in ">
                            {municipio.lugares.map((lugar, index) => {
                                return (
                                    <div className="transform hover:scale-105 
                                        transition-transform duration-300">
                                        <CardPlace key={index} lugar={lugar} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Destinations