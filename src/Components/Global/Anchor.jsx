import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextAccesibility } from '../Context/ContextAccessibility'

const Anchor = ({url, text, style}) => {
  const {highlightlinks} =  useContext(ContextAccesibility)
  return (
    <Link to = {url} className={` inline-block p-4 ${style} ${highlightlinks ? "underline bg-lime-500 text-xl" : ""}`}>
      {text}
    </Link>
  )
}

export default Anchor
