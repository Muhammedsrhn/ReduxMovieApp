import React from 'react'
import LoginPage from "./LoginPage/LoginPage";
import MainArea from './MainArea/MainArea';
import { Route, Routes, BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage /> } />          
          <Route path='/home' element={<MainArea /> } />          
        </Routes>
      </BrowserRouter>
    </div>
  )
}