import React from 'react'
import {motion} from 'framer-motion'
import { useAppContext } from '../context/context'
import {BsArrowLeft} from 'react-icons/bs'
import { socialData } from '../datas/Navdata'
import {GrClose, GrTwitter, GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaPinterestP, FaYoutube} from 'react-icons/fa'

const ReadingPage = () => {
    const {handleDateDisplay, handleReadingPage} = useAppContext()

    const marketData = [1,2,3,4,5]

  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 0.5}} className='h-[100vh] w-full px-5 xl:px-[6.25rem] pt-10 bg-white fixed top-0 right-0 z-[9999999] grid grid-cols-1 place-content-center md:grid-cols-3 md:gap-x-6'>

        <span className='absolute top-0 left-0 p-1 mx-3 text-2xl pt-2' onClick={()=> handleReadingPage()}><BsArrowLeft/></span>

        <div className=' news-sect flex w-full h-full items-start flex-col  gap-y-3 relative col-span-2 overflow-y-scroll'>
           
           <div className='w-full  h-[300] md:h-[500px]'>
             <img src="./001.jpg" alt="" className='h-full w-full object-cover' />
           </div>

           <div className='content w-full h-fit flex flex-col gap-2'>
                <p className="date text-[12px] text-[rgba(0,0,0,0.7)] font-meduim">
                  {handleDateDisplay()}
                </p>
                <p className="title text-2xl font-semibold leading-tight text-justify">
                   {/* {title}  */}
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit rerum qui itaque, assumenda quae?
                </p>
                <p className="content text-base text-[rgba(0,0,0,0.7)] font-medium text-justify">
                    {/* {shortDescription + '.....'} */}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis hic placeat repellendus commodi molestiae temporibus vel fugiat, corrupti excepturi reprehenderit beatae. Voluptatum amet mollitia saepe iste. Cumque, et deserunt aspernatur expedita repellendus dolor ipsa officia incidunt praesentium, perspiciatis temporibus sint veniam excepturi a placeat provident unde facere, dolorem exercitationem ipsum suscipit amet laudantium. Odit atque reiciendis, animi similique cumque perferendis nihil nostrum ab modi libero voluptatibus earum quia tenetur sint fuga in rem, ipsam ducimus aspernatur. Voluptatum reprehenderit sequi quibusdam numquam, laborum commodi eligendi voluptatibus labore, placeat ducimus soluta aperiam autem delectus consequatur optio harum. Dolor laudantium eius amet!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aliquid omnis voluptas aperiam deleniti ea error beatae deserunt perspiciatis molestiae est cum, nobis iusto commodi cumque expedita soluta in. Totam fuga eum optio? Porro neque iure pariatur iusto. Tenetur, nostrum odio soluta natus suscipit quae aut consectetur earum est, distinctio modi eaque accusamus. Dolorum magni, eos nisi quibusdam provident fuga harum ducimus quo deleniti? Neque consequuntur impedit, adipisci nemo excepturi, quibusdam molestias dolor fuga optio ad suscipit voluptatibus numquam dicta aperiam nesciunt obcaecati sunt. Deserunt architecto sequi libero, distinctio assumenda laudantium, magni accusamus, soluta nemo exercitationem autem doloremque non laboriosam!
                </p> 
           </div>
        </div>

        <div className='Most-Read col-span-1 sticky top-0'>
           <header className='py-3 border-b border-[rgba(0,0,0,0.8)]'>
            <h2 className='text-2xl font-extrabold capitalize'>Most Read</h2>
           </header>
            <div>
                {marketData.map((market,index)=>(
                     <article  key={index} className='py-3 border-b border-[rgba(0,0,0,0.8)]'>
                        <span className='text-[12px]'>Market</span>
                        <p className='font-semibold text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, iure!</p>
                     </article>
                ))}
            </div>
            <div className=' pt-1 border-t  bg-white py-2'>
                <p className='font-meduim text-[0.875rem] mb-2 font-semibold'>Share this article</p>
               <div className='flex justify-between items-center gap-2 w-fit'>
                {/* {socialData.map((item)=>{
                  return <a href={item.href} className={item.className} key={item.id}>{item.icon}</a>
                })} */}
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)]'><FaFacebookF/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)]'><GrTwitter/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)]'><GrInstagram/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)]'><FaPinterestP/></a>
                <a href="#" className='text-xl border rounded-full p-[0.375rem] border-[rgba(0,0,0,0.8)]'><FaYoutube/></a>
               </div>
            </div>
        </div>

    </motion.div>
  )
}

export default ReadingPage