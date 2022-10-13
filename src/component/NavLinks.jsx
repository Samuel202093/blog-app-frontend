import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { useAppContext } from '../context/context'
import { useSideContext } from '../context/SideMenuContext'

const NavLinks = () => {
    const { handleSidemeun} = useSideContext()
    const {size, handleSection} = useAppContext()

    const [nListitem, setNListitem] = useState(true)

    const [moreMenu, setMoreMenu] = useState(true)

    useEffect(()=>{
      size <= 800 ? setNListitem(false) : setNListitem(true)
      size <= 600 ? setMoreMenu(false) : setMoreMenu(true)
    },[size])

    const linkItems =['world','politics','business',"opinion",'tech','science','sports','arts','books','style','food','travel','magazine','cryptocurrency'] 

    const todayDate = new Date()
    const days = ['Sunday','Monday','Tuesday','Wed','Thursday','Friday','Saturday']
    const year = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const displayList = linkItems.map((item,index) => (
      <span key={index} className='capitalize text-[rgba(0,0,0,0.5)] hover:text-black text-[12px] md:text-sm hover:text-[15px] transition-all cursor-pointer' onClick={()=>handleSection(item)}>
        <Link to={`/${item}`} >{item}</Link>
      </span>
   ))

   const list_list = displayList.slice(0,6)

  return (
    <div className='h-[8vh] hidden md:grid grid-cols-12 w-[99%] mx-auto lg:border-b sticky top-14 bg-white z-30 '>

       <div className='time-date flex flex-col justify-center items-start col-span-2 lg:col-span-1 border-r mr-1 border-b lg:border-b-0'>
          <span className='day font-semibold capitalize text-[12px] sm:text-sm '>{days[todayDate.getDay()]}</span>
          <span className='full-date text-[rgba(0,0,0,0.6)] text-[10px] sm:text-[12px] font-medium'>{`${todayDate.getDate()} ${year[todayDate.getMonth()]}, ${todayDate.getFullYear()} `}</span>
       </div>

       <div className={`nav-links col-span-10 h-full sm:col-span-9 lg:col-span-10 flex gap-6 justify-center items-center overflow-x-auto`}>
         { nListitem ? displayList : (moreMenu) ?  displayList.slice(0,8) : list_list }
       </div>

        <div className='hidden sm:flex justify-end col-span-1'>
            <div className='blackbox h-full w-[45px] bg-black flex justify-center items-center text-white cursor-pointer '>
            <FiMoreHorizontal onClick={()=> handleSidemeun()}/>
             </div>
        </div>
       
    </div>
  )
}

export default NavLinks