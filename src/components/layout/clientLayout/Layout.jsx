
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
    <div className='text-center text-primary p-5'>
      <h4>Leave Managemant System</h4>
    </div>
    <Outlet />
  </div>
  )
}

export default Layout