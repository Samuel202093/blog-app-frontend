import React, {useState} from 'react'
import NavLinks from './NavLinks'
import Navbar from './Navbar'
import UserSavedPostCard from './UserSavedPostCard'
import { useUserContext } from './UserContext'
import  {Loader} from './UserSavedPostCardCopy'

const UserLayout = () => {
    // Actual code to be used in production
    // const {isError,error,data,isLoading} = useUserContext()
    
    // test dummy data
    const {error, data,newInfo} = useUserContext()

    if(!newInfo && !error){
      return (
        <>
          <Navbar/>
          <div className='grid place-content-center w-[95%] m-auto  h-[80vh]'>
            <Loader/>
          </div>
        </>
      )
  } 

    if(!newInfo && error){
      return (
        <>
           <Navbar/>
           <div className='grid place-content-center w-[95%] m-auto  h-[80vh]'>
             <h1 className='animate-pulse text-[20px] text-[rgba(0,0,0,0.7)]'>404 Error-Network Issue!!!...{error}</h1>
           </div>
        </>
      )}

    if ( newInfo && newInfo.length === 0 ){
      return (
        <>
          <Navbar/>
          <div className='flex justify-center items-center h-fit'>
        <NavLinks/>
         </div>
          <div className='grid place-content-center w-[95%] m-auto  h-[80vh]'>
            <h1 className=' animate-pulse text-xl text-[rgba(0,0,0,0.7)]'>No Post Saved!!!</h1>
          </div>
       </>
      ) 
   } 
   
   

  return (
    <>
      <Navbar/>
      <div className='flex justify-center items-center h-fit'>
        <NavLinks/>
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
           { newInfo.map((item, index)=>(
              <UserSavedPostCard item={item}/>
           ))}
      </div> 
    </>
  )
}

export default UserLayout