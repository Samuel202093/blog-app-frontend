import React from 'react'

const CardOneCopy = () => {

  return (
    <div className=' animate-pulse mt-4 md:w-full'>
        <div className='h-fit min-w-[300px] w-[98%] mx-auto md:w-full md:h-full flex flex-col gap-y-2 p-2'>
            <div className="img-container relative">
                
                <div className='h-[400px] md:h-[400px] object-cover w-full art-img bg-[#fcfafa] border rounded-md'/>
    
            </div>

            <div className="details flex flex-col gap-y-2 lg:h-2/5">
                <p className="date h-[12px] w-[20px] text-[rgba(0,0,0,0.7)] bg-[#fcfafa]">
                </p>
                <p className="title  h-[30px] bg-[#fcfafa] w-[300px] border rounded-md">
                </p>
                <p className="content h-[50px] bg-[#fcfafa] w-[300px] border rounded-md">
                </p> 
                <a href='#' className=' h-[20px] border rounded-md bg-[#fcfafa] w-[200px]'>
                </a>
            </div>
      
        </div>
    </div>
  )
}

export default CardOneCopy