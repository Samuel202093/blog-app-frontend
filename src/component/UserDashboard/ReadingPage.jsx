import React, { useCallback, useState } from 'react'
import {motion} from 'framer-motion'
import { useAppContext } from '../../context/context'
import {BsArrowLeft} from 'react-icons/bs'
import {GrClose, GrTwitter, GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaPinterestP, FaYoutube} from 'react-icons/fa'


const ReadingPaged = ({handleReadTab, item}) => {
    const {handleDateDisplay, handleReadingPage} = useAppContext()
    const {description, title, urlToImage } = item

    // logic for the most read post!..how to display or read them!
    // create a useState that stores the item as a state  variable and it's updater function will set the variable to the content of the most read post! using an onClick event listener

  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 0.3}} className=' px-5  pt-10 bg-white fixed top-0 right-0 z-[9999999] overflow-scroll h-[100vh] '>

        <span className='absolute top-0 left-0 p-1 mx-3 text-2xl pt-2' onClick={()=> handleReadTab()}><BsArrowLeft/></span>

        <div className=' news-sect flex  h-fit items-start flex-col  gap-y-3 relative col-span-1 md:col-span-2 w-[90%] md:w-[80%] lg:w-[60%] mx-auto'>
           
           <div className='w-full  h-[300px] md:h-[500px]'>
             <img src={urlToImage} alt="" className='h-full w-full object-cover' />
           </div>

           <div className='content w-full h-fit flex flex-col gap-2'>
                <p className="date text-[12px] text-[rgba(0,0,0,0.7)] font-meduim">
                  {handleDateDisplay()}
                </p>
                <p className="title text-2xl font-semibold leading-tight text-justify">
                   {title} 
                   {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit rerum qui itaque, assumenda quae? */}
                </p>
                <p className="content text-base text-[rgba(0,0,0,0.7)] font-medium text-justify">
                  {description}
                <br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis hic placeat repellendus commodi molestiae temporibus vel fugiat, corrupti excepturi reprehenderit beatae. Voluptatum amet mollitia saepe iste. Cumque, et deserunt aspernatur expedita repellendus dolor ipsa officia incidunt praesentium, perspiciatis temporibus sint veniam excepturi a placeat provident unde facere, dolorem exercitationem ipsum suscipit amet laudantium. Odit atque reiciendis, animi similique cumque perferendis nihil nostrum ab modi libero voluptatibus earum quia tenetur sint fuga in rem, ipsam ducimus aspernatur. Voluptatum reprehenderit sequi quibusdam numquam, laborum commodi eligendi voluptatibus labore, placeat ducimus soluta aperiam autem delectus consequatur optio harum. Dolor laudantium eius amet!
                </p> 
                <div className=' pt-1 border-t md:border-0 bg-white py-2 my-4'>
                <p className='font-meduim text-[0.875rem] mt-2 mb-2 font-semibold'>Share this article</p>
               <div className='flex justify-between items-center gap-2 w-fit'>
                {/* {socialData.map((item)=>{
                  return <a href={item.href} className={item.className} key={item.id}>{item.icon}</a>
                })} */}
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)] facebook'><FaFacebookF/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)] twitter'><GrTwitter/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)] instagram'><GrInstagram/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)] pinterest'><FaPinterestP/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)] youtube'><FaYoutube/></a>
               </div>
            </div>
           </div>
        </div>

       

        
        

    </motion.div>
  )
}

export default ReadingPaged