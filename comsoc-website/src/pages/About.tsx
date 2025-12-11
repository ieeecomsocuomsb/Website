import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Eye, Lightbulb, Users, Radio, Wifi, Satellite, Smartphone } from "lucide-react";

const impactAreas = [
  {
    icon: Radio,
    title: "Wireless Communications",
    description: "Exploring 5G, IoT, and next-generation wireless technologies",
  },
  {
    icon: Wifi,
    title: "Network Engineering",
    description: "Understanding network protocols, security, and infrastructure",
  },
  {
    icon: Satellite,
    title: "Signal Processing",
    description: "Digital and analog signal processing techniques",
  },
  {
    icon: Smartphone,
    title: "Mobile Technologies",
    description: "Mobile computing, apps, and communication systems",
  },
];

const About = () => {
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
                About Our Chapter
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in-up animation-delay-100">
                Discover the mission, vision, and impact of IEEE Communication Society 
                at the University of Moratuwa.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full">
              <path d="M0 80L1440 80V40C1200 70 720 0 0 60V80Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="card-elevated p-8 md:p-10">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To foster a vibrant community of communication engineering enthusiasts 
                  at the University of Moratuwa by providing platforms for learning, 
                  networking, and professional development. We aim to bridge the gap 
                  between academic knowledge and industry practices through innovative 
                  programs and collaborative initiatives.
                </p>
              </div>

              {/* Vision */}
              <div className="card-elevated p-8 md:p-10">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier student chapter that inspires and empowers the next 
                  generation of communication engineers in Sri Lanka. We envision a 
                  community where students can explore cutting-edge technologies, develop 
                  leadership skills, and contribute to the advancement of communication 
                  systems globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Engineering */}
        <section className="py-20 bg-muted/50">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                What We Study
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Communication Engineering
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Communication engineering is the backbone of our connected world, 
                enabling everything from smartphone calls to satellite communications 
                and the Internet of Things.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Chapter */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                  Our Chapter
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Student Branch at UoM
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The IEEE Communication Society Student Branch Chapter at the University 
                    of Moratuwa was established with the goal of creating a dynamic 
                    platform for students interested in communication technologies.
                  </p>
                  <p>
                    Our chapter organizes a variety of activities including technical 
                    workshops, guest lectures, industry visits, hackathons, and networking 
                    events. These initiatives help students stay updated with the latest 
                    trends in communication engineering while building valuable connections 
                    with industry professionals.
                  </p>
                  <p>
                    As part of the global IEEE network, our members have access to vast 
                    resources, publications, and opportunities for collaboration with 
                    peers worldwide.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Lightbulb, label: "Innovation", value: "Driving creative solutions" },
                  { icon: Users, label: "Community", value: "Building strong networks" },
                  { icon: Target, label: "Excellence", value: "Pursuing high standards" },
                  { icon: Eye, label: "Vision", value: "Shaping the future" },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary/50 p-6 rounded-xl text-center">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
