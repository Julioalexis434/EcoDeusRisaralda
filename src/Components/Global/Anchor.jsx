import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = ({url, text, style}) => {
  return (
    <Link to = {url} className={` inline-block p-4 ${style}`}>
      {text}
    </Link>
  )
}

export default Anchor
