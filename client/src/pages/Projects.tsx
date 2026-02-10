import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, ExternalLink } from "lucide-react";

/**
 * Projects Page
 * Design Philosophy: Modern Minimalist with Technical Elegance
 * Features: Detailed project cards with links, filtering by technology
 */
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing. Features include admin dashboard for inventory management and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      highlights: [
        "Responsive design with mobile-first approach",
        "Secure payment integration with Stripe",
        "Real-time inventory management",
        "User authentication and authorization",
      ],
    },
    {
      title: "Machine Learning Image Classifier",
      description:
        "Developed a convolutional neural network for image classification using TensorFlow. The model was trained on a custom dataset and achieved 94% accuracy on the test set. Includes a web interface for real-time predictions.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "React", "OpenCV"],
      links: {
        github: "https://github.com",
      },
      highlights: [
        "94% accuracy on test dataset",
        "Custom dataset with 10,000+ images",
        "Real-time prediction API",
        "Data augmentation techniques",
      ],
    },
    {
      title: "Real-time Chat Application",
      description:
        "A WebSocket-based chat application with real-time messaging, user presence indicators, typing notifications, and message history. Built with React for the frontend and Express with Socket.io for the backend.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop",
      technologies: ["React", "Express", "Socket.io", "MongoDB", "TypeScript"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      highlights: [
        "Real-time bidirectional communication",
        "User presence and typing indicators",
        "Message persistence with MongoDB",
        "Responsive UI with Tailwind CSS",
      ],
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with features like project creation, task assignment, progress tracking, and team collaboration. Includes drag-and-drop interface and real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "Zustand"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      highlights: [
        "Drag-and-drop task management",
        "Real-time collaboration",
        "User authentication with Firebase",
        "Progress analytics and reporting",
      ],
    },
    {
      title: "Weather Forecast Application",
      description:
        "A weather application that displays current weather conditions and forecasts using a public API. Features include location search, hourly and weekly forecasts, and weather alerts.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "Axios", "Chart.js"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      highlights: [
        "Real-time weather data integration",
        "Location-based forecasting",
        "Interactive weather charts",
        "Responsive mobile design",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and designed with a focus on user experience and performance.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      links: {
        github: "https://github.com",
      },
      highlights: [
        "Modern minimalist design",
        "Optimized performance",
        "SEO friendly",
        "Mobile responsive",
      ],
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "AWS",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="accent-line mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A showcase of my recent work demonstrating various technologies, problem-solving
              approaches, and development practices.
            </p>
          </div>
        </section>

        {/* Technology Tags */}
        <section className="py-12 border-b border-border bg-secondary/30">
          <div className="container">
            <p className="text-sm font-semibold text-muted-foreground mb-4">TECHNOLOGIES</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  className="px-4 py-2 rounded-full border border-border bg-card text-foreground smooth-transition hover:border-primary hover:text-primary"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center group"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-lg border border-border h-64 md:h-80 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 smooth-transition" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-3xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-semibold smooth-transition hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold smooth-transition hover:shadow-lg"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/30 border-t border-border">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">More Projects Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm constantly working on new projects and improving existing ones. Check back soon
              for more updates!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
