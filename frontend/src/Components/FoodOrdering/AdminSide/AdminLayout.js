import React from 'react'
import SideNavBar from './SideNavBar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <SideNavBar />
      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout;