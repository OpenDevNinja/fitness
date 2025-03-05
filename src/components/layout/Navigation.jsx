import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Dumbbell } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Programmes', path: '/workouts' },
    { name: 'Coachs', path: '/trainers' },
    { name: 'Contact', path: '/contact' },
    { name: 'A propos', path: '/about' }
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Dumbbell className="text-primary mr-2" size={32} />
          <span className="text-2xl font-bold text-secondary">FitnessPro</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-secondary focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className="text-secondary hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-secondary hover:text-primary"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation