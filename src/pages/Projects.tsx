const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Api-Gateway in C++",
      description: "A multithreaded api-gateway implemented in c++, using threads and socket programming. Implemented Cacheing and service discovery for efficient and fast responses.",
      technologies: ["C++", "OS", "Threads", "Cache"],
      image: "/images/api-gateway.webp",
      githubLink: "https://github.com/DEEPAKsingh74/api-gateway-cpp",
      liveLink: "https://github.com/DEEPAKsingh74/api-gateway-cpp"
    },
    {
      id: 2,
      title: "Zena AI",
      description: "Built a user friendly and flexible AI assistance for your command line helping you to get quick suggestions and responses in your terminal only.",
      technologies: ["GO", "LLM", "CLI", "Linux"],
      image: "/images/zena_logo.jpg",
      githubLink: "https://github.com/DEEPAKsingh74/zena",
      liveLink: "https://github.com/DEEPAKsingh74/zena"
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
      technologies: ["React Native", "GraphQL", "PostgreSQL", "D3.js"],
      image: "/images/social_viz.png",
      githubLink: "https://github.com/DEEPAKsingh74/social-network-visualizer",
      liveLink: "https://deepaksingh74.github.io/social-network-viz/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of my recent work showcasing my skills and problem-solving approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    View Code
                  </a>
                )}
                
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">More Projects</h2>
        <p className="text-gray-600 mb-6">Check out my GitHub for additional projects and contributions.</p>
        <a
          href="https://github.com/DEEPAKsingh74"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          View My GitHub
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;