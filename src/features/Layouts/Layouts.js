import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import MainLayout from './MainLayout'

const Layouts = () => {
  return (
    <div>
        <Routes>
            <Route path='/auth/*' element={<AuthLayout/>}/>
            <Route path='/*' element={<MainLayout/>}/>
        </Routes>
    </div>
  )
}

export default Layouts