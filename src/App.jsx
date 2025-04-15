import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './index.css'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
      <div id="container">
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/red' element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App