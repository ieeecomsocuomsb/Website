import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Clock, ArrowRight, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "5G Technology Workshop",
    date: "January 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Engineering Auditorium",
    description: "Explore the fundamentals and applications of 5G technology with industry experts.",
    category: "Workshop",
    featured: true,
  },
  {
    title: "AI in Communications Seminar",
    date: "January 22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Lecture Hall 1",
    description: "Understanding the role of artificial intelligence in modern communication systems.",
    category: "Seminar",
    featured: false,
  },
  {
    title: "Hackathon: ConnectX 2025",
    date: "February 1-2, 2025",
    time: "24 Hours",
    location: "Innovation Lab",
    description: "Build innovative communication solutions in this 24-hour coding marathon.",
    category: "Competition",
    featured: true,
  },
];

const pastEvents = [
  {
    title: "IoT & Smart Cities Symposium",
    date: "November 2024",
    attendees: 150,
    highlights: "Featured speakers from Dialog and SLT",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
  },
  {
    title: "Antenna Design Competition",
    date: "October 2024",
    attendees: 80,
    highlights: "12 teams competed in designing efficient antennas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    title: "Network Security Workshop",
    date: "September 2024",
    attendees: 100,
    highlights: "Hands-on training with cybersecurity tools",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
  },
  {
    title: "Industry Visit - Mobitel",
    date: "August 2024",
    attendees: 45,
    highlights: "Tour of network operations center",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  Workshop: "bg-primary",
  Seminar: "bg-accent",
  Competition: "bg-ieee-gold",
};

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 network-pattern" />
          <div className="container-max section-padding relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Events & Activities
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in-up animation-delay-100">
                Discover our workshops, seminars, competitions, and networking 
                opportunities throughout the year.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full">
              <path d="M0 80L1440 80V40C1200 70 720 0 0 60V80Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="inline-block text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
                  What's Next
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Upcoming Events
                </h2>
              </div>
              <Calendar className="w-10 h-10 text-primary hidden sm:block" />
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`card-elevated p-6 md:p-8 ${event.featured ? "border-l-4 border-l-primary" : ""}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`${categoryColors[event.category]} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full`}>
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="bg-ieee-gold/20 text-foreground text-xs font-medium px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="lg:flex-shrink-0">
                      Register Now
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-muted/50">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
                Our History
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Past Events Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse into our successful events and the memories we've created together.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.title}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-sm text-primary-foreground/80">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {event.highlights}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Users size={14} />
                      <span>{event.attendees} Attendees</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What We Organize
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Workshops & Seminars",
                  description: "Hands-on learning sessions and expert talks on emerging technologies in communication engineering.",
                },
                {
                  icon: Award,
                  title: "Competitions",
                  description: "Hackathons, design challenges, and technical competitions to showcase your skills.",
                },
                {
                  icon: Users,
                  title: "Networking Events",
                  description: "Industry visits, career fairs, and meetups to connect with professionals.",
                },
              ].map((type) => (
                <div key={type.title} className="text-center p-8">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
