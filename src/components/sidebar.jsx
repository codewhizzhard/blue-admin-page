import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'


const Sidebar = () => {

    const {id} = useParams();
    const locate = useLocation();
    //console.log("locate", locate.pathname);
  return (
    <div className={`h-full border bg-white flex flex-col space-y-4 items-center pt-8 border-[#EDEFF2]`}>
        <Link to={"/"}  className={`text-[14px] font-bold ${locate.pathname === "/" ? "bg-[#FF89011A] text-[#E6B566]" : "text-[#4A4A4A]"}   w-[254px] h-[44px] flex px-4 rounded-[6px] items-center`}><span>Dashboard</span></Link >
        <Link to={"/prds"}  className={`text-[14px] font-bold ${locate.pathname === "/prds" || locate.pathname === "/prds/add" ? "bg-[#FF89011A] text-[#E6B566]" : "text-[#4A4A4A]"}   w-[254px] h-[44px] flex px-4 rounded-[6px] items-center`}><span>Product Management</span></Link >
        <Link to={"/ords"}  className={`text-[14px] font-bold ${locate.pathname === "/ords" || locate.pathname === `/ords/${id}` ? "bg-[#FF89011A] text-[#E6B566]" : "text-[#4A4A4A]"}   w-[254px] h-[44px] flex px-4 rounded-[6px] items-center`}><span>Order Management</span></Link  >
        <Link to={"/usrs"}  className={`text-[14px] font-bold ${locate.pathname === "/usrs" ? "bg-[#FF89011A] text-[#E6B566]" : "text-[#4A4A4A]"}   w-[254px] h-[44px] flex px-4 rounded-[6px] items-center`}><span>User Management</span></Link  >
        <Link to={"/payments"}  className={`text-[14px] font-bold ${locate.pathname === "/payments" ? "bg-[#FF89011A] text-[#E6B566]" : "text-[#4A4A4A]"}   w-[254px] h-[44px] flex px-4 rounded-[6px] items-center`}><span>Payment & Transactions</span></Link >
        <Link to={"/settings"}  className={`text-[14px] font-bold ${locate.pathname === "/settings" || locate.pathname === "/settings/password" ? "bg-[#FF89011A] text-[#E6B566]" : "text-[#4A4A4A]"}   w-[254px] h-[44px] flex px-4 rounded-[6px] items-center`}><span>Settings</span></Link  >
    </div>
  )
}

export default Sidebar