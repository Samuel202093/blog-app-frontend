import React, { createContext, useContext, useReducer,useEffect } from 'react'
import {reducer} from './AuthReducer'

const initial_State = {
    user : JSON.parse(localStorage.getItem('user')) || null
}

const AuthContext = createContext(initial_State)


export const AuthProvider = ({children})=> {
   const [state, dispatch] = useReducer(reducer, initial_State)
//    const {user} = state 
   useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
   }, [state.user])
   
   return (
      <AuthContext.Provider value={{user: state.user , dispatch}}>
        {children}
      </AuthContext.Provider>
   )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}