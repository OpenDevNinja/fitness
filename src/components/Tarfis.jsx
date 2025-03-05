import React, { useState } from 'react'
import { 
  Check, 
  X, 
  ArrowRight 
} from 'lucide-react'
import SectionTitle from './SectionTitle'
import Button from './Button'

const pricingPlans = [
  {
    name: "Débutant",
    price: 29.99,
    features: [
      "Accès aux programmes de base",
      "Suivi mensuel",
      "Support par email"
    ],
    recommended: false
  },
  {
    name: "Pro",
    price: 49.99,
    features: [
      "Tous les programmes",
      "Coaching personnalisé",
      "Suivi hebdomadaire",
      "Accès aux webinaires"
    ],
    recommended: true
  },
  {
    name: "Elite",
    price: 79.99,
    features: [
      "Programme VIP",
      "Coaching individuel",
      "Suivi quotidien",
      "Nutrition personnalisée",
      "Accès illimité aux ressources"
    ],
    recommended: false
  }
]

const PricingCard = ({ plan }) => {
  return (
    <div 
      className={`
        bg-white rounded-xl p-6 shadow-lg transition-all duration-300
        ${plan.recommended 
          ? 'border-4 border-primary scale-105 shadow-2xl' 
          : 'hover:shadow-xl'}
      `}
    >
      {plan.recommended && (
        <div className="bg-primary text-white text-center py-1 mb-4 rounded-t-md">
          Recommandé
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4 text-secondary">
        {plan.name}
      </h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-primary">
          {plan.price}€
        </span>
        <span className="text-secondary-light"> / mois</span>
      </div>
      
      <ul className="mb-6 space-y-3">
        {pricingPlans[0].features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center text-secondary-light"
          >
            {plan.features.includes(feature) 
              ? <Check className="text-primary mr-2" size={20} /> 
              : <X className="text-red-500 mr-2" size={20} />
            }
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        variant={plan.recommended ? 'primary' : 'outline'}
        fullWidth
      >
        Choisir {plan.name} <ArrowRight className="ml-2" size={20} />
      </Button>
    </div>
  )
}

const Pricing = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Trouvez Votre Programme Parfait"
          subtitle="Des forfaits adaptés à tous vos objectifs et budgets"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing