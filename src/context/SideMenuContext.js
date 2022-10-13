import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const SideContext = createContext()

export const SideProvider = ({children}) => {
    const [sideMeun, setSideMeun] = useState(false)

    const handleSidemeun = ()=> {
        setSideMeun(!sideMeun)
    }

    return (
        <SideContext.Provider value={{sideMeun, handleSidemeun}}>
            {children}
        </SideContext.Provider>
    )
}

export const useSideContext = () => useContext(SideContext)