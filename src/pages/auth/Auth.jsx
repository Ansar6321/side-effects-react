import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NoMatch from '../no-match/NoMatch'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'

const Auth = () => {
  return (
    <Routes>
      <Route index element={<Navigate to='login' />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}

export default Auth