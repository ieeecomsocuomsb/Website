import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  Globe2,
  BookOpen,
  FlaskConical,
  Award,
  GraduationCap,
} from "lucide-react";

const impactAreas = [
  {
    icon: Globe2,
    title: "Global network",
    description: "Connect with thousands of professionals, researchers, and students worldwide.",
  },
  {
    icon: BookOpen,
    title: "Access to Knowledge",
    description: "Gain exposure to high-quality journals, magazines, conferences, and technical resources in communications and networking.",
  },
  {
    icon: FlaskConical,
    title: "Innovation & Research",
    description: "Stay at the forefront of emerging technologies such as wireless communications, networking, security, and signal processing.",
  },
  {
    icon: Award,
    title: "Recognition & Leadership",
    description: "Engage in volunteering, leadership roles, and awards that recognize technical and professional excellence.",
  },
  {
    icon: GraduationCap,
    title: "Student Empowerment",
    description: "Build skills, industry awareness, and global exposure that prepare students for successful careers.",
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
                  The IEEE Communications Society promotes technological innovation and fosters creation and sharing of information among  the global technical community. The Society provides services to members for their technical and professional advancement and forums for technical exchanges among professionals in academia, industry, and public institutions.
                </p>
              </div>

              {/* Vision */}
              <div className="card-elevated p-8 md:p-10">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bring the world together in harmony through communications and networking technology research, application, education, and incubation of new ideas.


                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Engineering */}
        <section className="py-20 bg-muted/50">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why <span className="text-primary">IEEE ComSoc</span> ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                IEEE ComSoc offers unparalleled opportunities for learning, collaboration and professional development in the field of communications technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                By being part of IEEE ComSoc, students and professionals become contributors to a global effort that connects the world through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Field of Interest */}
        <section className="py-20 bg-muted/30">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-1 gap-12 items-start">
              <div>
                <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                  Field of Interest
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Communications at the Core
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The IEEE Communications Society advances the science, technology, applications, and standards for organizing,
                  <br /> transmitting, and securing information over electronic, optical, and wireless channels and networks.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground text-sm">
                {[
                  "Systems and network architecture, control, and management",
                  "Protocols, software, and middleware",
                  "Quality of service, reliability, and security",
                  "Modulation, detection, coding, and signaling",
                  "Switching and routing",
                  "Mobile and portable communications",
                  "Terminals and other end devices",
                  "Networks for content distribution and distributed computing",
                  "Communications-based distributed resources control",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 bg-card rounded-lg p-3 shadow-sm"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
                    Founded in 2015, the University of Moratuwa IEEE Communication Society has emerged as a dynamic hub for students, researchers, and professionals passionate about advancing communication technologies. Our journey has been marked by milestones that reflect our commitment to innovation, collaboration, and the pursuit of knowledge. 
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
