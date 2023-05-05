import React from 'react'
import styles from './style'
import { Navbar, Sidebar, About, Portfolio, Resume, Contact } from './components'
import { Routes, Route } from 'react-router-dom'
import './app.css';
const App = () => {
  return (


    <>
      <div className="nav bg-black">
        <Navbar />
      </div>

      <div className="main_container text-black w-full   ">
        <div className="sid bg-[#212A3E] relative sm:w-[20%]">
          <Sidebar />
        </div>

        <div className={`text-white sm:w-[80%] bg-[#212A3E] w-full bg-black`}>
          <Routes>


            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </>


  )
}

// react-transition-group https://heroicons.com/ && ARIA

export default App