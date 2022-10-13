import React from 'react'
import CardUser from './CardUser'

import { GiNewspaper } from 'react-icons/gi'
import AdminLayout from './AdminLayout'
// import { useAdminAuth } from '../../context/AdminContext'
import { useAdminAuth } from '../../context/AdminContext'
import AdminEdit from './AdminEdit'
import Footer from '../Footer'
import { createContext } from 'react'
import { useEditContext } from '../../App'
import { editContext } from '../../App'
import { useContext } from 'react'


const AdminDashboard = () => {


  return (
    <div className='board-container h-full w-full fixed top-0 right-0 z-[9999px] flex bg-white '>
        {/* sidebar */}
        <aside className='board-sidebar w-0 md:w-[50px] lg:w-[100px] h-full border-r flex flex-col items-center '>
          <GiNewspaper className='text-5xl pt-3'/>
          
        </aside>
        {/* main-content */}
         <main className='board-main flex-1 overflow-auto  bg-[rgba(0,0,0,0.02)]'>
           <nav className='h-12 bg-white border-b flex items-center sticky top-0 z-50 '>
              <div className='h-full w-full flex gap-x-2 justify-end px-16'>
                  <div className="profile-detail flex w-fit items-center justify-center gap-x-2">
                     <div className='h-[30px] w-[30px rounded-full border] overflow-hidden '>
                        <img src="./001.jpg" alt="" className='h-full w-full' />
                     </div>
                     <span className='text-sm text-[rgba(0,0,0,0.8)] capitalize font-medium'>
                       hello <span className='font-semibold text-base text-black'>Admin</span> 
                      </span>
                  </div>
              </div>
           </nav>
            <AdminLayout/>
            <Footer/>
         </main>
         {/* footer */}
         {/* {editPost && <AdminEdit/>} */}
        
    </div>
  )
}

export default AdminDashboard