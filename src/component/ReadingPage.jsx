import React, { useCallback, useState } from 'react'
import {motion} from 'framer-motion'
import { useAppContext } from '../context/context'
import {BsArrowLeft} from 'react-icons/bs'
import { socialData } from '../datas/Navdata'
import {GrClose, GrTwitter, GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaPinterestP, FaYoutube} from 'react-icons/fa'
import NextRead from './NextRead'

const ReadingPage = ({handleReadTab, item, blog, data}) => {
    const {handleDateDisplay, handleReadingPage} = useAppContext()
    const {description, title, urlToImage } = item

    console.log(data)

    // For reading the most read articles.
    const [input, setInput] = useState(item)

    const choseread = (post) => {
      console.log(post);
      const posts = data.filter((datum)=> datum.title === post.title)
      console.log(posts[0])
      setInput(posts[0])
    }

    // logic for the most read post!..how to display or read them!
    // create a useState that stores the item as a state  variable and it's updater function will set the variable to the content of the most read post! using an onClick event listener

  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 0.3}} className=' px-5  pt-10 bg-white fixed top-0 right-0 z-[9999999] overflow-scroll h-[100vh] md:grid md:grid-cols-3 md:gap-x-6 xl:px-[6.25rem]'>

        <span className='absolute top-0 left-0 p-1 mx-3 text-2xl pt-2' onClick={()=> handleReadTab()}><BsArrowLeft/></span>

        <div className=' news-sect flex w-full h-fit items-start flex-col  gap-y-3 relative col-span-1 md:col-span-2'>
           
           <div className='w-full  h-[300px] md:h-[500px]'>
             <img 
             src={input.urlToImage} 
             alt="" className='h-full w-full object-cover' />
           </div>

           <div className='content w-full h-fit flex flex-col gap-2'>
                <p className="date text-[12px] text-[rgba(0,0,0,0.7)] font-meduim">
                  {handleDateDisplay()}
                </p>
                <p className="title text-2xl font-semibold leading-tight text-justify">
                   {input.title} 
                   {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit rerum qui itaque, assumenda quae? */}
                </p>
                <p className="content text-base text-[rgba(0,0,0,0.7)] font-medium text-justify">
                  {input.description}
             
                </p> 
           </div>
        </div>

        <div className='Most-Read flex flex-col md:block lg:fixed lg:top-5 lg:right-0 lg:w-[32%] lg:pr-[6.25rem]'>
           <header className='py-3 border-b border-[rgba(0,0,0,0.8)] order-1'>
            <h2 className='text-2xl font-extrabold capitalize'>Most Read</h2>
           </header>
            <div className='order-2 h-[60vh] overflow-y-auto'>
                { blog.map((post,index) => (
                     <article  key={index} className='py-3 border-b border-[rgba(0,0,0,0.8)]'>
                        <span className='text-[12px] border rounded-md p-1 mb-2 inline-block'>{post.section}</span>
                        <p 
                        className='font-semibold text-base cursor-pointer'
                        onClick={()=> choseread(post)}
                         >
                          {post.title.slice(0,80)}...
                        </p>
                     </article>
                ))}
            </div>

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

    </motion.div>
  )
}

export default ReadingPage