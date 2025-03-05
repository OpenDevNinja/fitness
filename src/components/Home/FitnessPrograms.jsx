import React, { useState } from 'react'
import { 
  Dumbbell, 
  MonitorPlay, 
  Flame, 
  Heart, 
  CheckCircle 
} from 'lucide-react'
import useResponsive from '../context/useResponsive'

const workoutCategories = [
  {
    id: 1,
    name: 'Musculation',
    icon: Dumbbell,
    description: 'Développez votre masse musculaire et votre force.',
    difficulty: 'Intermédiaire',
    color: 'bg-primary'
  },
  {
    id: 2,
    name: 'Cardio Intense',
    icon: MonitorPlay,
    description: 'Brûlez des calories et améliorez votre endurance.',
    difficulty: 'Avancé',
    color: 'bg-performance'
  },
  {
    id: 3,
    name: 'HIIT',
    icon: Flame,
    description: 'Entraînement à haute intensité pour résultats rapides.',
    difficulty: 'Expert',
    color: 'bg-accent'
  },
  {
    id: 4,
    name: 'Yoga & Flexibilité',
    icon: Heart,
    description: 'Améliorez votre souplesse et votre bien-être mental.',
    difficulty: 'Tous niveaux',
    color: 'bg-premium'
  }
]

const Workouts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { isMobile } = useResponsive()

  return (
    <div className="min-h-screen bg-background-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-secondary">
          Nos Programmes d'Entraînement
        </h1>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-6`}>
          {workoutCategories.map((category) => (
            <div 
              key={category.id}
              className={`
                ${category.color} text-white rounded-xl p-6 
                transform transition-all duration-300
                hover:scale-105 hover:shadow-lg
                ${selectedCategory === category.id ? 'ring-4 ring-white' : ''}
              `}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex justify-between items-center mb-4">
                <category.icon size={48} />
                <span className="text-sm bg-white text-secondary px-3 py-1 rounded-full">
                  {category.difficulty}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="opacity-80 mb-4">{category.description}</p>
              {selectedCategory === category.id && (
                <div className="flex items-center text-white">
                  <CheckCircle className="mr-2" />
                  <span>Détails du programme</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workouts