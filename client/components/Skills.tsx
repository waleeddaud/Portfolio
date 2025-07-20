export default function Skills() {
  const skills = [
    {
      icon: "💻",
      title: "Front-end Development",
      description: "React, JavaScript, HTML, CSS",
    },
    {
      icon: "⚙️",
      title: "Back-end Development",
      description: "Node.js, Express, Python",
    },
    {
      icon: "🗄️",
      title: "Database Management",
      description: "PostgreSQL, MongoDB",
    },
    {
      icon: "🔧",
      title: "Version Control",
      description: "Git, GitHub",
    },
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-text mb-12 text-center lg:text-left">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-portfolio-dark-secondary border border-portfolio-dark-secondary hover:border-portfolio-blue/50 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                {skill.title}
              </h3>
              <p className="text-portfolio-text-muted text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
