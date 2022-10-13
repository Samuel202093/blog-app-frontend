import React, {useState} from 'react'
import SavePost from './SavePost'
import { useAppContext } from '../context/context'
import ReadingPage from './ReadingPage'

const CardThree = ({item, blog}) => {
  const {readingPage, handleReadingPage} = useAppContext()
  const [readTab, setReadTab] = useState(false)

    const handleReadTab = ()=> {
      setReadTab(!readTab)
    }

    const datay = {
      urlToImage: item.avatar,
      description: item.description,
      title: item.title
    }

    // further inquiry pls
    const datas = blog.map((blg)=> {
     return {
      ...blg, 
      urlToImage: blg.avatar,
      description: blg.description,
      title: blg.title
    }})

    // console.log(blog)

  return (
  <div className='max-w-[600px]'>
     <div className='h-[150px] min-w-[300px] max-w-[600px] flex gap-x-2 p-2'>
        <div className="img-container w-2/5 h-full relative md:order-2">
            <img 
            // src="/001.jpg" 
            src={item.avatar}
            alt="" 
            className='h-full object-cover art-img'/>
        </div>

        <div className='h-full min-w-[100px] w-3/5 flex flex-col gap-y-2 p-2 order-1'>
            <div className='relative flex items-center justify-between'>
              <span className='text-[12px] py-1 px-2 border capitalize text-[rgba(0,0,0,0.8)] font-semibold'>{item.category}</span>
              <SavePost item={datay} section={item.category}/>
            </div>

            <div className="details flex flex-col gap-y-2">
                <p className="title text-lg font-semibold leading-tight text-justify">
                   
                    {item.title.slice(0,50)}....
                </p>
               
                <span className='text-[12px] underline text-blue-700 visited:text-blue-900 cursor-pointer' onClick={handleReadTab}>Continue Reading...</span>
            </div>
            {readTab && <ReadingPage handleReadTab={handleReadTab} item={datay} blog={datas} data={datas}/>}
       </div>
     </div>
   </div>
  )
}

export default CardThree