import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const OrderTable = ({ pageList }) => {

  const location = useLocation();


  return (
    <div className='bg-white rounded p-5 space-y-4'>
      <div className='flex gap-3'>
        <input type="text" className='flex-grow outline-none border border-[#EDEFF2] py-2 px-4 text-[14px]' placeholder='search with order ID' />
        <span className='w-[112px] text-center border border-[#CED2D8] rounded'>Filter by</span>
      </div>
      <div>
        <ul className='flex bg-[#EAECF0] text-[12px] font-semibold text-[#4D5461] py-3 px-2 gap-1'>
          {
            pageList.headers.map((header, index) => (
              <li className='flex-1/6 pl-3'  key={index}><h3>{header}</h3></li>
            ))
          }

          {/* <h3 className='flex-1/6 pl-3'>CUSTOMER</h3>
            <h3 className='flex-1/6 pl-3'>PRODUCTS</h3>
            <h3 className='flex-1/6 pl-3'>DATE</h3>
            <h3 className='flex-1/6 pl-3'>REVENUE</h3>
            <h3 className='flex-1/6 pl-3'>STATUS</h3> */}
          {/* <h3 className='w-[103px] text-center'>ACTION</h3> */}

        </ul>


        
          <ul className='py-3 px-2 space-y-3 text-[14px] text-[#1F2937]'>
            {pageList.contents.map((content, index) => (
            <li className=' w-full' key={index}>{location.pathname === "/ords" ? <Link to={`/ords/${content.id}`} className=' w-full flex space-y-8'>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <hr className=''/>
            </Link> : <div className='flex'> 
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div>
              <div className='flex-1/6 pl-3'>{content.name}</div></div>}
              
              </li>
              
             ))}
          </ul>
       
      </div>
    </div>
  )
}

export default OrderTable