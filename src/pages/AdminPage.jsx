import React from 'react'
import AdminDashboard from '../component/AdminPage/AdminDashboard'
import AdminEdit from '../component/AdminPage/AdminEdit'
import Footer from '../component/Footer'
import { AdminProvider } from '../context/AdminContext'

const AdminPage = ({}) => {
  return (
    <div>
        <AdminProvider>
            <AdminDashboard/>
        </AdminProvider>
        {/* <Footer/> */}
    </div>
  )
}

export default AdminPage