import { Link } from "react-router-dom";
import { Eye, BarChart3, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Insights", href: "/insights" },
    { name: "Reports", href: "/reports" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Blog", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate text-slate-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
                <BarChart3 className="w-3 h-3 text-primary-foreground absolute -bottom-0.5 -right-0.5" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Skill<span className="text-accent">Sight</span>
              </span>
            </Link>
            <p className="text-sm mb-6 max-w-sm leading-relaxed text-slate-muted">
              Real-time job market intelligence for India's tech workforce. 
              NLP-powered analytics revealing skills, salaries, and hiring trends.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg hover:bg-slate-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-light transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-light transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                contact@skillsight.app
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                Bhopal, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} SkillSight. All rights reserved.
            </p>
            <p className="text-sm">
              A Minor Project by RGPV Students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
