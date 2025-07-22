import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/ghibli.png"
                alt="Developer working on laptop"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-portfolio-text leading-tight mb-6">
              Introducing to you
              <br />
              <span className="text-portfolio-blue">Waleed Daud</span>
            </h1>
            <p className="text-lg text-portfolio-text-muted mb-8 leading-relaxed">
              Software Engineering student and Back-end Developer skilled in building RESTful APIs with FastAPI,
 Flask, and Express.js. Experienced in LLM integration via LangChain, Gemini, and OpenAI. Can develop basic
 ETL pipelines using Dagster. Compassion for problem solving, programming fundamentals, and DSA.
            </p>
              <a href="#projects"className="bg-portfolio-blue hover:bg-portfolio-blue-hover text-white px-8 py-4 text-lg rounded-md font-medium">
                View Projects 
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
