import React, { useEffect, useRef, useState } from 'react'
// import './userCard.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextField from '../TextField'
import { storage } from '../../firebase/Firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const CardUserCopy = () => {
  const SUPPORTED_FORMATS = ['image/JPG', 'image/JPEG', 'image/PNG'];
  const [img, setImg] = useState('')
  const imgRef = useRef()
  const [data, setData] = useState({})

  const handleUpload = (event) => {
     let file = event.target.files[0];
     let reader = new FileReader()
     reader.readAsDataURL(file)
     reader.onload = () => {
        setImg(reader.result)
     }
  }

  const [file, setFile] = useState('')

  // useEffect(()=>{
  //     const uploadFile = () => {
  //     const imgname = new Date().getTime() + file.name
  //     console.log(imgname)
  //     const storageRef = ref(storage, file.name)
  //     const uploadTask = uploadBytesResumable(storageRef, file)
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress = 
  //            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //            console.log("Upload is " + progress + "% done");
  //            switch (snapshot.state) {
  //             case "paused":
  //               console.log("Upload is paused");
  //               break;
  //             case "running":
  //               console.log("Upload is running");
  //               break;
  //             default:
  //               break;
  //            }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setData((prev) => ({...prev, img: downloadURL}))
  //         })
  //       }
  //     )
  //    }
  //    file && uploadFile()
  // },[file])

  console.log(data)
  return (
    // <div className='userWrapper px-4'>
    //   <header className='py-4'>
    //     <h2 className='text-3xl font-medium text-[rgba(0,0,0,0.8)]'>Add Post</h2>
    //   </header>
      <Formik
      initialValues={{ title:'', description:'',image:''}}
      validationSchema={
        Yup.object({
           title: Yup.string()
                  .min(10)
                  .required('Required'),
          description: Yup.string()
                      .min(100)
                     .required('Required')
          // image:  Yup.mixed()
          //         .required('A file is required')
                  // .test(1000, "File Size is too large", value => value.size <= 2024 * 2024) 
                  // .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(['image/*']))
                    
        })
      }
      onSubmit={(values)=>{
        console.log(values)
        console.log(1)
        // setData({...data,...values})
        // console.log(data)
      }}
      >
       {
        formik=>(
          <div className='userWrapper px-4'>
          <header className='py-4'>
            <h2 className='text-3xl font-medium text-[rgba(0,0,0,0.8)]'>Add Post</h2>
          </header>
          <Form>
            <div className='flex flex-col gap-4'>
                 <TextField type="text" placeholder='Title' name='title' className='w-[18.75rem] border p-2 rounded-xl' />
                 <div className='flex gap-y-3 items-start flex-col'>
                 {img && <span className='border h-24 w-24'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                  </span>}
                  <label htmlFor="image" className='py-1 px-2 border text-md'>UPLOAD AN IMAGE</label>
                  {/* <span className='border h-24 w-24'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                  </span> */}
                 </div>
                 <TextField type="file" id='image' name='image' accept="image/png, image/gif, image/jpeg" className='hidden'   onChange={(e)=> {handleUpload(e)
                    setFile(e.target.files[0])}}/>
                 <Field name='describe' component='textarea' className='h-[20rem] p-2 border' placeholder='Write your description'/>
                 <button type='submit' className='w-[18.75rem] border p-2 rounded-2xl text-white bg-[rgba(0,0,0,0.8)]'  onClick={()=> formik.handleSubmit()}>Submit</button>
            </div>
          </Form>
          </div>
        )
       }  
      </Formik>
    // </div>
  )
}

export default CardUserCopy