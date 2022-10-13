import React, { useState } from 'react'
import Navbar from './Navbar'
import NavLinks from './NavLinks'
// import {useSideContext} from '../context/SideMenuContext'
import { useDNcontext } from '../context/DashNavContext'

const NavMenu = () => {
    const {hide} = useDNcontext()
  return (
    <>
      <Navbar/>
      <NavLinks/>   
    </>
  )
}

export default NavMenu