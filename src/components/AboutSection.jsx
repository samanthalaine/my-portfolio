import { Code, User, Component } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in software development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              Skilled in writing clean, testable code and working closely with distributed teams to design and deliver scalable UI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1AT5TezqwdJvXPyP-rE65o78MxDG37LuSFj7PG-f3l28/edit?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Component className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Building Accessible Component Libraries</h4>
                  <p className="text-muted-foreground">
                    Writing clean, semantic HTML/CSS and integrating modern state management to create intuitive, accessible, and performance-optimized interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
