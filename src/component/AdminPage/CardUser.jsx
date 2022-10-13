import React, { useEffect, useId, useRef, useState } from 'react'
// import './userCard.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
// import TextField from '../TextField'
import { storage } from '../../firebase/Firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/Firebase'
import {TbUpload, TbDownload} from 'react-icons/tb'
import {GrPowerReset} from 'react-icons/gr'
import {FiSave} from 'react-icons/fi'
import TextArea from './TextArea'
import { collection, addDoc } from "firebase/firestore"; 
import { FaGalacticSenate } from 'react-icons/fa';
import {toast} from 'react-toastify'
import {BiErrorAlt} from 'react-icons/bi'
import newsApi from '../../api/newsAPI';
import useSooks from '../../hooks/hooks';



const CardUser = () => {
  const SUPPORTED_FORMATS = ['image/JPG', 'image/JPEG', 'image/PNG'];
  const [img, setImg] = useState('')
  const [pros, setPros] = useState(null)
  // const [description, setDescription] = useState('')
  const titleRef = useRef()
  const descriptionRef = useRef()
  const sectionRef = useRef()
  const [data, setData] = useState({desc:'', test:'', section:'', file:''})
  const [disablebtn, setDisableBtn] = useState(false)
  // const [showSubmit, setShowSubmit] = useState(false)
  // const [submit, setSubmit] = useState('Save')
  // const [file, setFile] = useState('')

  const [submit, handleShowSubmit, handleSubmit, showSubmit] = useSooks('Post', false)


  const check = (pros !== null && pros < 100) || disablebtn
  // const check =  && disablebtn

  // alert(check)
 
  const sections =['World','Politics','Business',"Opinion",'Tech','Science','Sports','Arts','Books','Style','Food','Travel','Magazine','Cryptocurrency'] 

 
  const handleUpload = (event) => {
     let file = event.target.files[0];
     let reader = new FileReader()
     reader.readAsDataURL(file)
     reader.onload = () => {
        setImg(reader.result)
     }
  }

  const uid = Date.now()

  // USED TO SHOW THE ERROR AND DIRECT THE USER WHAT TO DO USING TOASTIFY
  const toastNotify = (message)=>{
    toast(message, {
        // className:'toast-class',
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

  

  const handleAdd = async(e) => {
    console.log(data);
    
    // e.preventDefault()
     try {

      if(data.test.length < 100) {
        toast('Please Enter The Title')
        titleRef.current.focus()
        return
      } else if(data.file === ''){
        toast('Please Upload An Image')
        return
      }
      else if(!data.section){
        toast('Please Choose A Section')
        sectionRef.current.focus()
        return
      } else if( data.desc < 100){
        toast('Please Enter a Description of not less than 100 words ')
        descriptionRef.current.focus()
        return
      } else {
      //   await addDoc(collection(db, "savedPost"),{
      //   ...data,
      //   time: serverTimestamp()
      // })
      // setShowSubmit(true)
      handleShowSubmit(true)
      await newsApi.post('/api/save/post',{
        title: data.test,
        description: data.desc,
        category: data.section,
        image:data.file
        },
        { headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((response)=>{
        // setShowSubmit(false)
        handleShowSubmit()
        // setSubmit('Done')
        handleSubmit('Done')
        console.log(response)})
        .catch((error)=> {console.log(error)})
      setDisableBtn(true)
      }

     } catch (error) {
      console.log(error)
     }
  }

  const handleUploaded = async(e) => {
    // e.preventDefault()
     try {
      if(data.test.length < 100) {
        toast('Please Enter The Title')
        titleRef.current.focus()
        return
      } else if(!data.section){
        toast('Please Choose A Section')
        return
      } else if( data.desc < 100){
        toast('Please Enter a Description of not less than 100 words ')
        descriptionRef.current.focus()
        return
      } else {
        await addDoc(collection(db, "UploadPost"),{
        ...data,
        time: serverTimestamp()
      })
      setDisableBtn(true)
      }

     } catch (error) {
      console.log(error)
     }
  }


  const onChangetest = (e)=> {
    setData({...data, test:e.target.value})
  }

  const onChangedesc = (e)=> {
    setData({...data, desc:e.target.value})
  }

  const saveAdminPost = async() => {

    try {
      
    } catch (error) {
      
    }
  }

  
  return (
    <div className='userWrapper px-4 pb-10'>
        <header className='py-4'>
          <h2 className='text-3xl font-medium text-[rgba(0,0,0,0.8)]'>Add Post</h2>
        </header>
        <form onSubmit={handleAdd} id='form1' className='flex flex-col gap-y-3'>
          <div>
          <TextArea
            aria-label={"minimum height"}
            minRows={1}
            placeholder={"Enter The Title"}
            style={{ width: '100%', padding:'8px', borderRadius:'6px', fontWeight: 550, fontSize:'1.5rem' }}
            value={data.test}
            ref = {titleRef}
            // onChange={(e)=> setData({...data, test:e.target.value})}
            onChange={onChangetest}
            className={'textarea'}
            minLength={50}
            maxLength={200}
            required={true}
            validation={"Title must be between 50 to 100 words"}
          />
          {/* <span className='text-[12px] text-red-800 hidden'>Title must be between 50 to 100 words</span> */}
          </div>
          
          <div 
          // className='flex gap-y-3 items-start flex-col'
          className=''
          >
              {img && <span className='border h-24 w-24 block mb-3'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
              </span>
              }
              <label htmlFor="image" className='border py-1 px-2 text-md text-[rgba(0,0,0,0.7)] font-medium'>UPLOAD AN IMAGE</label>
              {/* <span className='inline'><BiErrorAlt/></span> */}
          </div>
          <input type="file" id='image' name='image' accept="image/png, image/gif, image/jpeg" required={true} className='hidden file-input' onChange={(e)=> {
            setData({...data, file:e.target.files[0]})
            handleUpload(e) }}/>
          <span className='text-[12px] text-red-800 hidden'>Please select an image file</span>

          <div>
            <label htmlFor="sections" className='font-medium text-[rgba(0,0,0,0.7)] mr-1 focus:border-3 focus:border focus:border-black' ref={sectionRef} >SELECT A SECTION</label>
            <select 
            name="sections" 
            id="sections" 
            className='pl-1 border py-1' 
            value={data.section} 
            onChange={(e)=> setData({...data, section: e.target.value})} 
            required>
              {
                sections.map((section, index)=>{
                  return(
                    <option key={index} value={section} className='pl-1 capitalize my-1 text-md'>{section}</option>
                  )
                })
              }
            </select>
            <span className='text-[12px] text-red-800 hidden select'>Please select a section</span>
          </div>
         

          <div>
          <TextArea
            aria-label={"minimum height"}
            minRows={10}
            placeholder={"The Gist In Details"}
            style={{ width: '100%', padding:'8px', borderRadius:'6px', color:'rgba(0,0,0,0.6)' }}
            value={data.desc}
            ref={descriptionRef}
            // onChange={(e)=> setData({...data, desc:e.target.value})}
            onChange={onChangedesc}
            className={'textarea'}
            minLength={100}
            required={true}
            validation={'Description must be more than 100 words'}
          />
          {/* <span className='text-[12px] text-red-800 hidden'>Description must be more than 100 words</span> */}
          </div>
          

          <div className='flex gap-x-2 flex-col gap-y-2 md:flex-row'>
            <button type='submit' form='form1' value={'save'} disabled= { (pros !== null && pros < 100) || disablebtn} className='md:w-[9.35rem] disabled:bg-white disabled:border-slate-400 disabled:text-[#a3a3a3]  disabled:cursor-not-allowed border p-2 rounded-2xl text-white bg-[#339966] flex items-center gap-x-2 justify-center cursor-pointer w-full' onClick={(e)=> {
              e.preventDefault()
              handleAdd()
              }}>
                {showSubmit ? 
                <p className='loader'></p> 
                : 
                <><FiSave  className='text-xl'/><span>{submit}</span></>
                }
                
              </button>
             <button type='reset' form='form1' disabled={pros !== null && pros < 100} className='md:w-[9.35rem] disabled:bg-slate-700  disabled:cursor-not-allowed border-2 border-[#a51515] p-2 rounded-2xl text-[#a51515] flex items-center gap-x-2 justify-center cursor-pointer font-medium uppercase w-full'
             onClick={()=>{
              setDisableBtn(false)
              setData({...data, desc:'', test:''})
              setImg('')
              // setSubmit('Save')
              handleSubmit('Save')
             }}
             >
              {/* <GrPowerReset className='text-xl text-[#a51515] '/> */}
              Reset
              </button>
      
          </div>
           
        </form>
    </div>
  )
}



export default CardUser

