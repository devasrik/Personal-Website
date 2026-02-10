import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * NotFound Page (404)
 * Design Philosophy: Modern Minimalist with Technical Elegance
 * Features: Clean 404 error page with navigation back to home
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-24">
        <div className="container text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved. Let me help you
              find what you're looking for.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold smooth-transition hover:shadow-lg hover:scale-105">
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold smooth-transition hover:bg-primary hover:text-primary-foreground">
                View Projects
              </a>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-muted-foreground mb-6">Here are some helpful links:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Education", href: "/education" },
                { label: "Projects", href: "/projects" },
                { label: "Skills", href: "/skills" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-primary font-semibold smooth-transition hover:text-primary/80">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
