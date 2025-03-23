import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = ({style}) => {
    const { loginWithRedirect } = useAuth0()
  return (
    <button onClick={()=> loginWithRedirect()} className={`px-4 py-2 rounded-md cursor-pointer ${style}`}>
        Iniciar Sesión
    </button>
  )
}

export default LoginButton
