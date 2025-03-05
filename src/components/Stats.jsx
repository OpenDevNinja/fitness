import React from 'react'
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock 
} from 'lucide-react'
import SectionTitle from './SectionTitle'

const performanceStats = [
  {
    icon: Users,
    value: '5000+',
    label: 'Membres Actifs',
    color: 'text-primary'
  },
  {
    icon: TrendingUp,
    value: '92%',
    label: 'Taux de Réussite',
    color: 'text-performance'
  },
  {
    icon: Award,
    value: '15',
    label: 'Prix Gagnés',
    color: 'text-accent'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Client',
    color: 'text-premium'
  }
]

const PerformanceStats = () => {
  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre Impact en Chiffres"
          subtitle="Des résultats concrets qui parlent d'eux-mêmes"
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          {performanceStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <stat.icon 
                className={`mx-auto mb-4 ${stat.color}`} 
                size={48} 
              />
              <h3 className="text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </h3>
              <p className="text-secondary-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceStats