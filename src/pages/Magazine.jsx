import React from 'react'
import LTLayout1 from '../Layouts/LTLayoutCopy1'

const Magazine = () => {
    const url = 'https://newsapi.org/v2/everything?q=gossip&apiKey=35f81e68fa854e4b8f36ed72f667f642'
  return (
    <LTLayout1 url={url} section={'Magazine'}/>
  )
}

export default Magazine