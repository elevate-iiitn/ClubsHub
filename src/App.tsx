import React, { useState } from 'react';
import { ExternalLink, Instagram, Heart, Users, Award } from 'lucide-react';
import parking from './assets/parking.jpg';
import sac from './assets/sac.png';
import logo from './assets/logo.png';
import CRISPR from './assets/CRISPR.png';
import elevate from './assets/elevate.png';
import estoria from './assets/estoria.png';
import Iotics from './assets/Iotics.png';
import orator from './assets/orator.png';
import probe from './assets/ProbeLogo.png';
import strokes from './assets/StrokesLogo.png';
//mport media from './assets/mediacell.png';
import dotslash from './assets/dotslash.jpg';
import crescendo from './assets/crescando.jpg';
import dtraxia from './assets/dtraxia.jpg';
import synergy from './assets/synergy.png';
import eklavya from './assets/eklavya.png';
import avlok from './assets/avlok.jpg';
import dimensions from './assets/dimensions.jpg';
interface Club {
  name: string;
  category: 'technical' | 'non-technical'|'Sports';
  website?: string;
  instagram?: string;
  image: string;
  description: string;
  isProminent?: boolean;
}

const clubs: Club[] = [
  // Technical Clubs
  {
    name: 'ELEVATE',
    category: 'technical',
    //website: 'https://elevate-iiit.com',
    instagram: 'elevate_iiitn',
    image: elevate,
    description: 'Premier technical club driving innovation and excellence',
    isProminent: true
  },
  {
    name: 'DOTSLASH',
    category: 'technical',
    //website: 'https://dotslash-iiit.com',
    instagram: 'thedotslashcommunity',
    image: dotslash,
    description: 'Coding Community'
  },
  {
    name: 'CRISPR',
    category: 'technical',
    //website: 'https://crispr-iiit.com',
    instagram: 'crispr_iiitn',
    image: CRISPR,
    description: ' Central Research Initiative and Student Public Relations'
  },
  {
    name: 'IOTICS',
    category: 'technical',
    //website: 'https://iotics-iiit.com',
    instagram: 'iotics_iiitn',
    image: Iotics,
    description: 'IoT and embedded systems'
  },
  {
    name: 'STROKES',
    category: 'technical',
    //website: 'https://strokes-iiit.com',
    instagram: 'strokes_iiitn_',
    image: strokes,
    description: 'Design and creative technology'
  },
  {
    name: 'DIMENSIONS',
    category: 'technical',
    //website: 'https://strokes-iiit.com',
    instagram: 'dimensions.iiitn',
    image: dimensions,
    description: 'Game Dev and XR community'
  },
  // Non-Technical Clubs
  {
    name: 'ORATOR',
    category: 'non-technical',
    //website: 'https://orator-iiit.com',
    instagram: 'orator_iiitn',
    image: orator,
    description: 'Public speaking and debate'
  },
  {
    name: 'PROBE',
    category: 'non-technical',
    //website: 'https://probe-iiit.com',
    instagram: 'probe.iiitn',
    image: probe,
    description: 'Photography and Cinematography'
  },
  {
    name: 'DTARAXIA',
    category: 'non-technical',
    //website: 'https://dtaraxia-iiit.com',
    instagram: 'd.taraxia_iiitn',
    image: dtraxia,
    description: 'Dance club'
  },
  {
    name: 'CRESENDO',
    category: 'non-technical',
    //website: 'https://cresendo-iiit.com',
    instagram: 'crescendo_iiitn',
    image:crescendo,
    description: 'Music and performing arts'
  },
  {
    name: 'ESTORIA',
    category: 'non-technical',
    //website: 'https://estoria-iiit.com',
    instagram: 'estoria_iiitn',
    image: estoria,
    description: 'Drama club'
  },
  {
    name: 'SYNERGY',
    category: 'Sports',
    //website: 'https://synergy-iiit.com',
    instagram: 'synergy_iiit',
    image: synergy,
    description: 'E-sports club'
  },
  {
    name: 'EKLAVYA',
    category: 'Sports',
    //website: 'https://eklavya-iiit.com',
    instagram: 'eklavya_iiitn',
    image: eklavya,
    description: 'Sports and fitness community'
  },
  {
    name: 'AVLOK',
    category: 'non-technical',
    //website: 'https://mediacell-iiit.com',
    instagram: 'sac_iiitn',
    image: avlok,
    description: ' Media and Outreach'
  }
];

const ClubCard: React.FC<{ club: Club }> = ({ club }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 
        transition-all duration-500 hover:scale-105 cursor-pointer group
        ${club.isProminent ? 'lg:col-span-2 lg:row-span-2' : ''}
        ${club.isProminent ? 'shadow-2xl shadow-blue-500/20 border-2 border-blue-500/30' : 'shadow-xl hover:shadow-2xl'}
        ${club.isProminent ? 'hover:shadow-blue-500/40' : 'hover:shadow-blue-500/20'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {club.isProminent && (
        <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 animate-pulse">
          <Award className="w-4 h-4" />
          MOST POPULAR
        </div>
      )}
      
      <div className="relative h-full min-h-[300px]">
        <img 
          src={club.image} 
          alt={club.name}
          className="absolute inset-0 w-full h-full object-contain bg-slate-900 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className={`transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
            <h3 className={`font-bold text-white mb-2 ${club.isProminent ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
              {club.name}
            </h3>
            <p className={`text-gray-300 mb-4 ${club.isProminent ? 'text-lg' : 'text-sm'}`}>
              {club.description}
            </p>
            
            <div className={`flex gap-3 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {club.website && (
                <a
                  href={club.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
              )}
              {club.instagram && (
                <a
                  href={`https://instagram.com/${club.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  @{club.instagram}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const technicalClubs = clubs.filter(club => club.category === 'technical');
  const nonTechnicalClubs = clubs.filter(club => club.category === 'non-technical');
  const Sportsclubs=clubs.filter(club => club.category === 'Sports');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Fixed SAC Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
               <img 
    src={sac} 
    alt="SAC Logo" 
    className="w-12 h-12 object-contain"
  />
            </div>
            <span className="text-white font-medium text-lg">Student Activity Council</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${parking}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
            IIIT NAGPUR
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
            College Clubs & Communities
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover your passion, build your skills, and connect with like-minded individuals through our diverse range of technical and non-technical clubs.
          </p>
          <a 
href="https://www.instagram.com/sac_iiitn?igsh=MXhraTMzaXVwamczNA==" 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-12 flex items-center justify-center gap-2 text-blue-400 text-lg cursor-pointer"
>
  <Users className="w-6 h-6" />
  <span>Join the Community</span>
</a>

        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Technical Clubs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Clubs
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dive deep into technology, innovation, and cutting-edge research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalClubs.map((club) => (
              <ClubCard key={club.name} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Technical Clubs Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cultural Clubs
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Express your creativity, develop soft skills, and explore diverse interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nonTechnicalClubs.map((club) => (
              <ClubCard key={club.name} club={club} />
            ))}
          </div>
        </div>
      </section>
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sports Clubs
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Upskill your strength, intellect and athletism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Sportsclubs.map((club) => (
              <ClubCard key={club.name} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left Section - Made with Love */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by Elevate</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-lg">IIIT Nagpur</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering student communities
                </p>
              </div>
            </div>

            {/* Center Section - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-blue-400 font-semibold text-lg">Quick Links</h3>
              <div className="space-y-3">
                <a href="#clubs" className="block text-gray-300 hover:text-white transition-colors text-sm">
                  Clubs
                </a>
                <a href="#events" className="block text-gray-300 hover:text-white transition-colors text-sm">
                  Events
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>

            {/* Right Section - Connect */}
            <div className="space-y-4">
              <h3 className="text-blue-400 font-semibold text-lg">Connect</h3>
              <div className="flex gap-6">
                <a 
                  href="https://instagram.com/sac_iiitn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/company/training-and-placement-cell-iiit-nagpur/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/IIITN_OFFICIAL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
         <div className="pt-8 border-t border-white/10">
  <div className="flex items-center justify-center gap-3">
    <img
      src={logo}
      alt="Logo"
      className="w-8 h-8 object-contain"
    />
    <p className="text-gray-500 text-sm">
      © 2025 Student Activity Center, IIIT Nagpur. All rights reserved.
    </p>
  </div>
</div>

        </div>
      </footer>
    </div>
  );
}

export default App;
