import React, {useState} from 'react'


  const CardTwoCopy = () => {

  
  return (
    <div className='lg:h-fit border-t border-l border-dashed lg:border-none animate-pulse'>
    <div className='h-fit min-w-[300px] flex flex-col gap-y-2 p-2'>
        <div className='relative flex items-center justify-between'>
           <span className='border h-[15px] w-[50px] font-semibold bg-[#fcfafa] rounded-md'>
           </span>
           <span className='w-[40px] h-[15px] bg-[#fcfafa] border rounded-md'>

           </span>
        </div>

        <div className="details flex flex-col gap-y-2">
            <p className="title h-[80px] w-full border bg-[#fcfafa]">
             
            </p>
            <p className="content bg-[#fcfafa] border w-full h-[70px] rounded-md">
            
            </p>
        </div>

    </div>
</div>
  )
}

export default CardTwoCopy