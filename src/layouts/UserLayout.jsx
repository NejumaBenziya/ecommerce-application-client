import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
Outlet
const UserLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default UserLayout