import React from 'react'
import LTLayout1 from '../Layouts/LTLayoutCopy1'

const Style = () => {
    const url = 'https://newsapi.org/v2/everything?q=fashion&apiKey=35f81e68fa854e4b8f36ed72f667f642'
  return (
    <LTLayout1 url={url} section={'Style'}/>
  )
}

export default Style