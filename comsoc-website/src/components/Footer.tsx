import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <div>
                <p className="text-lg font-bold text-background">
                  IEEE Communication Society
                </p>
                <p className="text-sm text-background/70">
                  University of Moratuwa Student Branch
                </p>
              </div>
            </div>
            <p className="text-background/80 max-w-md leading-relaxed">
              Empowering future communication engineers through knowledge sharing, 
              networking, and hands-on experiences in cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Committee", path: "/committee" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />
                <a
                  href="mailto:comsoc@ieee.uom.lk"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  comsoc@ieee.uom.lk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-background/70">
                  University of Moratuwa,<br />
                  Katubedda, Sri Lanka
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <social.icon size={18} className="text-background/70 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} IEEE Communication Society UoM. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-background/60">
            <span>Part of</span>
            <span className="font-semibold text-primary">IEEE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
