import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Password from './password'
import Profile from './profile'

const Settings = () => {

    const locate = useLocation()
  return (
    <div className='bg-white p-6 space-y-8 rounded-[10px]'>
        <h2>Settings</h2>
        <span className='flex gap-10'>
            
            <Link to={"/settings"}   className={`${locate.pathname === "/settings" ? "text-[#E6B566]" : "text-[#606060]"}`}>Profile</Link>
            <Link to={"/settings/password"}  className={`${locate.pathname === "/settings/password" ? "text-[#E6B566]" : "text-[#606060]"}`}>Password & Security</Link>
        </span>
        <hr />
          {locate.pathname === "/settings" && <Profile />}
          {locate.pathname === "/settings/password" && <Password />}  
    </div>
  )
}

export default Settings