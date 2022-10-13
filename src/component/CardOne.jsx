import React from 'react'
import { useAppContext } from '../context/context'
import Header from './Header'
import {TbBadge} from'react-icons/tb'
import { useState } from 'react'
import {HiBadgeCheck} from 'react-icons/hi'

const CardOne = ({select}) => {

    const {description, title, urlToImage} = select

    const shortDescription = description.slice(0,90)
    
    const {handleDateDisplay, section} = useAppContext()
    const [savePost, setSavePost] = useState(true)
    

    const handleSavePost = ()=>{
        setSavePost(!savePost)
        // write the code to save the user saved post to his profile page
    }



  return (
    <div className='w-[400px] mt-4 md:w-full h-full '>
        <Header/>
        <div className='h-full min-w-[300px] w-[98%] mx-auto md:w-full md:h-full flex flex-col gap-y-2 p-1'>
            <div className="img-container relative w-full">
                <span className='absolute p-1 bg-white text-black top-0 left-0 border text-[12px] font-medium capitalize'>
                    {section ? section : 'latest News'}
                </span>
                <img src={urlToImage} alt="" className='h-[300px] md:h-[400px] object-cover w-full md:w-full art-img'/>
                {/* <img src='/001.jpg' alt="" className='h-[300px] md:h-[400px] object-cover w-full md:w-full art-img'/> */}
                {/* {savePost ? <span className='absolute p-1 bg-white text-black bottom-0 left-0 border text-[12px] font-medium save-span flex gap-x-1 items-center' onClick={()=> handleSavePost()}>
                    <TbBadge/>
                    Save Item
                </span> : <span className='absolute p-1 bg-white text-black bottom-0 left-0 border text-[12px] font-medium save-span flex gap-x-1 items-center' onClick={()=> handleSavePost()}>
                    <HiBadgeCheck/>
                    Item Saved
                </span>} */}
            </div>

            <div className="details h-fit mb-10 flex flex-col gap-y-2 lg:h-2/5">
                <p className="date text-[12px] text-[rgba(0,0,0,0.7)] font-meduim">
                  {handleDateDisplay()}
                </p>
                <p className="title text-2xl font-semibold leading-tight text-left">
                   {title} 
                  
                </p>
                <p className="content text-sm text-[rgba(0,0,0,0.7)] font-medium text-left h-fit">
                    {shortDescription + '.....'}
                    
                <span className='text-[12px] underline text-blue-700 visited:text-blue-900'>Continue Reading...</span>

                </p> 
                
            </div>
            
        </div>
    </div>
  )
}

export default CardOne