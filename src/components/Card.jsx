import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Card = () => {
  const [showContact, setShowContact] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "Complete online shopping solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User auth", "Product catalog", "Shopping cart", "Admin dashboard"],
      links: {
        live: "#",
        code: "https://github.com/Mumerdevverx/ecommerce-platform"
      },
      color: "from-purple-500 to-pink-500",
      icon: "🛒"
    },
    {
      title: "Task Manager Pro",
      description: "Team collaboration tool with real-time updates",
      technologies: ["React Native", "Firebase", "Redux"],
      features: ["Task assignments", "Progress tracking", "Notifications", "Calendar sync"],
      links: {
        live: "#",
        code: "https://github.com/Mumerdevverx/task-manager"
      },
      color: "from-blue-500 to-teal-400",
      icon: "✅"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather visualization platform",
      technologies: ["JavaScript", "Chart.js", "WeatherAPI"],
      features: ["5-day forecast", "Historical data", "Severe alerts", "Location search"],
      links: {
        live: "#",
        code: "https://github.com/Mumerdevverx/weather-app"
      },
      color: "from-amber-500 to-orange-500",
      icon: "⛅"
    },
    {
      title: "AI Image Generator",
      description: "Create stunning AI art with simple prompts",
      technologies: ["Python", "TensorFlow", "React"],
      features: ["Text-to-image", "Style transfer", "HD upscaling", "API integration"],
      links: {
        live: "#",
        code: "#"
      },
      color: "from-emerald-500 to-cyan-500",
      icon: "🖼️"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 }
  ];

  const tabs = [
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "experience", label: "Experience", icon: "💼" }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              transition: {
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      {/* Cursor gradient effect */}
      <div 
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl opacity-0 transition-opacity duration-300"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          opacity: isHovered ? 0.3 : 0
        }}
      />

      {/* Main Card */}
      <motion.div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1 w-full max-w-2xl shadow-2xl group relative overflow-hidden border border-gray-700/50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl -z-10" />
        
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-20" />

        {/* Inner Card Content */}
        <div className="bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-[calc(1.5rem-4px)] p-8 relative overflow-hidden">
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-purple-400/20"
                initial={{
                  x: Math.random() * 400 - 50,
                  y: Math.random() * 600 - 50,
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  opacity: Math.random() * 0.5 + 0.1
                }}
                animate={{
                  y: [null, (Math.random() * 100) - 50],
                  opacity: [null, Math.random() * 0.3 + 0.1],
                  transition: {
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              />
            ))}
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center relative z-10">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="https://www.shutterstock.com/image-vector/umar-omar-arabic-name-creative-260nw-2199329369.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl object-cover transition-all duration-500 hover:rotate-3 hover:border-purple-400/50 hover:shadow-purple-500/20"
              />
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <span className="mr-1">🚀</span> PRO
              </motion.div>
            </motion.div>

            <motion.h1 
              className="mt-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Muhammed Umer
            </motion.h1>
            <motion.h2 
              className="text-md font-semibold text-purple-200 mt-1 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="mr-2">👨‍💻</span> Full Stack Developer
            </motion.h2>
            
            {/* Animated Tabs */}
            <motion.div 
              className="flex bg-gray-700/50 rounded-full p-1 mt-4 shadow-inner backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1 text-sm rounded-full transition-all duration-300 flex items-center gap-1 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Dynamic Content Area */}
          <div className="mt-6 min-h-[180px] relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {activeTab === "about" && (
                  <div className="text-center">
                    <p className="text-gray-300 leading-relaxed">
                      Passionate software engineer specializing in modern web technologies.
                      Building digital experiences that matter with cutting-edge solutions.
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
                      <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
                        <span className="text-xl">💻</span>
                        <p className="text-xs mt-1 text-purple-200">5+ Projects</p>
                      </div>
                      <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <span className="text-xl">🏆</span>
                        <p className="text-xs mt-1 text-blue-200">3 Awards</p>
                      </div>
                      <div className="bg-pink-500/10 p-3 rounded-lg border border-pink-500/20">
                        <span className="text-xl">🤝</span>
                        <p className="text-xs mt-1 text-pink-200">10+ Clients</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "skills" && (
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === "education" && (
                  <div className="space-y-4">
                    <div className="bg-gray-700/30 p-4 rounded-xl border border-gray-600/50 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
                      <h3 className="font-bold text-purple-200 flex items-center gap-2 z-10 relative">
                        <span className="text-pink-400">🎓</span> University of Gujrat
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">BSc Software Engineering</p>
                      <p className="text-gray-400 text-xs mt-1">2020 - 2024</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-purple-500/10 text-purple-200 rounded-full text-xs">
                          GPA: 3.8/4.0
                        </span>
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-200 rounded-full text-xs">
                          Dean's List
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "experience" && (
                  <div className="space-y-4">
                    <div className="bg-gray-700/30 p-4 rounded-xl border border-gray-600/50">
                      <h3 className="font-bold text-purple-200 flex items-center gap-2">
                        <span className="text-blue-400">💼</span> Senior Developer
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">Tech Solutions Inc.</p>
                      <p className="text-gray-400 text-xs mt-1">2022 - Present</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-300 list-disc list-inside">
                        <li>Led frontend team of 5 developers</li>
                        <li>Implemented CI/CD pipeline</li>
                        <li>Reduced load times by 40%</li>
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Portfolio Section */}
          <AnimatePresence>
            {showPortfolio && (
              <motion.div 
                className="mt-6 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  My Portfolio
                </h3>

                {/* GitHub Portfolio Card */}
                <motion.div 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-purple-500/20 p-3 rounded-lg backdrop-blur-sm">
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
                    <motion.a
                      href="https://github.com/Mumerdevverx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm flex items-center gap-2 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Visit My GitHub
                    </motion.a>
                  </div>
                </motion.div>

                {/* Featured Projects */}
                <h4 className="text-md font-semibold text-center text-purple-200 mt-6 mb-3">
                  Featured Projects
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {portfolioItems.map((project, index) => (
                    <motion.div 
                      key={index}
                      className={`bg-gradient-to-br ${project.color}/20 to-gray-800/70 p-4 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="absolute -right-10 -top-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
                      <div className="flex justify-between items-start relative z-10">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-1">{project.icon}</span>
                          <div>
                            <h4 className="text-lg font-bold text-white">{project.title}</h4>
                            <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                          </div>
                        </div>
                        <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-purple-200">
                          {project.technologies[0]}
                        </span>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-700/40 text-purple-100 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex gap-3">
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs flex items-center gap-1 transition-all border border-white/10 hover:border-white/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-purple-300">🌐</span> Live Demo
                        </motion.a>
                        <motion.a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs flex items-center gap-1 transition-all border border-white/10 hover:border-white/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-pink-300">👨‍💻</span> Source Code
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Section */}
          <AnimatePresence>
            {showContact && (
              <motion.div 
                className="mt-6 bg-gray-700/30 p-4 rounded-xl border border-gray-600/50 backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" />
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 flex items-center gap-2 relative z-10">
                  <span>📨</span> Get In Touch
                </h3>
                <ul className="mt-3 space-y-3 relative z-10">
                  <motion.li 
                    className="flex items-center gap-3 bg-gray-700/20 p-3 rounded-lg border border-gray-600/30"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <span className="text-purple-300">📧</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <a href="mailto:Umer83598@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                        Umer83598@gmail.com
                      </a>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3 bg-gray-700/20 p-3 rounded-lg border border-gray-600/30"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <span className="text-green-300">📱</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">WhatsApp</p>
                      <a href="https://wa.me/923223405996" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                        +92 322 3405996
                      </a>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3 bg-gray-700/20 p-3 rounded-lg border border-gray-600/30"
                    whileHover={{ x: 5 }}
                  >
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
                        Jalal Pur Jattan, Gujrat
                      </a>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-4 relative z-10">
            <motion.button
              onClick={() => {
                setShowContact(!showContact);
                if (showPortfolio) setShowPortfolio(false);
              }}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                showContact
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/50'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-600 hover:border-purple-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{showContact ? "🙈" : "📨"}</span>
              {showContact ? "Hide Contact" : "Contact Me"}
            </motion.button>
            <motion.button
              onClick={() => {
                setShowPortfolio(!showPortfolio);
                if (showContact) setShowContact(false);
              }}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                showPortfolio
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:shadow-blue-500/50'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-600 hover:border-blue-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{showPortfolio ? "🙈" : "💼"}</span>
              {showPortfolio ? "Hide Projects" : "My Work"}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Custom CSS for scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Card;