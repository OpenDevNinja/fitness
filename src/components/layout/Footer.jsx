import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Dumbbell, 
  Mail 
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, url: '#' },
    { icon: Instagram, url: '#' },
    { icon: Twitter, url: '#' }
  ]

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Programmes', path: '/workouts' },
    { name: 'Coachs', path: '/trainers' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Logo et Description */}
        <div>
          <div className="flex items-center mb-4">
            <Dumbbell className="mr-2 text-primary" size={32} />
            <h3 className="text-2xl font-bold">FitnessPro</h3>
          </div>
          <p className="text-gray-300">
            Transformez votre corps, révélez votre potentiel avec nos programmes d'entraînement innovants.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className="text-white hover:text-primary transition"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Liens Rapides */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-primary">Liens Rapides</h4>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-primary">Restez Informé</h4>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="w-full px-4 py-2 rounded-lg bg-secondary-light text-white"
            />
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
            >
              <Mail className="inline mr-2" size={20} /> S'inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400">
          © {currentYear} FitnessPro. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer