import React from 'react'
import Test from "../../../../images/usrbig.jpg";
import NavigationBar from '../NavigationBar/NavigationBar'

const Sidebar = () => {
  return (
    <div className='bg-sidebar-bg w-full h-full flex flex-col gap-4'>
        <div className='flex h-[60px] justify-center items-center gap-2'>
            <span className='bg-icon-bg w-[35px] h-[35px] rounded-xl flex justify-center items-center text-white text-2xl font-extrabold'>A</span>
            <p className='text-2xl font-normal'>AtrioHR</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='w-20 h-20 rounded-2xl'>
            <img className="w-20 h-20 shadow-3xl rounded-2xl object-cover" src={Test} alt="Large avatar"/>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-base font-semibold'>Emily Smith</p>
                <p className='text-[10px] text-[#919aa3]'>Manager</p>
            </div>
        </div>
        <div>
            <NavigationBar/>
        </div>
    </div>
  )
}

export default Sidebar