import React from 'react'
import Navbar from '../Components/ui/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Components/Footer/Footer'

export default function Layout() {

  const location = useLocation();

  // Determine which header to display based on the current route
  let header;

  if(location.pathname === "/") {
    header = <Navbar />
  } else {
    header = <Navbar />
  }

  return (
    <div>
        {header}

        <Outlet />  {/* This will render the child routes */}
        
        <Footer />
    </div>
  )
}