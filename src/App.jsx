import React from 'react'
import ruasLogo from './assets/ruas.png'
import vectorLogo from './assets/vector.jpeg'
import shrutiPhoto from './assets/shruti.jpeg'
import samPhoto from './assets/sam.jpeg'
import nikhilPhoto from './assets/nikhil.jpeg'
import tapasiPhoto from './assets/Tapasi.webp'
import remaPhoto from './assets/rema_mam.jpeg'

function App() {
  return (
    <div className="min-h-screen bg-stone-900 text-white font-mono">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left: RUAS Logo */}
          <img 
            src={ruasLogo} 
            alt="RUAS Logo" 
            className="w-20 h-20 rounded-lg object-contain"
          />
          
          {/* Center: Vector Logo */}
          <img 
            src={vectorLogo} 
            alt="Vector Club Logo" 
            className="w-20 h-20 rounded-xl object-cover border-4 border-purple-500"
          />
          
          {/* Right: Empty space for balance */}
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Vector: The Data Science and Analytics Club at RUAS! 🌟
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join us as we explore the fascinating world of data science, foster creativity, and innovate together! 
          Whether you're a beginner or a seasoned pro, Vector is the perfect place to share insights, 
          collaborate on projects, and enhance your skills.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfWolpUn1mtu43oyu3JCZCOwdZGf9vy24lyYArbNWx4SLyHsQ/viewform?usp=sharing&ouid=104567252315537283226"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Become a Member
        </a>
      </section>

      {/* What We Offer Section */}
      <section className="px-6 py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What we offer at Vector
            </h2>
            <p className="text-xl text-gray-400">
              Enriching your Data Science journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Resume Building */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6zm2 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Resume Building</h3>
              <p className="text-gray-300">Experience that will make your resume look impressive.</p>
            </div>

            {/* Card 2: Guest Lectures */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Guest Lectures</h3>
              <p className="text-gray-300">Insights from industry leaders on emerging trends.</p>
            </div>

            {/* Card 3: Career Prep */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Career Prep</h3>
              <p className="text-gray-300">Guidance on roles like Data Analyst, ML Engineer, and more.</p>
            </div>

            {/* Card 4: Workshops */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Workshops</h3>
              <p className="text-gray-300">Hands on trending Data Science Tools.</p>
            </div>

            {/* Card 5: Networking */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Networking</h3>
              <p className="text-gray-300">Connect with professionals and peers in Data Science.</p>
            </div>

            {/* Card 6: Hands-on Projects */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Hands-on Projects</h3>
              <p className="text-gray-300">Real world projects to boost your practical skills.</p>
            </div>

            {/* Card 7: Leadership */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Leadership</h3>
              <p className="text-gray-300">Take up core roles, organize events, manage teams and build leadership.</p>
            </div>

            {/* Card 8: Certification */}
            <div className="bg-stone-700/50 border border-gray-600 rounded-xl p-6 hover:bg-stone-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Certification</h3>
              <p className="text-gray-300">Earn club-verified digital badges and certificates for event participation, project completion and leadership roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Meet the Core Team
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Member 1 */}
            <div className="bg-stone-800 border border-gray-600 rounded-xl p-8 text-center max-w-sm hover:bg-stone-700 transition-all duration-300">
              <img 
                src={shrutiPhoto} 
                alt="Shruthi Kannan" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-purple-400"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-400">Shruthi Kannan</h3>
              <p className="text-gray-400 mb-4">Core Member</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/shruthi-kannan-40a95a2b7/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Member 2 */}
            <div className="bg-stone-800 border border-gray-600 rounded-xl p-8 text-center max-w-sm hover:bg-stone-700 transition-all duration-300">
              <img 
                src={samPhoto} 
                alt="Samyuktha Pillai" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-400"
              />
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">Samyuktha Pillai</h3>
              <p className="text-gray-400 mb-4">Core Member</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/samyuktha-pillai-0bb9842b2/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Member 3 */}
            <div className="bg-stone-800 border border-gray-600 rounded-xl p-8 text-center max-w-sm hover:bg-stone-700 transition-all duration-300">
              <img 
                src={nikhilPhoto} 
                alt="Nikhil Jha" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Nikhil Jha</h3>
              <p className="text-gray-400 mb-4">Core Member</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/nikhil-jha-89b8b6244/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="px-6 py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Faculty Members
            </h2>
            <p className="text-xl text-gray-400">
              Guiding our journey with expertise and dedication
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Tapasi Mam - HOD */}
            <div className="bg-stone-700 border border-gray-500 rounded-xl p-8 text-center max-w-sm hover:bg-stone-600 transition-all duration-300">
              <img 
                src={tapasiPhoto} 
                alt="Tapasi Mam" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-400"
              />
              <h3 className="text-2xl font-semibold mb-2 text-emerald-400">Dr. Tapasi Mam</h3>
              <p className="text-gray-300 mb-4 font-semibold">Head of Department</p>
              <p className="text-gray-400 text-sm mb-4">Data Science and Analytics Department</p>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/tapasighosh/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Rema Mam - Faculty Coordinator */}
            <div className="bg-stone-700 border border-gray-500 rounded-xl p-8 text-center max-w-sm hover:bg-stone-600 transition-all duration-300">
              <img 
                src={remaPhoto} 
                alt="Rema Mam" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-rose-400"
              />
              <h3 className="text-2xl font-semibold mb-2 text-rose-400">Dr. Rema Mam</h3>
              <p className="text-gray-300 mb-4 font-semibold">Faculty Coordinator</p>
              <p className="text-gray-400 text-sm mb-4">Vector Data Science Club</p>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/dr-rema-devi-6a3b3a1bb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-stone-800 border-t border-gray-700 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/vector_the.dsaclub?igsh=MTEybWxzZ3hoeGZoMQ==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.348s1.052-2.349 2.349-2.349 2.348 1.052 2.348 2.349-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.349-1.051-2.349-2.348s1.052-2.349 2.349-2.349 2.348 1.052 2.348 2.349-1.051 2.348-2.348 2.348z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/vector-the-data-science-and-analytics-club-9a1a07327/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Vector Data Science Club - RUAS. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
