import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {IoPersonOutline} from 'react-icons/io5'
import {GiHamburgerMenu, GiNewspaper} from 'react-icons/gi'
import {BiArrowBack,BiExit} from 'react-icons/bi'
import {MdOutlineExitToApp} from 'react-icons/md'
// import {GiHamburgerMenu} from 'react-icons/gi'
import { useAppContext } from '../../context/context'
import { useUserContext } from './UserContext'
import SideMeun from './SideMeun'
import { useDNcontext } from '../../context/DashNavContext'
import { useLocation,useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/Firebase'
import { signOut } from 'firebase/auth'
import { useAuthContext } from '../../context/AuthContext'
import newsApi from '../../api/newsAPI'



const Navbar = () => {

    const {setnewInfo} = useUserContext();

    const {handleHide}  = useDNcontext();

    const {dispatch} = useAuthContext();

    const location = useLocation()

    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const handleGoback = () => {
      handleHide()
      navigate(from, {replace: true})
    }

    const [hamburgerMenu, setHamburgerMeun] = useState(true)
    
    const [showRightMenu, setShowRightMenu] = useState(false)

    const [hidSignin, setHidSigin] = useState(false)

    const searchRef = useRef()

    const handleSearch = () => {
      newsApi.get(`/user/search/${searchRef.current.value}`)
      .then((response)=>{
          console.log(response)
      }).catch((error)=>{
         console.log(error)
      })
    };

   const handleTitle = ()=> {
    setHidSigin(!hidSignin)
   };

   const handleShowRightMenu = ()=>{
    setShowRightMenu(!showRightMenu)
   };

   const handleLogOut = async() => {
    try {
     await signOut(auth)
     dispatch({ type:'LOGOUT'})
    } catch (error) {
     console.log(error)
    }
  }
 

  return (
   
    <div className='navbar h-14  grid grid-cols-12 w-[99%] mx-auto border-b bg-white'>

{/* Right Section of the navbar */}
     <div className='h-full  col-span-1 md:col-span-2 flex gap-2 items-center '> 
         <span className='backout text-2xl mr-4 pr-1 border-r relative' 
         onClick={()=> {
            handleGoback()
         }}>
          <span className='text-text text-[10px] border hidden absolute w-[98px]  bg-black text-white left-12 top-0 justify-center'>Back To NewsFeed</span>
           <BiArrowBack/>
         </span>
      
     </div>

{/* Middle section of the navbar (APP NAME) */}
     <div className={`${hidSignin && 'invisible'} h-full  col-span-6 md:col-span-7 lg:col-span-8 flex justify-center items-center md:visible`}> 
       <h2 className='hidden md:block font-bold text-2xl'>
        <span className='font-semibold'>Loctect</span>
        News
       </h2>
       <span className='text-xl font-medium md:hidden'>Saved Post</span>
     </div>

{/* Right Section of the navbar */}
     <div className='h-full flex col-span-5 justify-end md:col-span-3 lg:col-span-2 items-center md:justify-end lg:gap-x-2 search-log relative'> 
         <span className=' pr-2 h-min cursor-pointer flex items-center p-1 pl-2 bg-white rounded-sm border search mx-4 md:mx-4 absolute top-3 right-[40px] md:right-[100px] z-[1000px]' onMouseEnter={()=> setHidSigin(true)} onMouseLeave={()=> setHidSigin(false)}>
          <input type="text" name="" id="" className='border-none outline-none focus-visible:outline-none text-[rgba(0,0,0,0.7)] w-0 transition input-text' placeholder='Enter search'
          ref={searchRef}
          />
              <AiOutlineSearch onClick={()=> handleSearch() }/>
          </span>
         <button className='px-3 py-1.5 mr-2 text-sm bg-white md:bg-black md:text-white flex items-center justify-between md:border-2 border-[rgba(0,0,0,0.8)] relative'>
              <span className='hidden md:flex md:items-center'>
                  <IoPersonOutline className='mr-2'/>
                  Log Out
              </span>

              <span className='text-text2 text-[10px] border hidden absolute w-[98px] md:invisible bg-black text-white left-0 top-0 justify-center'>Back To NewsFeed</span>

              <GiHamburgerMenu className='text-2xl btn-out md:hidden' onClick={()=>handleShowRightMenu()}/>

        </button>
       
      </div>
      { showRightMenu && <SideMeun showRightMenu={showRightMenu} handleShowRightMenu={handleShowRightMenu}/>}
    </div>
  )
}

export default Navbar