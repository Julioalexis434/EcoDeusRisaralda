import React from 'react'
import {motion} from 'framer-motion'
const ContainerTitle = ({text, style}) => {
  return (
    <motion.h1 
    initial={{ opacity: 0, translateY: -50 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 1, delay: 0.3}}
    className={`text-black ${style}`}>
      {text}
    </motion.h1>
  )
}

export default ContainerTitle
