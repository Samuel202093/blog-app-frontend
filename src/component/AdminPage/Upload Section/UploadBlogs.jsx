import React from 'react'
// import SaveBlogCard from './SaveBlogCard'
import {BiShow} from 'react-icons/bi'
import { motion } from 'framer-motion'
import ShowMore from '../ShowMore'
import { useState } from 'react'
// import { db } from '../../../firebase/Firebase'
import { db } from '../../../firebase/Firebase'

import UploadBlogCard from './UploadBlogCard'

import { collection, getDocs,deleteDoc,doc, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react'


const UploadBlogs = () => {
    // Get data from the database---mongo or firebase
    // firebase

    const [data, setData] = useState([])

    const usersPostRef = collection(db, "UploadPost")

    const getSaveData = () => {
        const subscribe = onSnapshot(usersPostRef, (snapShot) => {
            let result = []
            snapShot.docs.forEach((doc) => {
                result.push({id:doc.id, ...doc.data()})
            });
            setData(result)
        }, (error) => {
            console.log(error)
        });

        return ()=>{
            subscribe()
        }
    }

    useEffect(()=>{
      getSaveData()
    },[])
    // const getSaveData = () => {
        
    // }

    const shownData = data.slice(0,5)

    const simulayout = [1,2,3,4,5,6]
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(!showModal)
    }
  return (
    <div className='p-4'>
        <div className='h-full flex flex-col gap-y-4 border bg-white rounded-sm overflow-y-auto relative'>
           <h2 className='text-lg font-medium mt-2 p-2 border-b bg-white sticky top-0 z-10'>Posted Blogs</h2>
           {
            data.length > 0 ? shownData.map((datum, index)=>{
                return (
                    <UploadBlogCard key={index} datum={datum}/>  
                )
            }) : 
            <h2 className='text-xl p-5 font-medium  text-[rgba(0,0,0,0.8)] '>
                No Post!!!
            </h2>
           }
          {data.length > 3 && <div className=' z-[99] flex justify-end p-1'>
             <motion.button 
             className=' w-fit z-[99] bg-white border rounded-sm p-2 mr-2 flex gap-x-1 justify-center items-center'
             whileTap={{scale:0.9, boxShadow:" rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset"}}
             whileHover={{boxShadow:'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'}}
             onClick={()=> handleOpenModal()}
             >
                <BiShow/>
                Show All
             </motion.button>  
           </div>}
          
        </div>
        {showModal && <ShowMore handleOpenModal={handleOpenModal} data={data}/>}

    </div>
  )
}

// export default SaveBlogs

export default UploadBlogs