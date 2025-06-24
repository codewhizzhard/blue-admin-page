import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png";

const Header = () => {
  return (
    <div className='top-0 h-20 w-full flex border border-[#EDEFF2] fixed bg-white'>
        <Link to={"/"} className='border border-[#EDEFF2] bg-white w-[300px] pl-5'><img src={logo} alt="bluebreedSelect" srcset="" className='w-23 h-20' /> </Link> {/* w-23 h-20 */}
        <div>
          <img src="" alt="" />
        </div>
      
    </div>
    
  )
}

export default Header