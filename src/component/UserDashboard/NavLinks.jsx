import React, { useState } from 'react'
import { useEffect } from 'react';
import { useUserContext } from './UserContext'

const NavLinks = () => {
    const {data, setData, mutate, filteredData, filterAll} = useUserContext();

    const checkdata = data.length === 0 //replace dummydata with data coming from the database

    const getLinks = data.map((item)=> item.category) // when we start fetching data from the database we would replace the dummydata with data coming from the usercontext page above in line5.
     console.log(getLinks);
    const uniqueLinks = [...new Set(getLinks)] // This is done to remove duplicates in the getLinks array
    console.log(uniqueLinks);
    

  return (
    <>
  { checkdata? <div className='hidden'></div> : <div className={`${ uniqueLinks.length < 12 ? 'md:flex justify-center items-center' : 'md:grid lg:grid-cols-12' } gap-4 py-2 hidden lg:w-[95%] lg:m-auto`} >
        {uniqueLinks.map((link,index)=>(
            <span key={index} className='cursor-pointer px-2 py-1 border rounded-sm capitalize text-[12px] flex justify-center transition-all hover:text-white hover:bg-black' onClick={()=>filteredData(link, data)} >{link}</span>
        ))}
            <span className='cursor-pointer px-2 py-1 border rounded-sm capitalize text-[12px] flex justify-center transition-all hover:text-white hover:bg-black' onClick={()=>filterAll()}>All</span>

    </div>}
    </>
  )
}

export default NavLinks