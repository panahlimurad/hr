import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../../pages/Regsiter/register'

const AuthLayout = () => {
  return (
    <div>
        <Routes>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AuthLayout