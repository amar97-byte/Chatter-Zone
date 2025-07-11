import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Profile from './pages/profile/Profile'
import Chat from './pages/chat/Chat'

const App = () => {
  return (
    
     <Routes>
      <Route path='/auth'  element={<Auth/>} />
      <Route path='*'  element={<Navigate to="/auth"/>} />
      <Route path='/profile'  element={<Profile/>} />
      <Route path='/chat'  element={<Chat/>} />
    </Routes>
   
 
  )
}

export default App
