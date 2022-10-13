import React, { useEffect, useId, useRef, useState } from 'react'
import { storage } from '../../firebase/Firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/Firebase'
import {TbUpload, TbDownload} from 'react-icons/tb'
import TextArea from './TextArea'
import {motion} from 'framer-motion'
import { useAdminAuth } from '../../context/AdminContext';
import axios from 'axios'

const AdminEdit = ({ handleEdit, item}) => {
    const {getItem, handleEditPost} = useAdminAuth()
    // const SUPPORTED_FORMATS = ['image/JPG', 'image/JPEG', 'image/PNG'];
    const [img, setImg] = useState(getItem.avatar)
    const [pros, setPros] = useState(null)
    // const [description, setDescription] = useState('')
    const imgRef = useRef()
    const [data, setData] = useState({description:getItem.description, title:getItem.title, img:getItem.avatar, category:getItem.category})
    const [disablebtn, setDisableBtn] = useState(false)

   
  
   
    const handleUpload = (event) => {
       let file = event.target.files[0];
       let reader = new FileReader()
       reader.readAsDataURL(file)
       reader.onload = () => {
          setImg(reader.result)
       }
    }
  
    const uid = Date.now()
  
    
  
    

    const handleAdd = async(e)=>{
      // e.preventDefault()
      await axios.put(`https://loctech-blog-app.herokuapp.com/api/blogs/${item._id}`,{
        title: data.title,
        description: data.description,
        // category: data.category,
        img: data.img
      })
      .then((response)=>{
        console.log(response);
        setDisableBtn(true)
      })
      .catch((error)=>{
        console.log(error);
      })
    }

   
    const [file, setFile] = useState('')
  
    const onChangetest = (e)=> {
      setData({...data, title:e.target.value})
    }
  
    const onChangedesc = (e)=> {
      setData({...data, description:e.target.value})
    }
  
    const saveAdminPost = async() => {
      try {
        
      } catch (error) {
        
      }
    }
  
    useEffect(()=>{
        const uploadFile = () => {
        const imgname = new Date().getTime() + file.name
        console.log(imgname)
        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = 
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               setPros(progress)
               console.log("Upload is " + progress + "% done");
               switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  break;
               }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({...prev, img: downloadURL}))
            })
          }
        )
       }
       file && uploadFile()
    },[file])

  return (
    <div
    className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-[9999] backdrop-blur-sm'
    >
      <motion.div 
      className='p-4 bg-white rounded-md lg:w-[60%] md:w-[80%] w-[90%] h-[95vh] overflow-y-auto pt-3 '
      initial={{x:-300, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{type:'tween'}}
      >
        <div className='userWrapper px-4 pb-10 flex flex-col gap-y-2 justify-center h-fit'>
            <header className='py-4'>
            <h2 className='text-3xl font-medium text-[rgba(0,0,0,0.8)] text-center'>Edit Post</h2>
            </header>
            <form onSubmit={handleAdd} className='flex flex-col gap-y-3'>
            <div>
            <TextArea
                aria-label={"minimum height"}
                minRows={1}
                placeholder={"Enter The Title"}
                style={{ width: '100%', padding:'8px', borderRadius:'6px', fontWeight: 550, fontSize:'1.5rem', border:'1px solid grey' }}
                value={data.title}
                // onChange={(e)=> setData({...data, test:e.target.value})}
                onChange={onChangetest}
                className={'textarea'}
                // value={item.title} 
                minLength={50}
                maxLength={200}
                required={true}
                validation={"Title must be between 50 to 100 words"}
            />
            {/* <span className='text-[12px] text-red-800 hidden'>Title must be between 50 to 100 words</span> */}
            </div>
            
            <div className='flex gap-y-3 items-start flex-col'>
                {img && <span className='border h-24 w-24'>
                        <img src={img} alt="" className='w-full h-full object-cover'/>
                </span>
                }
                <label htmlFor="imaged" className='py-1 px-2 border text-md text-[rgba(0,0,0,0.7)] font-medium'>UPLOAD AN IMAGE</label>
            </div>
            <input type="file" id='imaged' name='image' accept="image/png, image/gif, image/jpeg" required={true} className='hidden file-input' onChange={(e)=> {
                setFile(e.target.files[0])
                handleUpload(e) }}/>
            <span className='text-[12px] text-red-800 hidden'>Please select an image file</span>
            
            <div>
            <TextArea
                aria-label={"minimum height"}
                minRows={10}
                placeholder={"The Gist In Details"}
                style={{ width: '100%', padding:'8px', borderRadius:'6px', color:'rgba(0,0,0,0.6)',border:'1px solid grey' }}
                value={data.description}
                // onChange={(e)=> setData({...data, desc:e.target.value})}
                onChange={onChangedesc}
                className={'textarea'}
                minLength={100}
                required={true}
                validation={'Description must be more than 100 words'}
            />
            {/* <span className='text-[12px] text-red-800 hidden'>Description must be more than 100 words</span> */}
            </div>
            

            <div className='flex justify-between gap-x-2'>
                
                  
            <button type='submit' value={'Post'} disabled= { (pros !== null && pros < 100) || disablebtn} className='w-[9.35rem] disabled:bg-[red]  disabled:cursor-not-allowed border p-2 rounded-2xl text-white bg-[rgba(51,153,102)] flex items-center gap-x-2 justify-center cursor-pointer' onClick={(e)=> {
              e.preventDefault()
              handleAdd()
              }}><TbDownload  className='text-xl'/>Save</button>
           

             <button type='reset' disabled={pros !== null && pros < 100} className='w-[9.35rem] disabled:bg-slate-700  disabled:cursor-not-allowed border p-2 rounded-2xl text-black flex items-center gap-x-2 justify-center cursor-pointer ml-auto'
             onClick={()=>{
             handleEditPost()
             }}
             >Cancel</button> 
            </div>
            
            </form>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminEdit