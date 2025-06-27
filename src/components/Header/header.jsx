import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png";
import { FaBell } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <div className='top-0 h-20 w-full flex border border-[#EDEFF2] fixed bg-white justify-between pr-10'>
        <Link to={"/"} className='border border-[#EDEFF2] bg-white w-[300px] pl-5'><img src={logo} alt="bluebreedSelect" srcset="" className='w-23 h-20' /> </Link> {/* w-23 h-20 */}
        <div className='flex flex-end gap-4 items-center '>
         {/*  <FaBell className='' style={{ color: "white", stroke: "black", strokeWidth: 40 }}/> */}
         <FiBell className='text-black '/>
          <div className='w-[35px] h-[35px]  '>
            <img src={logo} alt="" className='object-center w-full h-full rounded-4xl'/>
          </div>
          
        </div>
      
    </div>
    
  )
}

export default Header