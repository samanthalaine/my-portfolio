import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  // Frontend
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Vue", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "Material UI", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Ruby on Rails", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "GraphQL", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "BuildKite", category: "tools" }, 
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span> 🛠️
        </h2>

        {/* --- Category Filters --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background text-foreground hover:bg-secondary/70 border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Skills Grid --- */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, key) => (
            // The card is now a simple, aesthetic 'chip' or 'badge'
            <div
              key={key}
              className="bg-card px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.05] border border-border"
            >
              <h3 className="font-medium text-lg text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};