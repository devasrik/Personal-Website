import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Skills Page
 * Design Philosophy: Modern Minimalist with Technical Elegance
 * Features: Skill categories with proficiency levels, technology overview
 */
export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 94 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      name: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 87 },
        { name: "Python", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "WebSockets", level: 82 },
      ],
    },
    {
      name: "Databases",
      description: "Designing and managing data storage solutions",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 83 },
        { name: "Firebase", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Database Design", level: 82 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      name: "Machine Learning",
      description: "Developing intelligent systems and data analysis",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Python", level: 85 },
        { name: "Data Analysis", level: 82 },
        { name: "Pandas/NumPy", level: 85 },
        { name: "Scikit-learn", level: 78 },
        { name: "Deep Learning", level: 75 },
      ],
    },
    {
      name: "DevOps & Tools",
      description: "Deployment, version control, and development tools",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 78 },
        { name: "Nginx", level: 72 },
      ],
    },
    {
      name: "Soft Skills",
      description: "Communication, collaboration, and problem-solving",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 88 },
        { name: "Teamwork", level: 90 },
        { name: "Project Management", level: 82 },
        { name: "Mentoring", level: 80 },
        { name: "Adaptability", level: 92 },
      ],
    },
  ];

  const proficiencyLevels = [
    { range: "90-100%", label: "Expert", color: "bg-green-500" },
    { range: "80-89%", label: "Advanced", color: "bg-blue-500" },
    { range: "70-79%", label: "Intermediate", color: "bg-yellow-500" },
    { range: "Below 70%", label: "Learning", color: "bg-gray-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="accent-line mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Skills</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive overview of my technical expertise, programming languages, tools, and
              soft skills developed through education and hands-on experience.
            </p>
          </div>
        </section>

        {/* Proficiency Legend */}
        <section className="py-12 border-b border-border bg-secondary/30">
          <div className="container">
            <p className="text-sm font-semibold text-muted-foreground mb-4">PROFICIENCY LEVELS</p>
            <div className="flex flex-wrap gap-6">
              {proficiencyLevels.map((level) => (
                <div key={level.label} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${level.color}`} />
                  <span className="text-sm text-foreground">
                    {level.label} ({level.range})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-16">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">{category.name}</h2>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.skills.map((skill) => {
                      let proficiencyColor = "bg-gray-500";
                      if (skill.level >= 90) proficiencyColor = "bg-green-500";
                      else if (skill.level >= 80) proficiencyColor = "bg-blue-500";
                      else if (skill.level >= 70) proficiencyColor = "bg-yellow-500";

                      return (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{skill.name}</h3>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                            <div
                              className={`h-full ${proficiencyColor} smooth-transition`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {index < skillCategories.length - 1 && (
                    <div className="section-divider mt-16" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section className="py-16 md:py-24 bg-secondary/30 border-t border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Competencies</h2>
              <p className="text-lg text-muted-foreground">
                Beyond the core technical skills, I have experience with various other tools and
                methodologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Agile Development",
                "Test-Driven Development",
                "Code Review",
                "Documentation",
                "API Design",
                "System Architecture",
                "Performance Optimization",
                "Security Best Practices",
                "Debugging & Troubleshooting",
                "Technical Writing",
                "Mentoring & Teaching",
                "Open Source Contribution",
              ].map((competency) => (
                <div
                  key={competency}
                  className="p-4 rounded-lg border border-border bg-card text-center smooth-transition hover:border-primary hover:bg-primary/5"
                >
                  <p className="font-semibold text-foreground">{competency}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Currently Learning</h2>
              <p className="text-lg text-muted-foreground">
                I believe in continuous learning and staying updated with emerging technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced System Design",
                  description:
                    "Deepening knowledge of scalable system architecture and distributed systems.",
                },
                {
                  title: "Rust Programming",
                  description:
                    "Learning Rust for systems programming and performance-critical applications.",
                },
                {
                  title: "Cloud Architecture",
                  description:
                    "Expanding expertise in cloud platforms and serverless architectures.",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
