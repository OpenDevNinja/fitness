

// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import AboutPage from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Trainers from './pages/TrainersPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-secondary">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<ProgramsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainers" element={<Trainers />} />
       
      </Routes>
      <Footer />
    </div>
  )
}

export default App
