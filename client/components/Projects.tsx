export default function Projects() {
  const projects = [
    {
      title: "Project Alpha",
      description:
        "A cutting-edge web application built with React and Node.js.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project Beta",
      description:
        "An e-commerce platform with a focus on user experience and performance.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "Project Gamma",
      description:
        "A comprehensive dashboard for data visualization and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "D3.js", "Python"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-portfolio-dark-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-text mb-12 text-center lg:text-left">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-portfolio-dark border border-portfolio-dark hover:border-portfolio-blue/50 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-portfolio-blue/20 to-portfolio-dark-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-portfolio-blue/20 text-portfolio-blue text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
