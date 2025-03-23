import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
const HeaderProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="p-2 text-black">
    <div className="h-[150px] w-full bg-gray-200 rounded-tl-lg rounded-tr-lg"></div>
    <div className="h-[150px] w-full bg-white rounded-bl-lg rounded-br-lg relative py-2 pl-40 shadow-xl">
      <div>
        {isAuthenticated ? (
          <img
            src={`${user?.picture}`}
            alt=""
            className="w-30 h-30 bg-gray-300 rounded-full absolute -top-1/2 left-2 object-contain"
          />
        ) : (
          <div className="w-30 h-30 bg-gray-300 rounded-full absolute -top-1/2 left-2"></div>
        )}

        <div>
          <motion.h1
            initial={{ opacity: 0, tranlateX: -50 }}
            animate={{ opacity: 1, tranlateX: 0 }}
            transition={{ duration: 1 }}
            className="font-medium text-xl"
          >
            {user?.name}
          </motion.h1>
          <p className="text-gray-700 text-sm">{user?.email}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeaderProfile
