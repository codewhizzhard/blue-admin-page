import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import noProfile from "./noProfile.png";

const Profile = () => {
  return (
    <div className='rounded-[10px] border border-[#E1ECE3] p-6  space-y-4'>
        <h3 className='text-[#3B4D3F] test-[18px] font-semibold'>Personal Information</h3>
        <form className='rounded-[17px] border border-[#E1ECE3] p-4 space-y-2'>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="name" className='text-[16px] font-medium'>Full Name</label>
                <input type="text" className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none' placeholder='John Doe' id='name'/>
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="email" className='text-[16px] font-medium'>Email</label>
                <input type="text" className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none' placeholder='example@gmail.com'/>
            </div>
            <div className='flex flex-col space-y-2'>
                <p>Profile Picture</p>
                {/* <FaUserCircle /> */}
                 <img src={noProfile} alt="" className='w-[85px] h-[85px] rounded-4xl'/>
            </div>
        </form>
    </div>
  )
}

export default Profile