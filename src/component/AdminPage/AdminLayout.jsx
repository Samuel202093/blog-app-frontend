import React from 'react'
import CardUser from './CardUser'
import SaveUpload from './SaveUpload'
import { AdminProvider } from '../../context/AdminContext'

const AdminLayout = () => {
  return (
    <div className='min-h-[90vh] grid lg:grid-cols-2 grid-cols-1 border '>
      <AdminProvider>
        <CardUser/>
        <SaveUpload/>
       </AdminProvider>
    </div>
  )
}

export default AdminLayout