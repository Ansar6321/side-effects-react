import React from 'react'
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import NoMatch from '../no-match/NoMatch';
import Navbar from '../../layouts/Navbar/Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path='home' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default Main