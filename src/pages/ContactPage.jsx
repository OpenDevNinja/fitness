import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique d'envoi de formulaire
    console.log('Formulaire soumis', formData)
  }

  return (
    <div className="min-h-screen bg-background-light py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Contactez-nous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-secondary-light">Nom</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required 
              />
            </div>
            <div>
              <label className="block mb-2 text-secondary-light">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                required 
              />
            </div>
            <div>
              <label className="block mb-2 text-secondary-light">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                rows={4}
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 rounded-full hover:bg-primary-dark transition flex items-center justify-center"
            >
              <Send className="mr-2" /> Envoyer le message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <Mail className="text-primary mr-4" size={48} />
            <div>
              <h3 className="text-xl font-bold text-secondary">Email</h3>
              <p className="text-secondary-light">contact@fitnesspro.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <Phone className="text-primary mr-4" size={48} />
            <div>
              <h3 className="text-xl font-bold text-secondary">Téléphone</h3>
              <p className="text-secondary-light">+33 1 23 45 67 89</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <MapPin className="text-primary mr-4" size={48} />
            <div>
              <h3 className="text-xl font-bold text-secondary">Adresse</h3>
              <p className="text-secondary-light">12 Rue de la Forme, 75008 Paris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact