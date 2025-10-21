import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  // ... (Your projects array remains the same)
  {
    id: 1,
    title: "GifMe",
    description: "This site allows you to view trending gifs, search for gifs, and upload your own gifs. You can click on each gif to view more details. It utilizes the GIPHY API to render data. Uploaded gifs are stored in Cloudinary.",
    image: "https://ik.imagekit.io/tnbl3hlvz/gifme?updatedAt=1761076496915",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://gifme.netlify.app/",
    githubUrl: "https://github.com/samanthalaine/gif-me?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "To Do List",
    description:
      "This project is a simple React to do list that allows you to create tasks and add them to a list, as well as update and delete them.",
    image: "https://ik.imagekit.io/tnbl3hlvz/todolist.png?updatedAt=1761077151117",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://todolist-project-1.netlify.app/",
    githubUrl: "https://github.com/samanthalaine/react-todo-app",
  },
  {
    id: 3,
    title: "Workflow",
    description:
      "Workflow is an employee management system for a fictional tech company called TechWorks. You can add an employee, update their details, and delete them from the database. I used Auth0 for the signup/login.",
    image: "https://ik.imagekit.io/tnbl3hlvz/workflow.png?updatedAt=1761077372923",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    demoUrl: "https://workflow-site.netlify.app/",
    githubUrl: "https://github.com/samanthalaine/employee-management-system",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              // KEY CHANGE 1: Use 'flex flex-col' to enable vertical stretching
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* KEY CHANGE 2: 'flex-grow' on the content area pushes the link container down */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                {/* KEY CHANGE 3: 'flex-grow' on the description ensures it takes up all variable space */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* The links container is now consistently at the bottom */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samanthalaine"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}