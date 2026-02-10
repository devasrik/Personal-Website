import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";

/**
 * Education Page
 * Design Philosophy: Black and White Minimalist
 * Features: Timeline of education, certifications, and coursework
 */
export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2022 - 2026",
      description:
        "Pursuing a comprehensive degree in Computer Science with focus on software engineering and machine learning.",
      gpa: "3.8/4.0",
      highlights: [
        "Dean's List (All Semesters)",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Machine Learning",
        "Active member of Computer Science Club",
      ],
    },
    {
      degree: "Advanced Placement Certifications",
      institution: "High School",
      period: "2018 - 2022",
      description: "Completed multiple AP courses with strong performance.",
      highlights: [
        "AP Computer Science Principles - 5",
        "AP Computer Science A - 5",
        "AP Calculus BC - 5",
        "AP Physics C - 4",
      ],
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development Bootcamp",
      issuer: "Online Platform",
      date: "2024",
      description: "Comprehensive training in modern web development technologies and practices.",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      description: "In-depth study of machine learning algorithms and applications.",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Certification demonstrating cloud computing knowledge and AWS services.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="accent-line mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Education</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              My academic journey and continuous learning through formal education, certifications,
              and self-directed study.
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Academic Background</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background mt-2" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"}`}>
                    <div className="p-6 rounded-lg border border-border bg-card ml-8 md:ml-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                          <p className="text-foreground font-semibold">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">{edu.description}</p>

                      {edu.gpa && (
                        <p className="text-sm font-semibold text-foreground mb-4">GPA: {edu.gpa}</p>
                      )}

                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-3">
                            <span className="text-foreground font-bold mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-secondary border-t border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
              <p className="text-lg text-muted-foreground">
                Professional certifications and specialized training programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-background">
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-foreground font-semibold text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-3">{cert.date}</p>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coursework Highlights */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container">
            <div className="mb-12">
              <div className="accent-line mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Relevant Coursework</h2>
              <p className="text-lg text-muted-foreground">
                Key courses that have shaped my technical foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Data Structures",
                "Algorithms",
                "Database Systems",
                "Web Development",
                "Machine Learning",
                "Software Engineering",
                "Computer Networks",
                "Operating Systems",
                "Discrete Mathematics",
                "Linear Algebra",
                "Object-Oriented Programming",
                "Artificial Intelligence",
              ].map((course) => (
                <div
                  key={course}
                  className="p-4 rounded-lg border border-border bg-card text-center transition-all duration-200 ease-out hover:border-foreground"
                >
                  <p className="font-semibold text-foreground">{course}</p>
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
