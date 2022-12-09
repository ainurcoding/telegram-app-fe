import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register'
import ChatList from '../pages/user/chatList/ChatList'
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword'
import NotFound404 from '../pages//NotFound404/NotFound404'
import FontTest from '../pages/fontTest/FontTest'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/chat-list' element={<ChatList/>}/>
        <Route path='/font-test' element={<FontTest/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='*' element={<NotFound404/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router