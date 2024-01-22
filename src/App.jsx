import { useState } from 'react'
import Navbar from './components/Navbar'
import Classification from './pages/Classification'
import Home from './pages/Home'
import Blurbs from './pages/Blurbs'
import Flowcharts from './pages/Flowcharts'
import Updates from './pages/Updates'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/flowcharts" element={<Flowcharts />} />
          <Route path="/blurbs" element={<Blurbs />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </div>
    </>
  )
}

export default App
