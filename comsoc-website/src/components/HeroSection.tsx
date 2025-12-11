import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, Wifi, Signal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 network-pattern" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Radio 
          className="absolute top-1/4 left-[15%] w-8 h-8 text-primary-foreground/20 animate-float" 
          style={{ animationDelay: "0s" }}
        />
        <Wifi 
          className="absolute top-1/3 right-[20%] w-12 h-12 text-primary-foreground/15 animate-float" 
          style={{ animationDelay: "1s" }}
        />
        <Signal 
          className="absolute bottom-1/3 left-[25%] w-10 h-10 text-primary-foreground/20 animate-float" 
          style={{ animationDelay: "0.5s" }}
        />
        <div 
          className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border-2 border-primary-foreground/10 animate-pulse"
        />
        <div 
          className="absolute bottom-1/4 left-[10%] w-16 h-16 rounded-full border border-primary-foreground/10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} />
      </div>

      <div className="container-max section-padding relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-ieee-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              IEEE UoM Student Branch
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            IEEE Communication{" "}
            <span className="relative">
              Society
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--ieee-gold))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Empowering the next generation of communication engineers at the 
            University of Moratuwa through innovation, collaboration, and 
            cutting-edge technology exploration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/events">
                Explore Events
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in-up animation-delay-400">
            {[
              { value: "50+", label: "Active Members" },
              { value: "20+", label: "Events Yearly" },
              { value: "5+", label: "Years Strong" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
