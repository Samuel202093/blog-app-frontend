import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import axios from 'axios'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    
     const [size, setSize] = useState()

     useEffect(()=>{
        const handleResize = ()=>{ 
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
         handleResize()

        return ()=> window.removeEventListener('resize',handleResize)

     },[])

    // const [nextRead, setNextRead] = useState(false)

    // const handleNextread = ()=> {
    //     setNextRead(!nextRead)
    // }

    const handleDateDisplay = ()=>{
        const nowDate = new Date()

        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

        const year = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

        return `${nowDate.getDate()} ${year[nowDate.getMonth()]}, ${nowDate.getFullYear()} `
    }

    const [showSubscribe, setShowSubscribe] = useState(false)

    const handleShowSubscribe = ()=> {
        setShowSubscribe(!showSubscribe)
    }

    // console.log(showSubscribe);

    const [showSignIn, setShowSignIn] = useState(false)

    const handleShowSignIn = ()=>{
        setShowSignIn(!showSignIn)
    }

    const [readingPage, setReadingPage] = useState(false)

    const handleReadingPage = ()=> {
        setReadingPage(!readingPage)
    }

    const [section, setSection] = useState(undefined)

    const handleSection = (name)=> {
        setSection(name)
    }


    const [signUp, setShowSignUp] = useState(false)

    const handleSignUp = () => {
        setShowSignUp(!signUp)
    }
    // const [data, setData] = useState([])

    // // FETCHING DATA
    // const fetchData = async ()=> {
    //     try {
    //       const response = await axios.get('https://newsapi.org/v2/everything?q=football&apiKey=35f81e68fa854e4b8f36ed72f667f642');
    //       console.log(response);
    //       setData(response.data.articles)
    //     } catch (error) {
    //       console.log(error);  
    //     }
    // }
    
    // useEffect(() => {
    //     fetchData()
    // }, [])



    return (
        <AppContext.Provider value={{
            size, 
            setSize, 
            handleDateDisplay,
            showSubscribe,
            setShowSubscribe,
            handleShowSubscribe,
            showSignIn,
            handleShowSignIn, 
            handleReadingPage, 
            readingPage, 
            handleSection, 
            section,
            signUp,
            handleSignUp
            // handleNextread,
            // nextRead
            }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = ()=> {
    return useContext(AppContext)
}