import { CheckCircle2, Zap, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Hands-on workshops and seminars on cutting-edge communication technologies",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with IEEE members and professionals worldwide",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Develop leadership skills and industry-relevant expertise",
  },
];

export function IntroSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Shaping the Future of{" "}
              <span className="text-gradient">Communication Engineering</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The IEEE Communications Society (IEEE ComSoc) is a leading global professional community dedicated to the advancement of communications and networking technologies.
                With members across 140+ countries, IEEE ComSoc brings together engineers, researchers, academics, industry professionals, and students who share a common goal to innovate, collaborate, and shape the future of communication technologies.
                Through research, publications, conferences, standards development, and technical activities, ComSoc fosters knowledge sharing and professional growth while contributing to technological progress that benefits humanity.
                As part of this global network, the IEEE ComSoc Student Branch Chapter of the University of Moratuwa connects students to international expertise, industry trends, and cutting-edge research in communications engineering.
            </p>

            <ul className="space-y-4">
              {[
                "Access to IEEE resources and publications",
                "Networking with industry professionals",
                "Hands-on project opportunities",
                "Leadership development programs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 bg-card rounded-xl shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
