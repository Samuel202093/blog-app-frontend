import React from 'react'
import { useEffect } from 'react'
import LTLayout1 from '../Layouts/LTLayoutCopy1'

const World = () => {
    const url = 'https://newsapi.org/v2/everything?q=politics&apiKey=35f81e68fa854e4b8f36ed72f667f642' 
    
  return (
    <div>
        <LTLayout1 url={url} section={'World'}/>
    </div>
  )
}

export default World