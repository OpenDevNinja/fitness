// src/pages/ProgramsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Calendar, Clock, BarChart, Users } from 'lucide-react';

const ProgramsPage = () => {
  // Catégories de programmes
  const categories = [
    "Tous", "Force", "Cardio", "HIIT", "Perte de poids", "Yoga", "Musculation", "Flexibilité"
  ];
  
  // Niveaux de difficulté
  const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
  
  // État pour les filtres actifs
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeLevel, setActiveLevel] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Données des programmes
  const programs = [
    {
      id: 1,
      title: "Power Lifting Pro",
      image: "/api/placeholder/600/400",
      description: "Programme intensif de powerlifting pour développer votre force maximale et améliorer vos performances en squat, soulevé de terre et développé couché.",
      difficulty: "Avancé",
      duration: "12 semaines",
      category: "Force",
      sessions: 5,
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      title: "HIIT Cardio Burn",
      image: "/api/placeholder/600/400",
      description: "Séances d'entraînement à haute intensité qui maximisent la combustion des calories et améliorent votre condition cardiovasculaire en un minimum de temps.",
      difficulty: "Intermédiaire",
      duration: "8 semaines",
      category: "HIIT",
      sessions: 4,
      rating: 4.8,
      reviews: 93
    },
    {
      id: 3,
      title: "Yoga Fitness Flow",
      image: "/api/placeholder/600/400",
      description: "Combinaison parfaite de postures de yoga et d'exercices de renforcement pour améliorer votre souplesse, votre force et votre équilibre mental.",
      difficulty: "Débutant",
      duration: "6 semaines",
      category: "Yoga",
      sessions: 3,
      rating: 4.7,
      reviews: 85
    },
    {
      id: 4,
      title: "Body Transformation",
      image: "/api/placeholder/600/400",
      description: "Programme complet alliant musculation et cardio pour une transformation physique totale, adapté à ceux qui souhaitent perdre du poids et gagner en muscle.",
      difficulty: "Intermédiaire",
      duration: "16 semaines",
      category: "Perte de poids",
      sessions: 5,
      rating: 4.9,
      reviews: 152
    },
    {
      id: 5,
      title: "Force Fonctionnelle",
      image: "/api/placeholder/600/400",
      description: "Développez une force utilisable au quotidien avec des exercices fonctionnels qui améliorent votre mobilité et préviennent les blessures.",
      difficulty: "Débutant",
      duration: "8 semaines",
      category: "Force",
      sessions: 3,
      rating: 4.6,
      reviews: 74
    },
    {
      id: 6,
      title: "Marathon Prep",
      image: "/api/placeholder/600/400",
      description: "Préparation complète pour les courses de fond et marathons, avec un plan progressif d'entraînement et des conseils pour améliorer votre endurance.",
      difficulty: "Avancé",
      duration: "20 semaines",
      category: "Cardio",
      sessions: 5,
      rating: 4.8,
      reviews: 67
    }
  ];
  
  // Filtrer les programmes
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = activeCategory === "Tous" || program.category === activeCategory;
    const matchesLevel = activeLevel === "Tous" || program.difficulty === activeLevel;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-secondary text-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Programmes</h1>
            <p className="text-xl mb-8">Découvrez nos programmes d'entraînement sur mesure pour tous les niveaux et tous les objectifs</p>
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-gray-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Barre de recherche */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un programme..."
                  className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Filtre catégories */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "Tous" ? "Toutes les catégories" : category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Filtre niveaux */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level === "Tous" ? "Tous les niveaux" : `Niveau: ${level}`}
                    </option>
                  ))}
                </select>
                <BarChart className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des programmes */}
      <section className="section bg-light">
        <div className="container-custom">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Aucun programme ne correspond à vos critères</h3>
              <p className="text-lg mb-6">Essayez de modifier vos filtres ou votre recherche</p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setActiveCategory("Tous");
                  setActiveLevel("Tous");
                  setSearchQuery("");
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <div 
                  key={program.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl reveal"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {program.category}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-medium">{program.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({program.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-1 text-primary" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-1 text-primary" />
                        <span>{program.sessions} sessions/sem.</span>
                      </div>
                      <div className="flex items-center text-sm col-span-2">
                        <BarChart className="w-4 h-4 mr-1 text-primary" />
                        <span className={`${
                          program.difficulty === 'Débutant' ? 'text-green-600' :
                          program.difficulty === 'Intermédiaire' ? 'text-accent' :
                          'text-primary'
                        }`}>
                          {program.difficulty}
                        </span>
                      </div>
                    </div>
                    <Link 
                      to={`/programs/${program.id}`} 
                      className="w-full block text-center py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Découvrir le programme
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Catégories populaires */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catégories <span className="title-gradient">populaires</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Explorez nos programmes par catégorie pour trouver celui qui correspond à vos objectifs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.filter(cat => cat !== "Tous").map((category, index) => (
              <button
                key={category}
                className={`p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-1 reveal ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveCategory(category)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold">{category}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA personnalisé */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(/api/placeholder/1920/1080)`,
            filter: 'brightness(40%)'
          }}
        />
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-xl mb-8">
              Nos coachs experts peuvent créer un programme personnalisé adapté à vos objectifs spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Demander un programme personnalisé
              </Link>
              <Link to="/trainers" className="btn-outline">
                Découvrir nos coachs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;