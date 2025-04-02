import React, { useState } from 'react'
import Modal from '../Modal'
import CardEdit from '../CardEdit';






const Sucursales = () => {
  const [estadoModal, cambiarEstado] = useState(false);

  const data = [
    {nombreLugar:"Consota"},
    {nombreLugar:"Ukumari"},
    {nombreLugar:"Termales"}
 
  ];
   const state={
    data: data,
    form:{
      
      nombreLugar:''
    }
  }
   const handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.nombreLugar]: e.target.value,
      }
    })
  }
  const insertar=()=>{
    var valorNuevo={...this.state.form};
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista})
    cambiarEstado(false)

  }
  
 
    
  

  
   
  return (
    

    <>
    <div className='p-2 m-2 rounded-md shadow-2xl border-1 border-gray-200 py-2 text-right'>
      <button className='p-2 bg-blue-500 text-white rounded-md mr-5' onClick={() => cambiarEstado(!estadoModal)
        }>Añadir lugar</button>
      <Modal titulo={"Añadir un lugar"} accion={"Cancelar"} className=
        'lg: z-[99]' estado={estadoModal}
        cambiarEstado={cambiarEstado} renovar={handleChange}/>

    </div>
    <div className='p-2 flex flex-wrap gap-8'>
      
      {state.data.map((elemento)=>

        <CardEdit namePlace={elemento.nombreLugar}  />
        
        
      )}
    </div>
    
    </>
    
  )
}

export default Sucursales
export function insertar(){
    
}