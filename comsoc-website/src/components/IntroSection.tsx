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
              The IEEE Communication Society Student Branch Chapter at the University 
              of Moratuwa is dedicated to fostering excellence in communication 
              engineering education. We bridge the gap between academic learning and 
              real-world applications through innovative programs and collaborative 
              initiatives.
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
