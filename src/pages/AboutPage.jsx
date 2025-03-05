// src/pages/AboutPage.jsx
import React from 'react';
import { Award, Users, Clock, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const milestones = [
    { year: "2010", title: "Création de POWERFIT", description: "Ouverture de notre première salle à Paris" },
    { year: "2013", title: "Expansion nationale", description: "Ouverture de 5 nouvelles salles en France" },
    { year: "2015", title: "Lancement des programmes en ligne", description: "Accès à distance à nos entraînements" },
    { year: "2018", title: "Partenariats avec des athlètes", description: "Développement de programmes pro" },
    { year: "2020", title: "Application mobile", description: "Suivi fitness personnalisé" },
    { year: "2022", title: "15 salles en France", description: "Présence dans toutes les grandes villes" }
  ];

  const values = [
    { 
      icon: <Target className="w-12 h-12 text-primary" />, 
      title: "Excellence", 
      description: "Nous visons l'excellence dans tous nos services et installations." 
    },
    { 
      icon: <Users className="w-12 h-12 text-primary" />, 
      title: "Communauté", 
      description: "Nous créons un environnement inclusif où chacun trouve sa place." 
    },
    { 
      icon: <CheckCircle className="w-12 h-12 text-primary" />, 
      title: "Intégrité", 
      description: "Nous agissons avec honnêteté et transparence en toutes circonstances." 
    },
    { 
      icon: <Award className="w-12 h-12 text-primary" />, 
      title: "Innovation", 
      description: "Nous évoluons constamment pour offrir le meilleur à nos membres." 
    }
  ];

  const team = [
    { 
      name: "Alexandre Martin", 
      role: "Fondateur & CEO", 
      image: "/api/placeholder/400/400",
      bio: "Ancien athlète olympique et passionné de fitness depuis plus de 20 ans." 
    },
    { 
      name: "Marie Dubois", 
      role: "Directrice des programmes", 
      image: "/api/placeholder/400/400",
      bio: "Coach certifiée avec 15 ans d'expérience dans l'élaboration de programmes fitness." 
    },
    { 
      name: "Laurent Bernard", 
      role: "Responsable des coachs", 
      image: "/api/placeholder/400/400",
      bio: "Expert en préparation physique qui a formé plus de 200 coachs professionnels." 
    },
    { 
      name: "Sophie Klein", 
      role: "Nutritionniste en chef", 
      image: "/api/placeholder/400/400",
      bio: "Spécialiste en nutrition sportive avec un doctorat en sciences de l'alimentation." 
    }
  ];

  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-secondary text-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Histoire</h1>
            <p className="text-xl mb-8">Découvrez l'histoire de POWERFIT et notre mission pour transformer la vie des gens grâce au fitness</p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre <span className="title-gradient">Vision</span>
              </h2>
              <p className="text-lg mb-6">
                Fondée en 2010 par Alexandre Martin, ancien athlète olympique, POWERFIT est née d'une vision simple mais puissante : créer un espace où chacun peut transformer son corps et sa vie, quel que soit son niveau ou ses objectifs.
              </p>
              <p className="text-lg mb-6">
                Ce qui a commencé comme une petite salle de sport à Paris s'est transformé en un réseau national de 15 centres de fitness premium, reconnus pour leur approche personnalisée et leur communauté dynamique.
              </p>
              <p className="text-lg">
                Notre objectif n'est pas seulement d'aider nos membres à améliorer leur condition physique, mais aussi à renforcer leur confiance en eux, à adopter un mode de vie sain et à repousser leurs limites.
              </p>
            </div>
            
            <div className="relative reveal">
              <img 
                src="/api/placeholder/600/800" 
                alt="Fondateur de POWERFIT" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Alexandre Martin</p>
                <p>Fondateur & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-secondary text-light">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre parcours</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Une décennie d'innovation et de croissance au service du fitness
            </p>
          </div>
          
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/50"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } items-center gap-8 reveal`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-primary bg-secondary z-10"></div>
                  
                  {/* Contenu */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <span className="text-primary font-bold text-xl block mb-2">{milestone.year}</span>
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                  
                  {/* Espace pour équilibrer */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section bg-light">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="title-gradient">valeurs</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="title-gradient">équipe</span> dirigeante
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Des passionnés qui travaillent chaque jour pour vous offrir la meilleure expérience fitness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section bg-secondary text-light">
        <div className="container-custom text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à rejoindre la famille <span className="text-primary">POWERFIT</span> ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commencez votre transformation dès aujourd'hui et découvrez comment nous pouvons vous aider à atteindre vos objectifs fitness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="btn-primary">
              Essai gratuit
            </Link>
            <Link to="/contact" className="btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;