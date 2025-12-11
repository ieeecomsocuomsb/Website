import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Committee", path: "/committee" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#ffff]/85 backdrop-blur-md shadow-md py-3"
          : "bg-[#005485]/85 py-5 border-b-[3px] border-white"
      )}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#005485] rounded-lg flex items-center justify-center shadow-[0_1px_5px_rgba(255,255,255,0.35)] group-hover:shadow-[0_6px_20px_rgba(255,255,255,0.45)] transition-shadow">
              <img src="/favicon.png" alt="Logo" className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
                <p
                className={cn(
                  "text-sm font-semibold leading-tight",
                  isScrolled ? "text-[#005485]" : "text-white"
                )}
                >
                IEEE ComSoc
                </p>
              <p 
              className={cn(
                "text-xs",
                isScrolled ? "text-muted-foreground" : "text-[#a9aeb1]"
                )}
              >
                University of Moratuwa
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link py-1 transition-colors",
                  isScrolled ? "nav-link-scrolled" : "nav-link-unscrolled",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-muted-foreground hover:text-white",
                  location.pathname === link.path &&
                    (isScrolled ? "text-primary" : "text-white")
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 mt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 bg-card rounded-xl p-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
