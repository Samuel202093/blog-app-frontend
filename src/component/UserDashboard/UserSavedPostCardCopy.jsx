import React from 'react'
import {AiOutlineShareAlt,AiOutlineDelete} from 'react-icons/ai'

const UserSavedPostCardCopy = () => {
  return (
    <div className=' animate-pulse m-1 w-[400px] h-fit flex flex-col gap-y-2'>
       <div className='img-container h-[300px] bg-slate-100 rounded-lg '>
        
       </div>
       <div className='content flex flex-col gap-y-2'>
        <h2 className='text-xl font-semibold text-justify h-10 bg-slate-50 rounded-sm'></h2>
         <p className='text-sm font-medium leading-normal text-[rgba(0,0,0,0.8)] h-5 bg-slate-50 rounded-sm'>
            <span className='text-blue-600  font-normal text-[14px] h-4 bg-slate-50 rounded-sm'></span>
         </p>
       </div>
       <div className='flex'>
        <span className='flex-1  flex justify-center py-2 h-3 text-base bg-slate-50 rounded-sm'></span>
        <span className='flex-1  flex justify-center py-2 h-3 text-base bg-slate-50 rounded-sm'></span>
       </div>
    </div>
  )
}

export const Loader = ()=> {
   
  return(
    <div className='animate-pulse h-full w-full flex justify-center items-center gap-2'>
     
      <p className='text-xl font-semibold '>Loading....</p>
    </div>
  )
}


export default UserSavedPostCardCopy