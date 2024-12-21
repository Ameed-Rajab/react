import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
