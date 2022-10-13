import React from 'react'
import { useState } from 'react'

const Pagination = ({postperpage, totalpost, paginate}) => {
    const number = Math.ceil(totalpost / postperpage)

    const [counter, setCounter]  = useState(1)

    const handleAddCount = ()=>{
        if (counter >= number) {
            setCounter(number)
        } else {
        setCounter(counter => counter + 1)
        }

    }

    const handleMinusCount = ()=>{
        if (counter <= 1) {
           setCounter(1) 
        } else {
        setCounter(counter => counter - 1)

        }

    }

    // console.log(counter);

    paginate(counter)
  return (
    <div className='flex items-center gap-3'>
       <button onClick={()=>{handleMinusCount()}} className='p-2 bg-white rounded-sm text-black border text-[12px]'>up</button>
       <button onClick={()=>{handleAddCount()}} className='p-2 bg-white rounded-sm text-black border text-[12px]'>down</button>
    </div>
  )
}

export default Pagination