import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

const UserInfo = () => {

    const headers = ['NAME', 'LOCATION', 'ORDERS', 'SPENT'];
    const items = [];
    const {id} = useParams();
    const item = items.filter((item) => item.id.toString() === id);
  return (
    <div className='flex flex-col space-y-4 '>
      <div className='justify-between h-15 flex items-center'> 
          <p className='flex items-center text-[#5A607F]'><FiArrowLeft className='text-[#7E84A3] h-[16px] w-[20px]'/> <Link to={"/usrs"} className='text-[14px]'>Back</Link> </p>  <h3 className='text-[24px] font-bold text-[#131523]'>Customer Orders</h3>
          <button className='text-[#1F2937] px-6 py-2 border border-[#EDEFF2]'>Export</button>
      </div>
      <div className='bg-white rounded p-5 space-y-4'>
        <div className='flex gap-3'>
          <input type="text" className='flex-grow outline-none border border-[#EDEFF2] py-2 px-4 text-[14px]' placeholder='search with order ID' />
          <span className='w-[112px] text-center border border-[#CED2D8] rounded'>Filter by</span>
      </div>
        <div>
            <ul className='flex bg-[#EAECF0] text-[12px] font-semibold text-[#4D5461] py-3 px-2 gap-1'>
              {
                headers.map((header, index) => (
                   <li className='flex-1/4 pl-3' key={index}><h3 >{header}</h3></li>
                ))
              }
            </ul>
            <ul className='py-3 px-2 space-y-3 text-[14px] text-[#1F2937] bg-red-400'>
            {headers.map((content, index) => (
            <li className=' w-full bg-blue-400' key={index}>
            <Link to={`/usrs/${content.id}`} className='bg-blue-600 w-full flex'>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
            </Link> </li>
             ))}
          </ul>
        </div>
        </div>
    </div>
  )
}

export default UserInfo