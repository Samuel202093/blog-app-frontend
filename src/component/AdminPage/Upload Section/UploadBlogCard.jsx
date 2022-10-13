import React from 'react'
import { useState } from 'react'
import {TbTrash} from 'react-icons/tb'
import { motion } from 'framer-motion'
import Tooltip from '@mui/material/Tooltip';
// import { doc, deleteDoc } from "firebase/firestore";
// import { db } from '../../../firebase/Firebase'



const UploadBlogCard = ({datum}) => {


    // const deletePost = async() => {
    //    try {
    //     await deleteDoc(doc(db, "UploadPost", datum.id));
    //    } catch (error) {
    //     console.log(error)
    //    }
    // }

  return (
    <motion.div class="flex border-2 rounded-sm border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col mx-2" initial={{ y:50 , opacity:0}} whileInView={{  y:0, opacity:1 }} transition={{delay:0.1, type:'tween'}}>
          <div class="w-20 h-20 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 flex-shrink-0">
           <img 
        //    src="./001.jpg" 
           src={datum.img} 
           alt="" 
           className='h-full w-full object-cover' />
          </div>
          <div class="flex-grow">
          <span className='p-1 border rounded-md mb-2'>{datum.section}</span>
            {/* <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2> */}
            <p class="leading-relaxed text-base font-medium">
               
                {datum.test}
            </p>
            <div  className='mt-3 flex gap-x-2'>

                <Tooltip title='Delete Post'>
                <motion.button 
                className='p-1 border cursor-pointer hover:bg-[rgba(0,0,0,0.02)]' 
                whileHover={{scale:1.1, borderRadius:'50%'}}
                whileTap={{scale:0.9}}
                onClick={()=> {
                    // deletePost()
                }}
                >
                    <TbTrash/>
                </motion.button>
                </Tooltip>

            </div>
            {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          {/* {edit && <AdminEdit item={item} handleEdit={handleEdit}/>} */}
    </motion.div>
  )
}

export default UploadBlogCard