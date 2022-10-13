import React, { useState } from 'react'
import {GrSearch} from 'react-icons/gr'
import ShowMoreCard from './ShowMoreCard'
import {BiChevronsDown} from 'react-icons/bi'
import Tooltip from '@mui/material/Tooltip';
import {motion} from 'framer-motion'
import {GrStatusGood} from 'react-icons/gr'
import { useAdminAuth } from '../../context/AdminContext'

const ShowMore = ({handleOpenModal, data}) => {
    const {success} = useAdminAuth()

  return (
    <motion.div 
    className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-[9999] backdrop-blur-sm'
    initial={{scale: 0}}
    animate={{scale:1}}
    transition={{ duration: 0.1}}
    // onClick={()=>handleOpenModal()}
    >
       <div className='md:w-[70%] lg:w-[50%] w-[90%] min-h-[50%] max-h-[80%] bg-[rgba(255,255,255,1)]  rounded-md border shadow-md relative fle flex-col gap-y-1 overflow-y-auto'>
          <form className='h-12 flex items-center p-2 border-b-2 pb-3 sticky top-0 z-[99999] bg-white w-full'>
            <span className='px-2 py-1 text-xl cursor-none bg-white'><GrSearch/></span>
            <input type="text" className='flex-1 h-[30px]  p-1 focus:outline-[rgba(0,0,0,0.5)] bg-white focus:border-none' placeholder='Search For Articles'/>
            <button className='px-2 py-1 border-l-2'>Search</button>
          </form>

          <div className='flex flex-col gap-y-2 items-end'>
          {
            
            data.map((datum, index)=> {
                return (
                   <ShowMoreCard key={index} handleOpenModal={handleOpenModal} datum={datum}/>
                )
            })
          }
          { data.length >= 4 ?
          <Tooltip title='scroll-down'>
          <span className='animate-bounce p-2 border border-black rounded-full sticky bottom-2 w-fit bg-white text-xl cursor-pointer' ><BiChevronsDown/></span></Tooltip>
          : null
          }

          </div>


          
       </div>
       {success && <motion.div className='absolute top-4 left-[50%] ml-[-100px] w-[200px] bg-white rounded-sm h-fit  flex gap-x-1 py-2 px-2 items-center justify-center text-sm'
        initial={{ y:-100}}
        animate={{y:0}}
        transition={{type:'spring', stiffness:120}}
       >
          <GrStatusGood className='text-green-800'/> <span>{success} </span> 
       </motion.div>}
    </motion.div>
  )
}

export default ShowMore