const SkillsPage = () => {
  const skills = {
    "Programming Languages": [
      "JavaScript", "TypeScript", "Python", 
      "Java", "C++", "Go"
    ],
    "Frontend Development": [
      "React", "Next.js", "Tailwind CSS"    ],
    "Backend Development": [
      "Node.js", "Express", "REST APIs"
    ],
    "DevOps & Cloud": [
      "Docker", "Docker-compose"
    ],
    "Databases": [
      "PostgreSQL", "MongoDB", "MySQL",
      "Redis",
      "Elasticsearch"
    ],
    "Tools & Platforms": [
      "Git", "GitHub",
      "VS Code","Postman"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The technologies and tools I work with to build exceptional digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div 
            key={category}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill) => (
                <span 
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

     

      <div className="mt-16 bg-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">My Technical Philosophy</h2>
        <div className="prose prose-indigo max-w-3xl mx-auto text-gray-600">
          <p className="mb-4">
            I focus on mastering fundamental concepts that transcend specific technologies. 
            This approach allows me to quickly adapt to new tools and frameworks as needed.
          </p>
          <p>
            While I have deep expertise in certain areas, I maintain a broad awareness of 
            the evolving tech landscape to make informed architectural decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;