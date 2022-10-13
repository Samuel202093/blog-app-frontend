import React from 'react'
import {motion} from 'framer-motion'
import {GrStatusGood} from 'react-icons/gr'
import { useState } from 'react'
import { useUserContext } from './UserContext'

const DeleteUserPost = ({setModalDel,id}) => {
    const {deletePostMutation,handleDeletePost} = useUserContext()
    const [showSuccess, setShowSuccess] = useState(false)

    const handleDelModal = ()=>{
         setTimeout(()=>{
            setModalDel(false)
         },2000)
    }

  return (
    <div className='fixed top-0 right-0 h-full w-full z-[9999px] flex justify-center items-center bg-[rgba(0,0,0,0.1)] '>
       <motion.div className='rounded-sm bg-white text-slate-900 h-fit w-fit py-8 px-4 flex flex-col gap-y-6 shadow-lg'
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{type:'spring', stiffness:120, delay:0.1}}
       >
           <p className='text-base font-normal text-slate-800'>Are you sure you want to delete article?</p>
           <div className='flex justify-center items-center gap-x-4'>
            <motion.button className='border px-3 py-2 text-sm transition  hover:border-slate-900 cursor-pointer' 
            onClick={()=> setModalDel(false)}
            >
            Cancel</motion.button>
            <button className='border px-3 py-2 text-sm text-white bg-slate-900 hover:bg-slate-800 cursor-pointer'
            onClick={()=> {
               handleDeletePost(id)
               //  deletePostMutation.mutate({id:id})
                setShowSuccess(true);
                handleDelModal()
            }}
            >
            Delete</button>
           </div>
       </motion.div>
       {showSuccess && <motion.div className='absolute top-4 left-[50%] ml-[-100px] w-[200px] bg-white rounded-sm h-fit  flex gap-x-1 py-2 px-2 items-center justify-center text-sm'
        initial={{ y:-100}}
        animate={{y:0}}
        transition={{type:'spring', stiffness:120}}
       >
          <GrStatusGood className='text-green-800'/> <span>Post has been deleted!! </span> 
       </motion.div>}
    </div>
  )
}

export default DeleteUserPost