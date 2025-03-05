import React, { useState } from 'react'
import { Star, Award, Target } from 'lucide-react'
import useResponsive from '../context/useResponsive'

const trainers = [
  {
    id: 1,
    name: 'Sophie Martin',
    specialty: 'Musculation & Performance',
    experience: '10 ans',
    rating: 4.9,
    imageUrl: '/images/trainer-sophie.jpg'
  },
  {
    id: 2,
    name: 'Michael Dupont',
    specialty: 'HIIT & Cardio',
    experience: '8 ans',
    rating: 4.7,
    imageUrl: '/images/trainer-michael.jpg'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    specialty: 'Yoga & Bien-être',
    experience: '12 ans',
    rating: 4.8,
    imageUrl: '/images/trainer-emma.jpg'
  }
]

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const { isMobile } = useResponsive()

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-secondary">
          Nos Coachs Experts
        </h1>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
          {trainers.map((trainer) => (
            <div 
              key={trainer.id}
              className={`
                bg-white rounded-xl overflow-hidden shadow-lg
                transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                ${selectedTrainer === trainer.id ? 'ring-4 ring-primary' : ''}
              `}
              onClick={() => setSelectedTrainer(trainer.id)}
            >
              <div className="relative">
                <img 
                  src={trainer.imageUrl} 
                  alt={trainer.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full flex items-center">
                  <Star className="mr-1" size={16} />
                  {trainer.rating}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-secondary">{trainer.name}</h3>
                <div className="flex items-center text-secondary-light mb-3">
                  <Target className="mr-2" size={20} />
                  <span>{trainer.specialty}</span>
                </div>
                <div className="flex items-center text-secondary-light">
                  <Award className="mr-2" size={20} />
                  <span>Expérience : {trainer.experience}</span>
                </div>

                {selectedTrainer === trainer.id && (
                  <div className="mt-4 text-primary font-semibold">
                    Réserver une séance de coaching
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trainers