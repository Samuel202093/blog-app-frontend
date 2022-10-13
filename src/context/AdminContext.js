import { useContext } from "react";
import { useState, createContext } from "react";
import { db, } from "../firebase/Firebase";
import { collection,addDoc,serverTimestamp, } from "firebase/firestore";

export const adminAuth = createContext()

export const AdminProvider = ({children})=> {
    const [editPost, setEditPost] = useState(false)

    const handleEditPost = () => {
        setEditPost(!editPost)
    }

    const [getItem, setGetItem] = useState({})

    const handleGetItem = (item) => {
        setGetItem(item)
    }

   const [success, setSuccess] = useState('')


    // const handleUploaded = async(data) => {
    //     // e.preventDefault()
    //      try {
    //         await addDoc(collection(db, "UploadPost",),{
    //         test: data.test,
    //         img: data.img,
    //         desc: data.desc,
    //         section: data.section,
    //         time: serverTimestamp()
    //       })
    //     //   setDisableBtn(true)
    //     //   setSuccess('POSTED!!!')
    //      } catch (error) {
    //       console.log(error)
    //      }
    // }

    // const handleUploaded = async (data) => {
    //     e.preventDefault()
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    // const handleEdit = (item) => {
       
    //  }
   return (
    <adminAuth.Provider value={{
        editPost, handleEditPost,getItem,handleGetItem,success, setSuccess
    }}>
        {children}
    </adminAuth.Provider>
   )
}

export const useAdminAuth = () => {
    return useContext(adminAuth)
}