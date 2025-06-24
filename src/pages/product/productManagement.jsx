import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { FiDelete, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProductManagement = () => {
  return (
    <div className='h-full space-y-4 '>

    <div className='flex justify-between items-center h-15'>
        <span className='text-[24px] font-bold'>Products</span>
        <Link to={"/prds/add"} className='py-2 px-4 rounded bg-[#E6B566] text-[16px] flex justify-center items-center gap-1 text-white font-semibold'> <FiPlus  className='pt-[1px]'/> Add New Product</Link>
    </div>

    <div className='flex flex-col bg-white w-full p-4 rounded'>
        <div className='flex justify-between w-full h-20'>
            <div className='w-[65%] h-10 border rounded border-[#D9E1EC] px-4 flex items-center'><input type="text" className='text-[16px] text-[#A1A7C4]' placeholder='search'/></div>{/* 606px */}
            <span className='w-9 h-9 rounded border border-[#D7DBEC] items-center flex justify-center'><FaTrash /></span>
        </div>
       <div className='flex-grow'>
        <div className='h-full space-y-2'>

        <div className='h-full'>
          <div className='flex w-full text-[#5A607F] text-[14px] '>
            <h2 className='flex-2/5'>Product</h2>
            <h2 className='flex-1/5'>Inventory</h2>
            <h2 className='flex-1/5'>Color</h2>
            <h2 className='flex-1/5'>Price</h2>
            <h2 className='flex-1/5'>Rating</h2>
          </div>
          <hr className='w-full text-[#D7DBEC] h-[9px] mt-3'/>
        </div>
          

          <div>
         
          <div className='w-full flex h-[72px] items-center'>
            <div  className='flex-2/5'>
              <input type="checkbox" />
            </div>
            <div className='flex-1/5'>
              ff
            </div>
            <div className='flex-1/5'>
              ff
            </div>
            <div className='flex-1/5'>
              ff
            </div>
            <div className='flex-1/5 flex justify-between'>
              <div>f</div>
              <div>gg</div>
            </div>
            {/* <div className='flex-1/6'>
              ff
            </div> */}
          </div>
           <hr className='w-full text-[#D7DBEC] h-[2px]'/>
          </div>
          
        </div>
       
       </div>
    </div>
  

    </div>
  )
}

export default ProductManagement