import React from 'react'
import SaveBlogCard from './SaveBlogCard'
import {BiShow} from 'react-icons/bi'
import { motion } from 'framer-motion'
import ShowMore from './ShowMore'
import {BiChevronsDown} from 'react-icons/bi'
import { useState } from 'react'
import { db } from '../../firebase/Firebase'
import { collection, getDocs,deleteDoc,doc, onSnapshot } from 'firebase/firestore';
import newsApi from '../../api/newsAPI'
import { useQuery } from '@tanstack/react-query'

const fetchData = async () => {
    const response = await fetch('https://loctech-blog-app.herokuapp.com/api/blogs')
    const data = await response.json()
    return data;
    // console.log(result)
 }

const axiosData = async() => {
    const {data} =  await newsApi.get('/api/blogs')
    console.log(data);
}


const SaveBlogs = () => {
    // Get data from the database---mongo or firebase
    // firebase
    
    const [data1, setData] = useState([])

    const usersPostRef = collection(db, "savedPost")

    const [intervalms, setINtervalms] = useState(1000)

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(!showModal)
    }



    // const getSaveData = () => {
    //     const subscribe = onSnapshot(usersPostRef, (snapShot) => {
    //         let result = []
    //         snapShot.docs.forEach((doc) => {
    //             result.push({id:doc.id, ...doc.data()})
    //         });
    //         setData(result)
    //     }, (error) => {
    //         console.log(error)
    //     });

    //     return ()=>{
    //         subscribe()
    //     }
    // }

     
   
    const { isLoading, isError, data } = useQuery(['post'], () =>
    fetch('https://loctech-blog-app.herokuapp.com/api/blogs').then(res =>
      res.json()
    ), {
        refetchInterval: intervalms,
    },
  )

     console.log(data);

    
    

    const getSaveData = async() => {
       await newsApi.get('/api/blogs').then((response)=>{
        setData(response.data)
        console.log(response);
       }).catch((error)=>{
        console.log(error);
       })
    }



    // useEffect(()=>{
    // //    getSaveData()
    // },[])
  



    if(isLoading){
        return (
            <h2 className='text-xl p-5 font-medium  text-[rgba(0,0,0,0.8)] '>
            Loading
            </h2>
        )
    }

    if(isError){
        return (
            <h2 className='text-xl p-5 font-medium  text-[rgba(0,0,0,0.8)] '>
            Error!!
            </h2>
        )
    }

    
    const shownData = data.slice(0,5)

   

  return (
    <div className='p-4'>
        <div className='h-full flex flex-col gap-y-4 border bg-red rounded-sm overflow-y-auto relative'>
           <h2 className='text-lg font-medium mt-2 p-2 border-b bg-white sticky top-0 z-10'>Saved Post</h2>
           {
            data.length > 0 ? shownData.map((datum, index)=>{
                return (
                    <SaveBlogCard key={index} data={datum}/>  
                )
            }) : 
            <h2 className='text-xl p-5 font-medium  text-[rgba(0,0,0,0.8)] '>
                No Post Saved!!!
            </h2>
           }
           { data.length >= 2 ?
          <span className='animate-bounce p-2 border border-black rounded-full sticky bottom-1 w-fit bg-white text-xl' ><BiChevronsDown/></span>
          : null
          }
          { data.length > 3 && <div className=' z-[99] flex justify-end p-1'>
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
           {/* <button className='sticky w-fit bottom-2 right-2 z-[99] bg-white border p-2'><BiShow/></button> */}
           {/* {showModal && <ShowMore handleOpenModal={handleOpenModal}/>} */}
        </div>
        {showModal && <ShowMore handleOpenModal={handleOpenModal} data={data}/>}

        {/* { data.length >= 2 ?
          <span className='animate-bounce p-2 border border-black rounded-full sticky bottom-1 w-fit bg-red text-xl' ><BiChevronsDown/></span>
          : null
          } */}

    </div>
  )
}

export default SaveBlogs