import React from "react";
import { useState } from "react";
import { useContext, createContext } from "react";

const DNContext = createContext()

export const DashNavProvider = ({children}) => {
    const [hide, setHide] = useState(true)
    const handleHide = () => {
        setHide(!hide)
    }
    return (
       <DNContext.Provider value={{hide, handleHide}}>
          {children}
       </DNContext.Provider>
    )
}

export const useDNcontext = () => useContext(DNContext)