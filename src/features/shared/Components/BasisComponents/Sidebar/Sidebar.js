import React from 'react'
import Test from "../../../../images/usrbig.jpg";
import NavigationBar from '../NavigationBar/NavigationBar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const state = useSelector((state) => state.boolean.hamburgerState);


    const navigate = useNavigate()

    const handleHome=()=>{
        navigate("/")
    }

  return (
    <div className='bg-sidebar-bg w-full h-full flex flex-col gap-4'>
        <div className='flex h-[60px] justify-center items-center'>
            <span onClick={handleHome} className='cursor-pointer bg-icon-bg w-[35px] h-[35px] rounded-xl flex justify-center items-center text-white text-2xl font-extrabold'>A</span>
            <p className={`${state ? "text-2xl font-normal ml-2" : "w-0"} transition-all duration-900 ease`}>{state ? "AtrioHR" : ""}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
            <div className={`${state ?"w-20 h-20 rounded-2xl":"w-0"} transition-all duration-900 ease`}>
            <img className="w-20 h-20 shadow-3xl rounded-2xl object-cover" style={{boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"}} src={Test} alt="Large avatar"/>
            </div>
            <div className={`${state ?'flex flex-col items-center' : 'hidden'}`}>
                <p className=' text-base font-semibold'>Emily Smith</p>
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