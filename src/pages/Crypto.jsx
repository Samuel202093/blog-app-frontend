import React from 'react'
import LTLayout1 from '../Layouts/LTLayoutCopy1'

const Crypto = () => {
    const url ='https://newsapi.org/v2/everything?q=bitcoin&apiKey=35f81e68fa854e4b8f36ed72f667f642'
  return (
    <LTLayout1 url={url} section={'Cryptocurrency'}/>
  )
}

export default Crypto