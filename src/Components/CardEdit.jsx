import React, { useState } from 'react'
import Modal from './Modal'




const CardEdit = ({namePlace}) => {
  const [estadoModal, cambiarEstado] = useState(false)
  return (
    <div className='lg: shadow-xl min-w-3xs max-w-xl w-full rounded-xl py-2'>
        <img className='lg: rounded-t-xl  ' src={window.location.origin + '/img1.jpeg'} />
        <h1 className='lg: text-xl font-normal p-4'>{namePlace}</h1>
        <div className='lg: text-center p-2'>
        <p className='text-left p-2'>Detalles resumidos de lugar</p>
        <div className="flex p-2">⭐⭐⭐⭐⭐</div>
        <br />
        <button className='lg: w-[90%] bg-green-700 rounded-xl p-2 text-white' onClick={() => cambiarEstado(!estadoModal)
        }>Editar</button>
        <Modal titulo={"Editar destino"} accion={"Eliminar"} className=
        'lg: z-[99]' estado={estadoModal}
        cambiarEstado={cambiarEstado}/>
        </div>
        
        

    </div>
  )
}

export default CardEdit
