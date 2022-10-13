import React from "react";
import { useState, useEffect, createContext} from 'react'
import {useAppContext} from './context/context'
import {Navigate, Route,Routes} from 'react-router-dom'
import {useAuthContext} from './context/AuthContext'
import HomeView from "./views/HomeView";
import UserView from "./views/UserView";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";
import AdminDashboard from "./component/AdminPage/AdminDashboard";
import UserLayout from "./component/UserDashboard/UserLayout";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from "./component/AdminPage/AdminLayout";



function App() {
 const {user} = useAuthContext()

 const RequireAuth = ({children}) => {
  return user ? (children) : <Navigate to={'/lt'}/>
 }
  return (
    <div className="App">
       <Routes>
        <Route path="*" element={<HomeView/>}></Route>
        <Route path="/dashboard" element={<UserView/>}/>
      </Routes> 
      {/* <AdminDashboard/> */}
      <Footer/>
     <ToastContainer position="top-center" hideProgressBar={true}/>
    </div>
  );
}

export default App;
