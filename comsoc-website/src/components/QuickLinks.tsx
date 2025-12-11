import { Link } from "react-router-dom";
import { Calendar, Users, BookOpen, ArrowRight } from "lucide-react";

const links = [
  {
    title: "Upcoming Events",
    description: "Discover our workshops, seminars, and technical competitions.",
    icon: Calendar,
    href: "/events",
    color: "bg-primary",
  },
  {
    title: "Our Committee",
    description: "Meet the passionate team driving our chapter forward.",
    icon: Users,
    href: "/committee",
    color: "bg-accent",
  },
  {
    title: "About Us",
    description: "Learn about our mission, vision, and impact.",
    icon: BookOpen,
    href: "/about",
    color: "bg-ieee-blue-dark",
  },
];

export function QuickLinks() {
  return (
    <section className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Our Chapter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into what makes IEEE Communication Society UoM unique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={link.title}
              to={link.href}
              className="group card-elevated p-8 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${link.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <link.icon size={28} className="text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {link.description}
              </p>
              
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
