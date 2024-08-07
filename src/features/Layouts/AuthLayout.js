import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../../pages/AuthPage/auth'



const AuthLayout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AuthPage/>}/>
        </Routes>
    </div>
  )
}

export default AuthLayout