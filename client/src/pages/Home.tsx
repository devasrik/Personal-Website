import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Home Page - Single Page Portfolio
 * Design Philosophy: Black and White Minimalist
 * Features: All sections in one scrollable page with sticky navigation
 */
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />



      <main className="flex-1">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-20 border-b border-border"
        >
          <div className="container">
            <div className="space-y-6 max-w-3xl">
              <div className="accent-line mb-6" />
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm Devasri Kasanneni
              </h1>
              <p className="text-2xl text-muted-foreground">
                Computer Science Student & Developer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for opportunities to apply my skills in full-stack development and contribute to innovative projects that make a real impact.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold transition-all duration-200 ease-out hover:shadow-lg hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold transition-all duration-200 ease-out hover:bg-foreground hover:text-background"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 border-b border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-5xl font-bold text-foreground mb-4">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* About Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square rounded-lg border-2 border-border bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg font-semibold">Your Photo</p>
                    <p className="text-muted-foreground text-sm">(Add your picture here)</p>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate computer science student with a deep interest in building elegant,
                  efficient solutions to real-world problems. My journey in tech started with curiosity
                  about how things work, which quickly evolved into a love for coding and software
                  development. I specialize in full-stack development, machine learning, and creating
                  user-centric applications that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 border-b border-border bg-secondary">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-5xl font-bold text-foreground mb-4">Education</h2>
            </div>

            <div className="space-y-8">
              {/* Education Item */}
              <div className="p-8 rounded-lg border border-border bg-background">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-lg font-semibold text-muted-foreground">University Name</p>
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                    2022 - 2026
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pursuing a comprehensive degree in Computer Science with focus on software
                  engineering and machine learning.
                </p>
                <p className="text-sm font-semibold text-foreground mb-3">GPA: 3.8/4.0</p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">•</span>
                    <span>Dean's List (All Semesters)</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">•</span>
                    <span>Relevant Coursework: Data Structures, Algorithms, Database Systems</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1">•</span>
                    <span>Active member of Computer Science Club</span>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Full Stack Web Development",
                      issuer: "Online Platform",
                      date: "2024",
                    },
                    { title: "Machine Learning Specialization", issuer: "Coursera", date: "2024" },
                    {
                      title: "AWS Certified Cloud Practitioner",
                      issuer: "Amazon Web Services",
                      date: "2023",
                    },
                    { title: "Python Programming", issuer: "Codecademy", date: "2023" },
                  ].map((cert, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-background">
                      <p className="font-semibold text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-b border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-5xl font-bold text-foreground mb-4">Projects</h2>
            </div>

            <div className="space-y-12">
              {/* Project 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="w-full aspect-video rounded-lg border-2 border-border bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg font-semibold">Project Image</p>
                    <p className="text-muted-foreground text-sm">(Add screenshot here)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">E-Commerce Platform</h3>
                  <p className="text-muted-foreground">
                    Full-stack web application with React, Node.js, and MongoDB. Features include
                    user authentication, product catalog, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Stripe"].map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
                <div className="w-full aspect-video rounded-lg border-2 border-border bg-secondary flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg font-semibold">Project Image</p>
                    <p className="text-muted-foreground text-sm">(Add screenshot here)</p>
                  </div>
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-foreground">Machine Learning Model</h3>
                  <p className="text-muted-foreground">
                    Developed a neural network for image classification using Python and TensorFlow.
                    Achieved 94% accuracy on test dataset.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "ML", "Data Science"].map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="w-full aspect-video rounded-lg border-2 border-border bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg font-semibold">Project Image</p>
                    <p className="text-muted-foreground text-sm">(Add screenshot here)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Real-time Chat Application</h3>
                  <p className="text-muted-foreground">
                    Built a WebSocket-based chat app with React and Express. Features include user
                    presence, typing indicators, and message history.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "WebSocket", "Express", "Real-time"].map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-b border-border bg-secondary">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-5xl font-bold text-foreground mb-4">Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
                { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
                { category: "Tools", items: ["Git", "Docker", "AWS", "Linux"] },
                { category: "Other", items: ["Machine Learning", "REST APIs", "WebSockets", "Agile"] },
              ].map((skillGroup, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-background">
                  <h3 className="text-lg font-bold text-foreground mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 border-b border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-5xl font-bold text-foreground mb-4">Experience</h2>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Software Development Intern
                  </h3>
                  <p className="text-lg font-semibold text-muted-foreground">Tech Company Name</p>
                </div>
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                  Summer 2024
                </span>
              </div>

              <p className="text-muted-foreground mb-4">
                Developed and maintained full-stack web applications using React and Node.js.
                Collaborated with senior developers to implement new features and fix bugs. Participated
                in code reviews and contributed to improving development practices.
              </p>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Key Achievements:</p>
                <ul className="space-y-2">
                  {[
                    "Built 3 new features used by 1000+ users",
                    "Reduced page load time by 30%",
                    "Mentored 2 junior interns",
                  ].map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-foreground font-bold mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-b border-border bg-secondary">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                I'm always interested in hearing about new projects, opportunities, and collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "your.email@example.com",
                    href: "mailto:your.email@example.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567",
                  },
                  { icon: MapPin, label: "Location", value: "City, State, USA", href: "#" },
                ].map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background cursor-pointer transition-all duration-200 ease-out hover:border-foreground hover:bg-card"
                      onClick={() => {
                        if (info.href.startsWith("mailto:") || info.href.startsWith("tel:")) {
                          window.location.href = info.href;
                        }
                      }}
                    >
                      <div className="p-2 rounded-lg bg-secondary">
                        <Icon className="text-foreground" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-semibold">{info.value}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-foreground mb-4">Connect With Me</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Github, label: "GitHub", href: "https://github.com" },
                      { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                      { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
                    ].map((social) => {
                      const Icon = social.icon;
                      return (
                        <button
                          key={social.label}
                          onClick={() => window.open(social.href, "_blank")}
                          className="p-3 rounded-lg border border-border bg-background text-foreground transition-all duration-200 ease-out hover:bg-foreground hover:text-background hover:border-foreground"
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="p-8 rounded-lg border border-border bg-background">
      <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>

      {submitted && (
        <div className="mb-6 p-4 rounded-lg bg-secondary border border-border">
          <p className="text-foreground font-semibold">
            Thank you for your message! I'll get back to you soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
            placeholder="What is this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 resize-none"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold transition-all duration-200 ease-out hover:shadow-lg hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
