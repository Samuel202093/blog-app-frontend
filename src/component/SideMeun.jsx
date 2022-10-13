import React, { useContext } from 'react'
import {GrClose, GrTwitter, GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaPinterestP, FaYoutube} from 'react-icons/fa'
import { useAppContext } from '../context/context'
import { Link } from 'react-router-dom'
import { navData, categoryData, socialData } from '../datas/Navdata'
import Subscribe from './Subscribe'
import Modal from './Modal'
import { motion } from 'framer-motion'
import {useSideContext} from '../context/SideMenuContext'
import { useAuthContext } from '../context/AuthContext'
import { auth } from '../firebase/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const SideMeun = () => {
     const {user, dispatch} = useAuthContext()
    const {handleSidemeun} = useSideContext()
    const { handleShowSubscribe,handleShowSignIn, showSubscribe } = useAppContext();
    const navigate = useNavigate()
    const handleLogOut = async() => {
      try {
       await signOut(auth)
       dispatch({ type:'LOGOUT'})
      } catch (error) {
       console.log(error)
      }
   }
   
   const showDashboard = () => {
    navigate('/dashboard')  
 }
  return (
    <>
      <motion.div
       className="ham-menu fixed right-0 top-0 w-3/5 lg:w-2/5 h-full border px-3 z-[100000] bg-white overflow-auto"
       initial={{x:1000, opacity:0}}
       animate={{x:0, opacity:1 }}
       transition={{type: 'fade', duration:0.5, delay:0.05}}
       >
       <div className='flex justify-between items-center mb-5 sticky top-0 bg-white py-2'> 
           <h2 className='text-1.5xl font-medium'>Loctech<span className='font-bold'>News</span></h2>
           <button className='border px-1 py-1' onClick={()=> handleSidemeun()}><GrClose/></button>
       </div>
       <ul className="ham-meun-list fonts-mono">
        {navData.map((item)=>{
            return <li key={item.id} className={item.className}><Link to={item.path}>{item.name}</Link></li>
        })}
           <li className='pb-6 text-2xl font-normal'>
               {/* <a href="" className='block border-b pb-2'>Categories</a>  */}
               {user ? <ul className='text-xs font-mono'>
                  <li className='pt-4 pb-2 font-bold'><span className='inline-block px-2 py-1 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-[rgba(0,0,0,0.5)] cursor-pointer ' onClick={()=>{ 
                    handleSidemeun();
                    handleLogOut()
                    // handleShowSignIn();
                    }}>LOG OUT</span></li>
                  <li className='pb-2 mb-1 font-bold '><span className='inline-block px-2 py-1 border border-[rgba(0,0,0,0.5)] hover:bg-black hover:text-white hover:border-none cursor-pointer' onClick={()=>{
                    handleSidemeun();
                    showDashboard()
                    // handleShowSubscribe();
                  }}>DASHBOARD</span></li>
                   {showSubscribe && <Modal/>} 
                   {showSubscribe && <Subscribe/>} 
                   {categoryData.map((item)=>{
                      return <li key={item.id} className={item.className} onClick={()=> handleSidemeun()}><Link to={item.path}>{item.name}</Link></li>
                   })}
               </ul>
               :
                <ul className='text-xs font-mono'>
                  <li className='pt-4 pb-2 font-bold'><span className='inline-block px-2 py-1 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-[rgba(0,0,0,0.5)] cursor-pointer ' onClick={()=>{ 
                    handleSidemeun();
                    handleShowSignIn();
                    }}>SIGN IN</span></li>
                  <li className='pb-2 mb-1 font-bold '><span className='inline-block px-2 py-1 border border-[rgba(0,0,0,0.5)] hover:bg-black hover:text-white hover:border-none cursor-pointer' onClick={()=>{
                    handleSidemeun();
                    handleShowSubscribe();
                  }}>SUBSCRIBE</span></li>
                   {showSubscribe && <Modal/>} 
                   {showSubscribe && <Subscribe/>} 
                   {categoryData.map((item)=>{
                      return <li key={item.id} className={item.className} onClick={()=> handleSidemeun()}><Link to={item.path}>{item.name}</Link></li>
                   })}
               </ul> }
               </li>
            <li className=' pt-1 border-t sticky bottom-0 bg-white py-2'>
                <p className='font-meduim text-[12px] mb-2'>Follow us on social media</p>
               <div className='flex justify-between items-center'>
                {socialData.map((item)=>{
                  return <a href={item.href} className={item.className} key={item.id}>{item.icon}</a>
                })}
               </div>
            </li>
       </ul>
      </motion.div>
    </>
  )
}

export default SideMeun