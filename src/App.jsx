import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Addnote from './pages/Addnote'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Viewnote from './pages/Viewnote'

const App = () => {
  return (
    <div className='font-Inter'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/addnote' element={<Addnote />} />
        <Route path='/note/:noteID' element={<Viewnote />} />

      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
    </div>
  )
}

export default App