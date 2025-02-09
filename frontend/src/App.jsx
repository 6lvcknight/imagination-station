import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/navigation/Footer'
import { Create } from './components/Create'

const App = () => {
  return (
    <>
    <Router>
        <AppContent />
    </Router>
    </>
  );
};

function AppContent() {
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/register'];

  const isPathMatching = (paths) => paths.some((path) => matchPath(path, location.pathname));
  const isFooterVisible = !isPathMatching(hideFooterRoutes);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className='mt-[-75px] flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </div>
        {isFooterVisible && <Footer />}
      </div>
    </>
  )
}

export default App
