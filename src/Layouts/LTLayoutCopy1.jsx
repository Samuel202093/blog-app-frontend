import React from 'react'
import CardOne from '../component/CardOne'
import CardTwo from '../component/CardTwo'
import CardThree from '../component/CardThree'
import Header from '../component/Header'
import Sections from '../component/Sections'
import { useAppContext } from '../context/context'
import { useEffect, useState } from 'react'
import Pagination from '../component/Pagination/Pagination'
import Slider from '../component/Slider'
import axios from 'axios'
import CardOneCopy from '../component/CardOneCopy'
import PaginationC from '../component/Pagination/PaginationCopy'
import PaginationControlled from '../component/Pagination/MUI-Pagination'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { db } from '../firebase/Firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const LTLayout1 = ({url, section}) => {
  const [displaySection, setDisplaySection] = useState(true)
 
  const [postPerPage, setPostPerPage] = useState(3)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [post, setPost] = useState([])
  const {size} = useAppContext()

  useEffect(()=>{
    if (size >= 800) {
      setDisplaySection(false)
    } else {
      setDisplaySection(true)
    }
  },[size])

 
  const queryClient = useQueryClient()

// Getting data for the last section of the website...the bloggers section
  const [blogs, setBlogs] = useState([])



  const getSaveData = async()=>{
    await axios.get('https://loctech-blog-app.herokuapp.com/api/blogs').then((response)=>{
      console.log(response.data);
      setBlogs(response.data)
     }).catch((error)=>{
      console.log(error);
     })
  }

  useEffect(()=>{
    getSaveData()
  }, [])

  // Getting data for the first two sections...the news sections!
  
  const {error, isLoading, data} = useQuery(['posts'], ()=>{
    return axios.get(url).then(res => res.data.articles)
  })

  if(isLoading){
    return(
      <div className='h-[100vh] w-full flex justify-center items-center text-3xl text-[rgba(0,0,0,0.8)] animate-pulse'>Loading...</div>
    )
  }

  if(error){
    return(
      <div className='h-[100vh] w-full flex justify-center items-center text-3xl text-[rgba(0,0,0,0.8)] animate-pulse'>{error.message}</div>
    )
  }

  // Pagination 
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 min-h-[80vh]  gap-4 mx-auto w-[99%]'>

       <div className='border-r px-1 col-span-1 order-1 h-fit'>
         <Slider data={data}/>
       </div>

       <div className='order-2 border-r'>
          <Sections title={'Lastest Headlines'}/>

          <div className=' px-1 flex flex-col justify-between items-center order-2 pt-2 h-fit md:h-[80vh]'>
            {currentPosts.map((item,index) => (
              <CardTwo key={index} item={item} data={data} postSection={section}/>
            ))}
          </div>
           {/* <PaginationC postperpage={postPerPage} totalpost={data.length} paginate={paginate}/> */}
          <PaginationControlled paginate={paginate}/>
       </div> 
      

       <div className='order-3 h-fit md:h-[100vh] lg:h-[80vh] overflow-y-auto'>
            <Sections title={'Trending News'}/>

          <div className='border-r px-1 grid grid-cols-1 justify-between order-3 col-span-1 md:grid-cols-2 gap-4 lg:grid-cols-1 '>
            {blogs.map((items, index)=>(
              <CardThree key={index} item={items} blog={blogs}/>
            ))}
          </div>
       </div>
       
    </div>
  )
}


export default LTLayout1