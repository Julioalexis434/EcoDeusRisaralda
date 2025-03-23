import React from 'react'
import { useContext } from 'react'
import { ContextNav } from './Context/ContextNav'
import { Link } from 'react-router-dom'
const Nav = ({style}) => {
    const {links} = useContext(ContextNav)
  return (
    
    <nav className={`justify-center  z-10 bg-white ${style}`}>
       {links.map((link, i) =>{
        return(
            <Link key={i} to={link.url} className='inline-block p-4'>{link.name}</Link>
        )
       })}
    </nav>
  
  )
}

export default Nav
