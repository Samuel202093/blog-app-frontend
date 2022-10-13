import React, {useState} from 'react'
import SavePost from './SavePost'
import { useAppContext } from '../context/context'
import ReadingPage from './ReadingPage'
import { useAuthContext } from '../context/AuthContext'


  const CardTwo = ({item, data, postSection}) => {

    const {user} = useAuthContext()

    const level = postSection
    
  const {readingPage, handleReadingPage, section} = useAppContext()

    // const { handleReadingPage, readingPage,showSignIn} = useAppContext
    const {description, title} = item
    const shortDescription = description.slice(0, 90)

    const [readTab, setReadTab] = useState(false)

    const handleReadTab = ()=>{
      setReadTab(!readTab)
    }
    // converting data to blog so it can be used in the reading tab because the name/ value pairs are different
    const blogs = data.map((blog)=> {
      return {
        title: blog.title,
        section: postSection
      }
    } )
    // console.log(showSignIn);
  return (
    <div className='lg:h-fit border-t border-l border-dashed lg:border-none'>
    <div className='h-fit min-w-[300px] flex flex-col gap-y-2 p-2'>
        <div className='relative flex items-center justify-between'>
           <span className='text-[12px] py-1 px-2 border capitalize text-[rgba(0,0,0,0.8)] font-semibold'>
           {section ? section : 'latest News'}
           </span>
           <SavePost item={item} section={section}/>
        </div>

        <div className="details flex flex-col gap-y-2">
            <p className="title text-2xl font-semibold leading-tight text-left">
                {title}
                
            </p>
            <p className="content text-sm text-[rgba(0,0,0,0.7)] font-medium text-justify">
                {shortDescription + '.....'}
            <span  className='text-[12px] underline text-blue-700 visited:text-blue-900 cursor-pointer' onClick={handleReadTab}>Continue Reading</span>
            </p>
           
        </div>
        {readTab && <ReadingPage handleReadTab={handleReadTab} item={item} blog={blogs} data={data}/>}

    </div>
</div>
  )
}

export default CardTwo