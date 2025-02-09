import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import { Navbar } from './components/navigation/Navbar'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className='mt-[-75px] flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      </div>
    </>
  )
}

export default App
