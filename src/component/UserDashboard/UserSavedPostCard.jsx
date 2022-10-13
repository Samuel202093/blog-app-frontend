import React from 'react'
import { useState } from 'react'
import {AiOutlineShareAlt,AiOutlineDelete} from 'react-icons/ai'
import DeleteUserPost from './DeleteUserPost'
import ReadingPaged from './ReadingPage'
import axios from 'axios'

const UserSavedPostCard = ({item}) => {
    console.log(item);
    const [modalDelete, setModalDel] = useState(false)

    const [readTab, setReadTab] = useState(false)

    const handleReadTab = ()=>{
      setReadTab(!readTab)
    }

  return (
    <div className='m-1 w-[300px] h-fit flex flex-col gap-y-2 saved-post '>
       <div className='img-container h-[300px] '>
       
        <img src={item.image} alt="" className='h-full w-full object-cover' />
       </div>
       <div className='content flex flex-col gap-y-2'>
    
        <h2 className='text-xl font-semibold text-justify'>{item.title}</h2>
         <p className='text-sm font-medium leading-normal text-[rgba(0,0,0,0.8)]'>
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur eius at, minima voluptas optio?
            <span className='text-blue-600 cursor-pointer text-[14px] font-medium ' onClick={handleReadTab}>.....continue reading</span>
         </p>
       </div>
       <div className='flex'>
        <span className='flex-1 border border-r-0 flex justify-center py-2 text-base cursor-pointer'><AiOutlineShareAlt/></span>
        <span className='flex-1 border flex justify-center py-2 text-base cursor-pointer' onClick={()=> setModalDel(true)}><AiOutlineDelete/></span>
       </div>
       {modalDelete && <DeleteUserPost setModalDel={setModalDel}  id={item._id}/>}
       {readTab && <ReadingPaged handleReadTab={handleReadTab} item={item}/>}


    </div>
  )
}

export default UserSavedPostCard