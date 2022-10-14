import React from 'react'
import {TbBadge} from'react-icons/tb'
import { useState } from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
import { useAuthContext } from '../context/AuthContext'
// import {addDoc, collection, doc, getDocs, setDoc, serverTimestamp} from 'firebase/firestore'
// import { db } from '../firebase/Firebase'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SavePost = ({item, section}) => {
  const {user} = useAuthContext()
    const [savePost, setSavePost] = useState(true)
    const [alreadySaved, setAlreadySaved] = useState(true)

    const params = useParams


    // const [check, setCheck] = useState([])

    

    // let data = {
    //   title: item.title,
    //   description: item.description,
    //   category: section, 
    //   image: item.urlToImage,
    // }

    // Post request to db for user
    const handleSavePost = (e) => {
      e.preventDefault()
      axios.post(`https://loctech-blog-app.herokuapp.com/api/user/${user.data}`,{
        title: item.title,
        description: item.description,
        category: section, 
        image: item.urlToImage,
      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
        console.log(error.response.data);  
         console.log(error.response.status);  
         console.log(error.response.headers);
      })
      setSavePost(!savePost)
    }


    if(savePost){
      return (
        <form onSubmit={(e)=>handleSavePost(e)}>
        <button type='submit' className={` p-1 bg-white text-black border text-[12px] font-medium save-span1  ${user ? 'flex' : 'hidden'} gap-x-1 items-center cursor-pointer`} 
        // onClick={()=> handleSavePost()}
        >
          <TbBadge/>
          <span className='text-[12px] hidden'>click to save</span>
        </button>
        </form>
      )
    }

      return (
        <form className={`p-1 bg-white text-black  border text-[12px] font-medium save-span ${user ? 'flex' : 'hidden'} gap-x-1 items-center cursor-pointer`}  onSubmit={()=> handleSavePost()}>
         {savePost== false ?  
          // <button type='submit'>
          //   <HiBadgeCheck/>
          //   <span className='text-[12px]'>saved post</span>
          // </button>
          <>
            <HiBadgeCheck/>
            <span className='text-[12px]'>savedpost</span>
          </>
         : null
          // <>
          //   <HiBadgeCheck/>
          //   <span className='text-[12px]'>saved-post</span>
          // </>
        }
        </form>
      )
    }
    

export default SavePost

