import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = ({style}) => {
  const { logout } = useAuth0()
  return (
    <button onClick={()=> logout()} className={`px-4 py-2 rounded-md cursor-pointer ${style}`}>
    Cerrar Sesión
</button>
  )
}

export default LogoutButton
