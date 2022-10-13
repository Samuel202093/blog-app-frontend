import React from 'react'
import {Arts,Books,Business,Crypto,Food,Opinion,Politics,Science,Sports,Tech,Travel,Magazine,Style,World} from '../pages/index'
import SignUp from "../component/SignUp";
import {Navigate, Route,Routes} from 'react-router-dom'
import {useAuthContext} from '../context/AuthContext'
import {SideProvider} from '../context/SideMenuContext'
import NavMenu from "../component/NavMenu";
import AdminDashboard from '../component/AdminPage/AdminDashboard'





const HomeView = () => {
    const {user} = useAuthContext()

    const RequireAuth = ({children}) => {
        return user ? (children) : <Navigate to={'/'}/>
       }
  return (
    <>
      <SideProvider>
        <NavMenu/>
      </SideProvider>
      <Routes >

        <Route path='/' element={<World/>}>
        </Route>
        <Route path="world" element={<World/>}/>
        <Route path="tech" element={<Tech/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/cryptocurrency" element={<Crypto/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/arts" element={<Arts/>}/>
        <Route path="/opinion" element={<Opinion/>}/>
        <Route path="/politics" element={<Politics/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/travel" element={<Travel/>}/>
        <Route path="/magazine" element={<Magazine/>}/>
        <Route path="/style" element={<Style/>}/>
        <Route path ="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default HomeView