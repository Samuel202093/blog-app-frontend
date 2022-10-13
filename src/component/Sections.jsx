import React from 'react'

const Sections = ({title}) => {
  return (
    <div className='w-[97%] mx-auto my-2 mb-16 flex justify-center border-b lg:hidden'>
        <p className='bg-white text-black p-2 -mb-5 w-fit font-mono border'>{title}</p>
    </div>
  )
}

export default Sections