import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const committeeMembers = [
  {
    name: "Kavindu Perera",
    position: "Chairperson",
    department: "Electronics & Telecom Engineering",
    bio: "Leading the chapter with a vision to connect students with industry leaders and cutting-edge research.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sachini Fernando",
    position: "Vice Chairperson",
    department: "Electronics & Telecom Engineering",
    bio: "Passionate about wireless communications and dedicated to organizing impactful technical events.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dinesh Rajapaksha",
    position: "Secretary",
    department: "Electronics & Telecom Engineering",
    bio: "Ensuring smooth operations and effective communication within the chapter.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Nethmi Silva",
    position: "Treasurer",
    department: "Electronics & Telecom Engineering",
    bio: "Managing finances and sponsorships to support our ambitious initiatives.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ashan Wickrama",
    position: "Technical Lead",
    department: "Electronics & Telecom Engineering",
    bio: "Driving technical workshops and hands-on projects in signal processing and networking.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Kaveesha Dias",
    position: "Events Coordinator",
    department: "Electronics & Telecom Engineering",
    bio: "Creating memorable experiences through well-organized events and competitions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Tharindu Jayawardena",
    position: "Marketing Lead",
    department: "Electronics & Telecom Engineering",
    bio: "Building our brand presence and engaging with the student community.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Amaya Gunaratne",
    position: "Editorial Lead",
    department: "Electronics & Telecom Engineering",
    bio: "Crafting compelling content to share our chapter's achievements and knowledge.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
  },
];

const Committee = () => {
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
                Our Committee
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in-up animation-delay-100">
                Meet the passionate team driving IEEE Communication Society 
                at the University of Moratuwa forward.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full">
              <path d="M0 80L1440 80V40C1200 70 720 0 0 60V80Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Committee Grid */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                2024/25 Committee
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated individuals working together to create meaningful experiences 
                and opportunities for our members.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {committeeMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a
                        href="#"
                        className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-primary bg-secondary px-3 py-1 rounded-full mb-3">
                      {member.position}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.department}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-muted/50">
          <div className="container-max section-padding">
            <div className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 network-pattern opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                  Want to Join the Team?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals to contribute to our chapter. 
                  Reach out to learn about upcoming opportunities.
                </p>
                <a
                  href="mailto:ieeecomsocuomsb@gmail.com"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  <Mail size={20} />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Committee;
