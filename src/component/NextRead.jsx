import React from 'react'
import ReadingPage from './ReadingPage'

const NextRead = ({handleReadTab, item, blog}) => {
  return (
    <ReadingPage handleReadTab={handleReadTab} item={item} blog={blog}/>
  )
}

export default NextRead