import React from 'react'
import {GiHamburgerMenu, GiNewspaper} from 'react-icons/gi'
import {BiArrowBack,BiExit} from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import {useUserContext } from './UserContext'
import Sections from '../Sections'
import { auth } from '../../firebase/Firebase'
import { signOut } from 'firebase/auth'
import { useAuthContext } from '../../context/AuthContext'

const SideMeun = ({showRightMenu, handleShowRightMenu}) => {
    const {dispatch} = useAuthContext()
    const { data,filteredData, filterAll  } = useUserContext()
    
    const handleLogOut = async() => {
        try {
         await signOut(auth)
         dispatch({ type:'LOGOUT'})
        } catch (error) {
         console.log(error)
        }
     }
    const dataCategories = data.map((datum)=> datum.category)
    const sections =['world','politics','business',"opinion",'tech','science','sports','arts','books','style','food','travel','magazine','cryptocurrency']
    
    const savedsections = ()=> {   // This function compares the two array and checks the element of dataCategory that is in the section array and applies a different class to them!..this is done so that we can identify the categories the user has saved data from in the UI
  
        const datapush = [<button className='px-3 py-2 border  h-fit text-sm text-black bg-white w-[98%] ml-1 mb-1 block uppercase font-mono font-medium leading-6 active:text-white active:bg-black' onClick={()=> filterAll()}>All</button>]  
        for (let i = 0; i < sections.length; i++) {
            if(dataCategories.includes(sections[i]))
                
                datapush.push(<button className='px-2 py-2 border h-fit text-sm text-black bg-white w-[98%] mr-2 ml-1 mb-1 block  uppercase font-mono font-medium leading-6 active:text-white active:bg-black' onClick={()=> filteredData(sections[i],data)}>{sections[i]}</button>)    
          
        }
      //   return datapush;
      return datapush.length > 1 ? datapush : <div className='text-[10px]'> No Saved Post</div>
    }

    
  return (
    <div className='fixed h-full w-full top-0 right-0 bg-[rgba(0,0,0,0.5)] z-[99999] flex justify-end backdrop-blur-[3px]'>
       <div className='bg-white text-black w-[60%] h-full py-4 px-2 shadow-lg border-l border-[rgba(0,0,0,0.6)] relative flex flex-col'>
        {/* Top-logo and backbtn */}
        <div className='flex justify-between items-center h-fit'>
           <h2 className='text-[18px] font-medium text-slate-700'>Loctech<span className='font-bold'>News</span></h2>
           <span className='text-lg border border-slate-600 cursor-pointer' onClick={handleShowRightMenu}><GrClose/></span>
        </div>

        <div className='flex-1 overflow-x-auto mt-[30px]'>
           {
            
             savedsections()
           }
        </div>

        <div className='h-fit border border-slate-800'>
           <span className='flex justify-center items-center rounded-sm py-2 gap-2 hover:text-white hover:bg-black ' onClick={handleLogOut}><BiExit/>Log Out</span>
        </div>
       </div>
    </div>
  )
}

export default SideMeun

