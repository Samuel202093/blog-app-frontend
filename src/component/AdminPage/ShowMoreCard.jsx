import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { BiEdit } from 'react-icons/bi'
import { TbUpload } from 'react-icons/tb'
import {AiOutlineDelete} from 'react-icons/ai'
import AdminEdit from './AdminEdit'
import { useAdminAuth } from '../../context/AdminContext'
import Tooltip from '@mui/material/Tooltip';


const ShowMoreCard = ({handleOpenModal, datum}) => {
    // const time = Date.getTime()
    const time = '12-Dec-2021'

    const {handleEditPost,handleGetItem,handleUploaded} = useAdminAuth()

    const [showEdit, setShowEdit] = useState(false)
    
    const handleEdit = () => {
        // handleOpenModal()
        setShowEdit(!showEdit)
    }

    const handleDelete = () => {
        
    }

    const handleUpload = () => {
        
    }

    const item = {
        img: './001.jpg',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique sapiente error quod. Laboriosam sint voluptate magnam ullam, harum dolor.",
        title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, bullshit!"
    }

  return (
    <div className='py-3 px-1 border-b flex flex-col gap-y-1 items-end'>
        <h2 className='text-xl font-medium leading-tight'>
            
            {datum.title}
        </h2>
        <div  className='mt-3 flex gap-x-2'>
                <Tooltip title='Edit Post'>
                <motion.button 
                className='p-1 border cursor-pointer hover:bg-[rgba(0,0,0,0.02)]'  
                whileHover={{scale:1.1, borderRadius:'50%'}}
                whileTap={{scale:0.9}}
                onClick={()=>{
                    handleGetItem(datum)
                    handleEditPost()
                    handleOpenModal()
                }}
                >
                    <BiEdit/>
                </motion.button>
                </Tooltip>
                
                {/* <Tooltip title='Upload Post'>
                <motion.button 
                className='p-1 border cursor-pointer hover:bg-[rgba(0,0,0,0.02)]' 
                whileHover={{scale:1.1, borderRadius:'50%'}}
                whileTap={{scale:0.9}}
                onClick={()=>{
                        handleUploaded()
                        handleOpenModal()
                    }}
                >
                    <TbUpload/>
                </motion.button>
                </Tooltip> */}
                 
                 <Tooltip title='Delete Post'>
                <motion.button 
                className='p-1 border cursor-pointer hover:bg-[rgba(0,0,0,0.02)]' 
                whileHover={{scale:1.1, borderRadius:'50%'}}
                whileTap={{scale:0.9}}
                >
                    <AiOutlineDelete/>
                </motion.button>
                </Tooltip>

            </div>
        <span className='text-[10px] font-mono'>{time}</span>
        {/* {showEdit && <AdminEdit item={item} handleEdit={handleEdit}/>} */}
    </div>
  )
}

export default ShowMoreCard