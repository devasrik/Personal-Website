import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

/**
 * Footer Component
 * Minimalist design with social links and contact information
 * Features: Clean layout, icon links, responsive design
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Computer Science student showcasing projects and skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground smooth-transition hover:text-primary inline-flex items-center gap-2"
                  >
                    {link}
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-foreground smooth-transition hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} CS Student Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
