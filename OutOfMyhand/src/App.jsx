import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import About from './pages/About'
import Shop from './pages/Shop'
import Frontpage from './pages/Frontpage';
import Archive from './pages/Archive';
import Custom from './pages/Custom';
import { db } from './Data/Firebase';


function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
     <Navigation />
     <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Custom" element={<Custom />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;