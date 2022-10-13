import React from 'react'
import LTLayout1 from '../Layouts/LTLayoutCopy1'



const Books = () => {
    const url = 'https://newsapi.org/v2/everything?q=books&apiKey=35f81e68fa854e4b8f36ed72f667f642'
    return (
       <LTLayout1 url={url} section={'Books'}/>
    )
}

export default Books