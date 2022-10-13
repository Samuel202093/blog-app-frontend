import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { Mutation,useMutation,useQueryClient, useQuery } from '@tanstack/react-query'
import { db } from '../../firebase/Firebase';
import { collection, getDocs,deleteDoc,doc, onSnapshot } from 'firebase/firestore';
import { useAuthContext } from '../../context/AuthContext';
import { useRef } from 'react';
import { async } from '@firebase/util';
import newsApi from '../../api/newsAPI';
const UserContext = createContext()


export const UserContextProvider = ({children})=>{
    // const {data, isLoading,}  = useQuery('data', fetchdata)

    // ACTUAL CODE IN PRODUCTION.........
    

    const [payLoad, setPayLoad] = useState()
    const [error, setError] = useState(false)

    const {user} = useAuthContext()

    console.log(user.data)

    const [data, setData] = useState()

    const getSavedPost = async() => {
        newsApi.get(`/api/user/${user.data}/dashboard`)
        .then((response)=>{
            console.log(response);
           setData(response.data)
        }).catch((error)=>{
            console.log(error);
            console.log(error.response.data);  
            console.log(error.response.status);  
            console.log(error.response.headers);
        })   
    }

    const handleDeletePost  = (id) => {
        newsApi.delete(`/api/user/${user.data}/dashboard/${id}`)
        .then((response)=> {
          console.log(response)
          getSavedPost()
        }).catch((error)=>{
            console.log(error);
            console.log(error.response.data);  
            console.log(error.response.status);  
            console.log(error.response.headers);
        })
     
    }

     

    useEffect(()=>{
        getSavedPost()
        
    },[])


    const [newInfo, setnewInfo] = useState()

    useEffect(()=>{
        setnewInfo(data)
    },[data])

    const filteredData = (link, data) => {
        if(newInfo === data){
            const sectionData = newInfo.filter((datum) => datum.category === link)
            setnewInfo(sectionData)
            
            // mutate = sectionData
            console.log(newInfo)
        } else {
            const sectionData = data.filter((datum)=> datum.category === link)
            setnewInfo(sectionData)
            // mutate = sectionData
            console.log(newInfo)

        }
    }

    const filterAll = () => {
        setnewInfo(data)
    }


    // To hide and show the sidemenu
    const [showRightMenu, setShowRightMenu] = useState(false)

    
   const handleShowRightMenu = ()=>{
    setShowRightMenu(!showRightMenu)
   }


    return (
    <UserContext.Provider value={{
     
    data,
    error, 
    setData,
    showRightMenu, 
    handleShowRightMenu, 
    handleDeletePost,
    filteredData,
    newInfo,
    setnewInfo
    // filterAll
    }}>
        {children}
    </UserContext.Provider>)
}


export const useUserContext = ()=>{
    return useContext(UserContext)
}