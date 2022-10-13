import React from 'react'
import { useAppContext } from '../context/context'
import { motion } from "framer-motion"
import {GiCancel} from 'react-icons/gi'
import userCard from './AdminPage/CardUser'
import { useState } from 'react'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import newsApi from '../api/newsAPI'


 const Subscribe = () => {
     const { handleShowSubscribe } = useAppContext()

     const [showSubmit, setShowSubmit] = useState(false)
     const [submit, setSubmit] = useState(<span className='text-base'>Submit</span>)

     const [subEmail, setSubEmail] = useState('')

     const ref = useRef()

     const closeSubscribe = () => {
      setTimeout(()=>{
        handleShowSubscribe()
      },2000)
     }

     const alertNotice = (message) => {
      toast(message,{
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       })
     }

    const handleSubmit = (e) => {
      e.preventDefault()
      setShowSubmit(true)
      if(subEmail.length !== 0){
        // try {
        //   axios.post('https://loctech-blog-app.herokuapp.com/emailsubscribe', {
        //   email: subEmail
        //  });
        // } catch (error) {
        //   console.log(error)
        //   alertNotice('Network Error')
        // }
        newsApi.post('/email/subscribe', {
            email: subEmail
           }).then((response)=> {
            alertNotice('Thank You For Subscribing')
            setShowSubmit(false)
            setSubmit(<span className='text-[12px]'>Thank You!</span>)
            closeSubscribe()
           }).catch((error)=>{
            console.log(error)
            setShowSubmit(false)
            setSubmit(<span className='text-[12px]'>Try Again!</span>)
            alertNotice('Network Error')
           })
      } else {
        ref.current.focus()
        setShowSubmit(false)
        setSubmit(<span className='text-[12px]'>Try Again!</span>)
        alertNotice('Please Enter Your Email')
      }}

  return (
    <motion.div className='fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] z-[10000] bg-white rounded-lg md:w-[25rem] h-[12.5rem] border flex flex-col items-center gap-4 justify-center px-2 md:px-0' animate={{opacity:1}} initial={{opacity:0}} transition={{ duration: 0.5}}>

        <span className='absolute top-0 right-0 text-xl text-[rgba(0,0,0,0.6)] hover:text-[rgba(0,0,0,0.8)] cursor-pointer' onClick={()=>handleShowSubscribe()}><GiCancel/></span>
      
        <p className='font-medium text-lg'>Subscribe to our Newsletters</p>

        <form 
        // onSubmit={handleSubmit} 
        >
          <div className='flex gap-2'>
            <input 
            type="email" 
            placeholder='Enter your email' 
            className='border rounded-lg py-2 px-3 text-base w-[16rem] md:w-[18.75rem] font-mono text-[rgba(0,0,0,0.7)]'
            value={subEmail}
            onChange={(e)=> setSubEmail(e.target.value)}
            ref={ref}
            />
            {/* <input type="submit" value="Submit" className='border rounded-lg py-1 px-2 hover:text-white hover:bg-black transition-all outline-[rgba(0,0,0,0.5)]'
            onClick={handleSubmit}
            /> */}
             <button 
             type="submit" 
             className='border rounded-lg py-1 px-2 text-white bg-black transition-all outline-[rgba(0,0,0,0.5)]'
            //  className='w-[18.75rem] border p-2 rounded-2xl text-white bg-[rgba(0,0,0,0.8)] flex justify-center'
            onClick={handleSubmit}
             >
                {showSubmit ? <p className='loader'></p> : submit}
              </button>
          </div>
       </form>

    </motion.div>
  )
}

export default Subscribe