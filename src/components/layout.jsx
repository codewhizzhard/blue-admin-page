import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import Sidebar from './sidebar'

const Layout = () => {
  return (
 <div className="flex flex-col h-screen">
    {/* Fixed Header */}
    <header className="h-[80px] flex-shrink-0 bg-white shadow">
        <Header />
    </header>

    {/* Main Area: fills remaining height */}
    <main className="flex flex-grow overflow-hidden">
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