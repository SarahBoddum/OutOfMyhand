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
import ArchiveDetail from './pages/ArchiveDetail';


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
        <Route path="/archive/:year" element={<ArchiveDetail />} />
        <Route path="/2025" element={<ArchiveDetail year="2025" />} />
        <Route path="/2024" element={<ArchiveDetail year="2024" />} />
        <Route path="/2023" element={<ArchiveDetail year="2023" />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;