// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Dumbbell } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gérer le changement de style du header lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary text-light py-3 shadow-lg' 
          : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className={isScrolled ? "text-light" : "text-white"}>
              <span className="text-primary">POWER</span>FIT
            </span>
          </Link>
          
          {/* Navigation principale (desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-lg font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              À propos
            </NavLink>
            <NavLink 
              to="/programs" 
              className={({ isActive }) => 
                `text-lg font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              Programmes
            </NavLink>
            <NavLink 
              to="/trainers" 
              className={({ isActive }) => 
                `text-lg font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              Coachs
            </NavLink>
            <NavLink 
              to="/membership" 
              className={({ isActive }) => 
                `text-lg font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              Abonnements
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-lg font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Bouton CTA */}
          <div className="hidden lg:block">
            <Link to="/membership" className="btn-primary">
              Essai Gratuit
            </Link>
          </div>
          
          {/* Bouton du menu (mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div 
        className={`lg:hidden absolute w-full bg-secondary text-light shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <nav className="container-custom py-6 flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-lg font-medium py-2 hover:text-primary transition-colors ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-lg font-medium py-2 hover:text-primary transition-colors ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            À propos
          </NavLink>
          <NavLink 
            to="/programs" 
            className={({ isActive }) => 
              `text-lg font-medium py-2 hover:text-primary transition-colors ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Programmes
          </NavLink>
          <NavLink 
            to="/trainers" 
            className={({ isActive }) => 
              `text-lg font-medium py-2 hover:text-primary transition-colors ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Coachs
          </NavLink>
          <NavLink 
            to="/membership" 
            className={({ isActive }) => 
              `text-lg font-medium py-2 hover:text-primary transition-colors ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Abonnements
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-lg font-medium py-2 hover:text-primary transition-colors ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Contact
          </NavLink>
          <Link 
            to="/membership" 
            className="btn-primary w-full text-center mt-4"
          >
            Essai Gratuit
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header