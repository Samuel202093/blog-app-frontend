import React from 'react'
import { useState, useEffect } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {IoPersonOutline} from 'react-icons/io5'
import {GiHamburgerMenu, GiNewspaper} from 'react-icons/gi'
import {Link,Navigate,Outlet, useNavigate, useLocation} from 'react-router-dom'
import { useAppContext } from '../context/context'
import Subscribe from './Subscribe'
import Modal from './Modal'
import SideMeun from './SideMeun'
import { motion } from "framer-motion"
import SignIn from './SignIn'
import { useSideContext} from '../context/SideMenuContext'
import { useDNcontext } from '../context/DashNavContext'
import { useAuthContext } from '../context/AuthContext'
import { auth } from '../firebase/Firebase'
import { signOut } from 'firebase/auth'
import SignUp from './SignUp'

const Navbar = () => {

  const {handleHide}  = useDNcontext()

  const location = useLocation()

  const {user, dispatch} = useAuthContext()

  const {sideMeun, handleSidemeun} = useSideContext()

  const handleLogOut = async() => {
     try {
      await signOut(auth)
      dispatch({ type:'LOGOUT'})
     } catch (error) {
      console.log(error)
     }
  }

    const { size, handleShowSubscribe, handleShowSignIn, showSignIn,showSubscribe, signUp} = useAppContext()


    const [hamburgerMenu, setHamburgerMeun] = useState(true)
    
    const [showleftMenu, setShowleftMenu] = useState(true)

    const [hidSignin, setHidSigin] = useState(false)


    const navigate = useNavigate()

   const showDashboard = () => {
      handleHide()
      navigate('/dashboard')
      
   }

 


  useEffect (()=> {
    if (size <= 900 ) {
       setHidSigin(true)
    } else {
       setHidSigin(false)

    }

    if(size <=700){
         setHamburgerMeun(false)
        setShowleftMenu(false)
    } else {
        setShowleftMenu(true)
       setHamburgerMeun(true)

    }
}, [size])

  return (
   
    <div className='navbar h-14  grid grid-cols-12 w-[99%] mx-auto border-b bg-white sticky top-0 z-40'>

     <div className='h-full  col-span-3 md:col-span-2 flex gap-2 items-center '> 
         <span className='logo text-3xl mr-4 pr-4 border-r'>
           <GiNewspaper/>
         </span>
        { showleftMenu && <>
           <span className=' pr-2 h-min cursor-pointer'>
              <AiOutlineSearch/>
           </span>
           <span className=' pr-2 h-min cursor-pointer'>
              <IoMdNotificationsOutline/>
           </span> 
           </> 
        }
     </div>

     <div className='h-full col-span-6 md:col-span-7 flex justify-center items-center'> 
       <h2 className='font-bold text-2xl'>
        <span className='font-semibold'>Loctect</span>
        News
       </h2>
     </div>

{/* conditional rending is happening here ... if the user is logged in then the 'LOG-OUT' and 'DASHBOARD' icon will show if not it will show 'SIGN IN' and 'SUBSCRIBE'..Note! The user is gotten from the authcontext */}
    { user ? <div className='h-full flex col-span-3 md:col-span-3 justify-end items-center'> 
       {hamburgerMenu ? <> <motion.button 
                              className={`${hidSignin && 'invisible'}  px-3 py-1.5 mr-2 text-sm bg-black text-white flex items-center justify-between border-2 border-[rgba(0,0,0,0.8)]`}
                              onClick={()=> handleLogOut()}
                              whileHover={{ scale: 1.05, color:'white', borderRadius:20}}
                              transition={{type:'spring', stiffness:150, duration: 0.2}}
                              >
            <IoPersonOutline className='mr-2'/>
            Log Out   
        </motion.button>
        <motion.button 
         className='px-3 py-1.5 text-sm text-black ml-2 items-center justify-between border-2 border-[rgba(0,0,0,0.5)]' 
         whileHover={{ scale: 1.05, color:'black', borderRadius:20}}
         transition={{type:'spring', stiffness:150, duration: 0.2}}
         onClick={()=>{
          showDashboard()
          console.log(1);
          }} >
           Dashboard
        </motion.button> 
        </> : <p className=' pr-2 h-min border-r w-full flex justify-end' onClick={()=> handleSidemeun()}>
              <GiHamburgerMenu/>
           </p> } 
      </div>
       :
      <div className='h-full flex col-span-3 md:col-span-3 justify-end items-center'> 
       {hamburgerMenu ? <> <motion.button 
                              className={`${hidSignin && 'invisible'}  px-3 py-1.5 mr-2 text-sm bg-black text-white flex items-center justify-between border-2 border-[rgba(0,0,0,0.8)]`}
                              onClick={()=> handleShowSignIn()}
                              whileHover={{ scale: 1.05, color:'white', borderRadius:20}}
                              transition={{type:'spring', stiffness:150, duration: 0.2}}
                              >
            <IoPersonOutline className='mr-2'/>
            Sign In   
        </motion.button>
        <motion.button 
         className='px-3 py-1.5 text-sm text-black ml-2 items-center justify-between border-2 border-[rgba(0,0,0,0.5)]' 
         whileHover={{ scale: 1.05, color:'black', borderRadius:20}}
         transition={{type:'spring', stiffness:150, duration: 0.2}}
         onClick={()=>{
          handleShowSubscribe()
          console.log(1);
          }} >
            Subscribe
        </motion.button> 
        </> : <p className=' pr-2 h-min border-r w-full flex justify-end' onClick={()=> handleSidemeun()}>
              <GiHamburgerMenu/>
           </p> } 
      </div> }
      {showSubscribe && <Modal/>}
      {showSubscribe && <Subscribe/>}
      {sideMeun && <Modal/>}
      {sideMeun && <SideMeun/>}
      {showSignIn && <SignIn/>}
      {signUp && <SignUp/>}
    </div>
  )
}

export default Navbar