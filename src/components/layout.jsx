import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import Sidebar from './sidebar'

const Layout = () => {
  return (
 <div className="flex flex-col h-screen">
    <div className=' md:hidden  flex items-center text-center  px-10 h-full'>
        THE VIEW IS OPTIMIZED FOR DESKTOP. PLEASE USE A DESKTOP BROWSER FOR BETTER EXPERIENCE.
    </div>
    {/* Fixed Header */}
    <header className="h-[80px] flex-shrink-0 bg-white shadow md:block hidden">
        <Header />
    </header>

    {/* Main Area: fills remaining height */}
    <main className=" flex-grow overflow-hidden md:flex hidden pb-10">
        {/* Sidebar */}

        <div className="min-w-[300px] flex-shrink-0">
            <Sidebar />
        </div>

        {/* Content Area: scrollable */}
        <div className="flex-grow pl-4 pt-4 pr-6 bg-stone-500 overflow-y-auto">
            <Outlet />
        </div>
    </main>
</div>

  )
}

export default Layout