import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

/**
 * About Page
 * Design Philosophy: Black and White Minimalist
 * Features: Key points, personal story, experience, and skills overview
 */
export default function About() {
  const keyPoints = [
    {
      title: "Clean Code",
      description: "Writing maintainable, well-documented code following best practices.",
    },
    {
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all platforms.",
    },
    {
      title: "Collaboration",
      description: "Working effectively in teams and contributing to open-source projects.",
    },
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Tech Company Name",
      period: "Summer 2024",
      description:
        "Developed and maintained full-stack web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs. Participated in code reviews and contributed to improving development practices.",
      achievements: [
        "Built 3 new features used by 1000+ users",
        "Reduced page load time by 30%",
        "Mentored 2 junior interns",
      ],
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Linux"] },
    { category: "Other", items: ["Machine Learning", "REST APIs", "WebSockets", "Agile"] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="accent-line mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn more about my background, interests, and what drives my passion for computer
              science and software development.
            </p>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">What I Bring</h2>
              <p className="text-lg text-muted-foreground">
                Key principles that guide my work as a developer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-foreground flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 border-b border-border bg-secondary">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
              <p className="text-lg text-muted-foreground">
                My professional experience and internship opportunities.
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="p-8 rounded-lg border border-border bg-background">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{job.title}</h3>
                      <p className="text-lg font-semibold text-muted-foreground">{job.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Key Achievements:</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <span className="text-foreground font-bold mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">My Journey</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Who I Am</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate computer science student with a deep interest in building
                    elegant, efficient solutions to real-world problems. My journey in tech started
                    with curiosity about how things work, which quickly evolved into a love for
                    coding and software development.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">My Philosophy</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I believe that great software is built on three pillars: clean, maintainable
                    code; thoughtful user experience; and continuous learning. I'm not just a
                    developer—I'm a problem-solver who approaches each project with curiosity and a
                    commitment to excellence.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">What Drives Me</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm motivated by the opportunity to tackle challenging problems and collaborate
                    with talented people. Whether it's building scalable web applications, exploring
                    machine learning, or contributing to open-source projects, I'm always eager to
                    expand my skills and knowledge.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Beyond Code</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Outside of programming, I'm passionate about mentoring other students, sharing
                    knowledge through writing, and staying updated with the latest trends in
                    technology. I believe in the power of continuous learning and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive overview of the technologies and tools I work with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
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

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Want to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out my projects, education background, and get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <a className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-semibold transition-all duration-200 ease-out hover:shadow-lg hover:scale-105">
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Link>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-6 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold transition-all duration-200 ease-out hover:bg-foreground hover:text-background">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
