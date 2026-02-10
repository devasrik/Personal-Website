import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useState } from "react";

/**
 * Contact Page
 * Design Philosophy: Black and White Minimalist
 * Features: Contact form, social links, contact information
 */
export default function Contact() {
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
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
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
    {
      icon: MapPin,
      label: "Location",
      value: "City, State, USA",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@example.com",
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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I'm always interested in hearing about new projects, opportunities, and collaborations.
              Feel free to reach out!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      {contactInfo.map((info) => {
                        const Icon = info.icon;
                        return (
                          <div
                            key={info.label}
                            className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card transition-all duration-200 ease-out hover:border-foreground hover:bg-secondary cursor-pointer"
                            onClick={() => {
                              if (info.href.startsWith('mailto:') || info.href.startsWith('tel:')) {
                                window.location.href = info.href;
                              }
                            }}
                          >
                            <div className="p-2 rounded-lg bg-secondary">
                              <Icon className="text-foreground" size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-muted-foreground">
                                {info.label}
                              </p>
                              <p className="text-foreground font-semibold">{info.value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">Connect With Me</h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <button
                            key={social.label}
                            onClick={() => window.open(social.href, '_blank')}
                            className="p-3 rounded-lg border border-border bg-card text-foreground transition-all duration-200 ease-out hover:bg-foreground hover:text-background hover:border-foreground"
                            aria-label={social.label}
                          >
                            <Icon size={20} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="p-4 rounded-lg bg-secondary border border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">Response Time:</span> I typically
                      respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="p-8 rounded-lg border border-border bg-card">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h2>

                  {submitted && (
                    <div className="mb-6 p-4 rounded-lg bg-secondary border border-border">
                      <p className="text-foreground font-semibold">
                        Thank you for your message! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email Field */}
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Subject Field */}
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20"
                        placeholder="What is this about?"
                      />
                    </div>

                    {/* Message Field */}
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground transition-all duration-200 ease-out focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold transition-all duration-200 ease-out hover:shadow-lg hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
