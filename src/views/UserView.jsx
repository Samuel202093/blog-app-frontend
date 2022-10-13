import React from 'react'
import {useAuthContext} from '../context/AuthContext'
import UserLayout from "../component/UserDashboard/UserLayout";
import { UserContextProvider } from '../component/UserDashboard/UserContext';
import { Navigate } from 'react-router-dom';




const UserView = () => {
    const {user} = useAuthContext()


    const RequireAuth = ({children}) => {
        return user ? (children) : <Navigate to={'/'}/>
       }
  return (
    <>
        <RequireAuth>
            <UserContextProvider>
                <UserLayout/>
            </UserContextProvider>
        </RequireAuth>
    </>
  )
}

export default UserView