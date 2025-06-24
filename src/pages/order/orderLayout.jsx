import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, Outlet, useLocation } from 'react-router-dom'


const OrderLayout = ({ pageList }) => {
  // const {id} = useParams();
  /* console.log("pageList", pageList) */
    const location = useLocation();
  /* Object.entries(pageList).map(([headers, contents]) => (
    console.log("headers", headers.map((header, _) => header))
  )) */
  return (
    <div className='flex flex-col space-y-4'>
       <div className='justify-between h-15 flex items-center'>
          <div className='max-h-full flex flex-col'>
            {location.pathname === "/ords" ? <h3 className='text-[24px] font-bold text-[#131523]'>Orders</h3> : <>
            <p className='flex items-center text-[#5A607F]'><FiArrowLeft className='text-[#7E84A3] h-[16px] w-[20px]'/> <Link to={"/ords"} className='text-[14px]'>Back</Link> </p>  <h3 className='text-[24px] font-bold text-[#131523]'>Customer Orders</h3></>}
          </div>
          <button className='text-[#1F2937] px-6 py-2 border border-[#EDEFF2]'>Export</button>
        </div>
      {/* <div className='w-full justify-between flex py-4'>
        <h2 className='text-[24px] text-[#131523] font-bold'>Orders</h2>
        <button className='text-[#1F2937] px-6 py-2 border border-[#EDEFF2]'>Eport</button>
      </div> */}
      <Outlet />
    </div>
  )
}

export default OrderLayout