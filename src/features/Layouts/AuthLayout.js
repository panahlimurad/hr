import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../../pages/AuthPage/auth'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword/ResetPassword'



const AuthLayout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AuthPage/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
        </Routes>
    </div>
  )
}

export default AuthLayout