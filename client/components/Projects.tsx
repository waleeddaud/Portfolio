export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot",
      description:
        "A conversational AI chatbot built using LangGraph and deployed with a clean Streamlit interface. Create new chat chats with thread/session management.",
      image:
        "chatbot.png",
      tags: ["LangGraph", "Streamlit", "Python", "Gemini"],
    },
    {
      title: "Dagster ETL Pipeline",
      description:
        "This project is a simple ETL (Extract, Transform, Load) pipeline that fetches weather data from the OpenWeatherMap API, transforms it into a structured forma, and stores it into a Supabase PostgreSQL database.",
      image:
        "Dagster.png",
      tags: ["Dagster", "Python"],
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
                  className="w-full h-full object-contain opacity-80"
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
