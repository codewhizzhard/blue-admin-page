import React, { useState } from 'react'
import { GiEyelashes } from "react-icons/gi";
import { FiEyeOff } from 'react-icons/fi';




const Password = () => {

  const [viewPassword, setViewPassword] = useState({old: false, new: false, repeat: false});

  const handleViewPassword = (state) => {
    setViewPassword((prev) => ({
      ...prev, [state]: !prev[state]
    }))
  }

  const handleSubmit = () => {
    console.log('console')
  }
  return (
    <form  className='rounded-[17px] border border-[#E1ECE3] p-4 space-y-2'>
      <div className='flex flex-col space-y-2'>
          <label htmlFor="old" className='text-[16px] font-medium'>Old Password</label>
          <div className='relative w-full cursor-pointer'>
            <input type={`${viewPassword.old ? 'type' : "password"}`} className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none w-full' placeholder='John Doe' id='old'/>
            {
              <div className='absolute right-5 top-4 ' onClick={() => handleViewPassword("old")}>{!viewPassword.old ? <GiEyelashes  /> : <FiEyeOff />} </div>
            }
            
          </div>

      </div>
      <div className='flex flex-col space-y-2'>
          <label htmlFor="new" className='text-[16px] font-medium'>New Password</label>
          <div className='relative w-full cursor-pointer'>
            <input type={`${viewPassword.new ? 'type' : "password"}`} className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none w-full' placeholder='John Doe' id='new'/>
            {
              <div className='absolute right-5 top-4' onClick={() => handleViewPassword("new")}>{!viewPassword.new ? <GiEyelashes  /> : <FiEyeOff />} </div>
            }
          </div>
          
      </div>
      <div className='flex flex-col space-y-2'>
          <label htmlFor="repeat" className='text-[16px] font-medium'>Repeat Password</label>
           <div className='relative w-full cursor-pointer'>
            <input type={`${viewPassword.repeat ? 'type' : "password"}`} className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none w-full' placeholder='John Doe' id='repeat'/>
            {
              <div className='absolute right-5 top-4' onClick={() => handleViewPassword("repeat")}>{!viewPassword.repeat ? <GiEyelashes  /> : <FiEyeOff />} </div>
            }
           </div>
          
      </div>
    </form>
  )
}

export default Password