import React, { useState } from "react";

export const Card = () => {
  const [showContact, setShowContact] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "Complete online shopping solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User auth", "Product catalog", "Shopping cart", "Admin dashboard"],
      links: {
        live: "#",
        code: "https://github.com/Mumerdevverx/ecommerce-platform" // Your actual GitHub link
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Manager Pro",
      description: "Team collaboration tool with real-time updates",
      technologies: ["React Native", "Firebase", "Redux"],
      features: ["Task assignments", "Progress tracking", "Notifications", "Calendar sync"],
      links: {
        live: "#",
        code: "https://github.com/Mumerdevverx/task-manager" // Your actual GitHub link
      },
      color: "from-blue-500 to-teal-400"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather visualization platform",
      technologies: ["JavaScript", "Chart.js", "WeatherAPI"],
      features: ["5-day forecast", "Historical data", "Severe alerts", "Location search"],
      links: {
        live: "#",
        code: "https://github.com/Mumerdevverx/weather-app" // Your actual GitHub link
      },
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4">
      {/* Main Card */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1 w-full max-w-lg shadow-2xl group relative overflow-hidden">
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl -z-10"></div>
        
        {/* Inner Card Content */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-[calc(1.5rem-4px)] p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="https://www.shutterstock.com/image-vector/umar-omar-arabic-name-creative-260nw-2199329369.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl object-cover transition-all duration-500 hover:rotate-3 hover:border-purple-400/50 hover:shadow-purple-500/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                PRO
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Muhammed Umer
            </h1>
            <h2 className="text-md font-semibold text-purple-200 mt-1">
              Full Stack Developer
            </h2>
            
            {/* Animated Tabs */}
            <div className="flex bg-gray-700/50 rounded-full p-1 mt-4 shadow-inner">
              {["about", "skills", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 text-sm rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="mt-6 min-h-[120px]">
            {activeTab === "about" && (
              <p className="text-gray-300 text-center leading-relaxed animate-fade-in">
                Passionate software engineer specializing in modern web technologies.
                Graduate from University of Gujrat with expertise in React, Node.js,
                and cloud technologies. Building digital experiences that matter.
              </p>
            )}
            {activeTab === "skills" && (
              <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
                {["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "AWS", "Docker", "GraphQL"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-700/50 text-purple-200 rounded-full text-sm border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {activeTab === "education" && (
              <div className="bg-gray-700/30 p-4 rounded-xl animate-fade-in">
                <h3 className="font-bold text-purple-200 flex items-center gap-2">
                  <span className="text-pink-400">🎓</span> University of Gujrat
                </h3>
                <p className="text-gray-300 text-sm mt-1">BSc Software Engineering</p>
                <p className="text-gray-400 text-xs mt-1">2019 - 2023</p>
              </div>
            )}
          </div>

          {/* Enhanced Portfolio Section */}
          {showPortfolio && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                My Portfolio
              </h3>

              {/* GitHub Portfolio Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">GitHub Portfolio</h4>
                    <p className="text-gray-300 text-sm mt-1">Explore all my projects and contributions</p>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/Mumerdevverx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm flex items-center gap-2 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Visit My GitHub
                  </a>
                </div>
              </div>

              {/* Featured Projects */}
              <h4 className="text-md font-semibold text-center text-purple-200 mt-6 mb-3">
                Featured Projects
              </h4>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {portfolioItems.map((project, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${project.color}/20 to-gray-800/70 p-4 rounded-xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-bold text-white">{project.title}</h4>
                      <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-purple-200">
                        {project.technologies[0]}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-700/40 text-purple-100 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex gap-3">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs flex items-center gap-1 transition-all border border-white/10 hover:border-white/20"
                      >
                        <span className="text-purple-300">🌐</span> Live Demo
                      </a>
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs flex items-center gap-1 transition-all border border-white/10 hover:border-white/20"
                      >
                        <span className="text-pink-300">👨‍💻</span> Source Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          {showContact && (
            <div className="mt-6 bg-gray-700/30 p-4 rounded-xl border border-gray-600/50 animate-fade-in">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 flex items-center gap-2">
                <span>📨</span> Get In Touch
              </h3>
              <ul className="mt-3 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <span className="text-purple-300">📧</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <a href="mailto:Umer83598@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                      Umer83598@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <span className="text-green-300">📱</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">WhatsApp</p>
                    <a href="https://wa.me/923223405996" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                      +92 322 3405996
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <span className="text-blue-300">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <a 
                      href="https://www.google.com/maps/place/Jalalpur+Jattan,+Gujrat,+Punjab,+Pakistan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300 transition-colors underline hover:no-underline"
                    >
                      Jalal Pur Jattan, Islam Gharr, Gujrat
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => {
                setShowContact(!showContact);
                if (showPortfolio) setShowPortfolio(false);
              }}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1 ${
                showContact
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-600'
              }`}
            >
              <span>{showContact ? "🙈" : "📨"}</span>
              {showContact ? "Hide Contact" : "Contact"}
            </button>
            <button
              onClick={() => {
                setShowPortfolio(!showPortfolio);
                if (showContact) setShowContact(false);
              }}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1 ${
                showPortfolio
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-600'
              }`}
            >
              <span>{showPortfolio ? "🙈" : "💼"}</span>
              {showPortfolio ? "Hide Projects" : "My Projects"}
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.5);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Card;