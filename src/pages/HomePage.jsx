import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Dumbbell, 
  Heart, 
  Target, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react'
import Testimonials from '../components/Home/Testimonials'
import Pricing from '../components/Tarfis'
import PerformanceStats from '../components/Stats'

const HeroBanner = () => (
  <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-accent">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div className="text-white space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold animate-bounce-soft">
          Transformez Votre Corps, Révélez Votre Potentiel
        </h1>
        <p className="text-xl opacity-90">
          Rejoignez FitnessPro et commencez votre transformation ultime avec nos programmes personnalisés.
        </p>
        <div className="flex space-x-4">
          <Link 
            to="/workouts" 
            className="bg-white text-primary px-6 py-3 rounded-full flex items-center hover:bg-background-light transition"
          >
            Nos Programmes <ArrowRight className="ml-2" />
          </Link>
          <Link 
            to="/contact" 
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <img 
          src="/images/fitness-hero.jpg" 
          alt="Fitness Hero" 
          className="rounded-xl shadow-fitness-card max-w-full h-auto"
        />
      </div>
    </div>
  </div>
)

const FeaturesSection = () => {
  const features = [
    { 
      icon: Dumbbell, 
      title: "Programmes Variés", 
      description: "Des séances adaptées à tous les niveaux et objectifs."
    },
    { 
      icon: Heart, 
      title: "Coaching Personnalisé", 
      description: "Un suivi individuel par des coachs experts."
    },
    { 
      icon: Target, 
      title: "Résultats Garantis", 
      description: "Méthodes éprouvées pour atteindre vos objectifs."
    }
  ]

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            >
              <feature.icon className="mx-auto text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-secondary-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className="bg-background">
      <HeroBanner />
      <FeaturesSection />
      <Testimonials />
      <Pricing />
      <PerformanceStats />
      {/* Plus de sections à ajouter */}
    </div>
  )
}

export default Home