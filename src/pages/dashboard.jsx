import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex w-full gap-4 pb-20 '>
        <div className='flex flex-col w-full flex-grow space-y-2 '>
            <div className='flex gap-3'>
                <div className='rounded-xl border border-[#EDEFF2] flex-1/3 h-[108px] text-[14px] font-medium text-[#8E95A9] p-5'>Revenue</div>
                <div className='rounded-xl border border-[#EDEFF2] flex-1/3 h-[108px] text-[14px] font-medium text-[#8E95A9] p-5'>Orders</div>
                <div className='rounded-xl border border-[#EDEFF2] flex-1/3 h-[108px] text-[14px] font-medium text-[#8E95A9] p-5'>Visitors</div>
            </div>
            <div className='flex-3/3 w-full rounded-xl border border-[#EDEFF2] text-[14px] font-medium text-[#8E95A9] p-5'>ff</div>
        </div>
        <div className='flex flex-col w-[30%] space-y-2'>
            <div className='rounded-xl border border-[#EDEFF2] w-full h-[108px] text-[14px] font-medium text-[#8E95A9] p-5'>Active Users</div>
            <div  className=' flex-grow text-[14px] font-medium text-[#8E95A9] rounded-xl border border-[#EDEFF2] p-5'>Cart</div>
        </div>
        {/* <div className='flex space-x-6'>
            <div className='border border-amber-500 flex-1/4'>hhh</div>
            <div className='border border-amber-500 flex-1/4'>hhh</div>
            <div className='border border-amber-500 flex-1/4'>hhh</div>
            <div className='border border-amber-500 flex-1/4'>hhh</div>
        </div>
        <div className='flex-grow flex space-x-6'>
            <div className='flex-3/4 border border-amber-700'>hhhh</div>
            <div className='flex-1/4 border border-amber-700'>hhhh</div>
        </div> */}
    </div>
  )
}

export default Dashboard