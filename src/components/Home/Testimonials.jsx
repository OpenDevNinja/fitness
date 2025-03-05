import React from 'react'
import { Quote, Star } from 'lucide-react'
import SectionTitle from '../SectionTitle'

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Développeuse",
    quote: "FitnessPro a complètement transformé ma vie. Les programmes sont incroyablement adaptés et motivants !",
    rating: 5,
    avatar: "/images/avatar1.jpg"
  },
  {
    name: "Thomas Martin",
    role: "Entrepreneur",
    quote: "J'ai perdu 15kg en 6 mois grâce aux coachs exceptionnels de FitnessPro. Vraiment impressionnant !",
    rating: 4.5,
    avatar: "/images/avatar2.jpg"
  },
  {
    name: "Sophie Laurent",
    role: "Professeure",
    quote: "Les cours en ligne sont parfaits pour mon emploi du temps chargé. Flexibilité et résultats garantis !",
    rating: 5,
    avatar: "/images/avatar3.jpg"
  }
]

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <Quote className="text-primary mb-4" size={40} />
    <p className="mb-4 text-secondary-light italic">
      "{testimonial.quote}"
    </p>
    
    <div className="flex items-center">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="font-bold text-secondary">{testimonial.name}</h4>
        <p className="text-secondary-light text-sm">{testimonial.role}</p>
        <div className="flex text-primary mt-1">
          {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ce Que Nos Clients Disent"
          subtitle="Découvrez les témoignages inspirants de personnes qui ont transformé leur vie grâce à FitnessPro"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials