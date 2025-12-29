import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import comfix1 from "@/assets/comfix_2025/IMG_3302.JPG";
import comfix2 from "@/assets/comfix_2025/IMG_3304.JPG";
import agmImage from "@/assets/AGM/AGM-1.jpeg";
import fieldVisitImage from "@/assets/FieldVisit/FV-1.JPG";

const upcomingEvents = [
  {
    title: "5G Technology Workshop",
    date: "January 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Engineering Auditorium",
    description:
      "Explore the fundamentals and applications of 5G technology with industry experts.",
    category: "Workshop",
    featured: true,
  },
  {
    title: "AI in Communications Seminar",
    date: "January 22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Lecture Hall 1",
    description:
      "Understanding the role of artificial intelligence in modern communication systems.",
    category: "Seminar",
    featured: false,
  },
  {
    title: "Hackathon: ConnectX 2025",
    date: "February 1-2, 2025",
    time: "24 Hours",
    location: "Innovation Lab",
    description:
      "Build innovative communication solutions in this 24-hour coding marathon.",
    category: "Competition",
    featured: true,
  },
];

const pastEvents = [
  {
    title: "Annual General Meeting (AGM)",
    date: "2024",
    attendees: 150,
    highlights:
      "Celebrated outgoing committee and welcomed new leadership; highlighted achievements including ComFix and key industrial visits.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    slug: "agm",
  },
  {
    title: "Field Visit: SLT IDC National Data Center",
    date: "2024",
    attendees: 45,
    highlights:
      "Hands-on exposure to Sri Lanka’s core digital infrastructure: uptime, security, server environments, and network operations.",
    image: fieldVisitImage,
    slug: "field-visit",
  },
  {
    title: "ComFix’24 – Inaugural Ideathon",
    date: "2024",
    attendees: 100,
    highlights:
      "First edition fostering teamwork and rapid problem‑solving; deconstructed modern communication systems for practical, tech‑driven solutions.",
    image: "/comfix2024.png",
    slug: "comfix-24",
  },
  {
    title: "ComFix’25 – Advanced Ideathon",
    date: "2025",
    attendees: 120,
    highlights:
      "Focused on industry‑oriented challenges in connectivity, network infrastructure, and digital communication; showcased rising interest and technical depth.",
    image: "/comfix2025.png",
    slug: "comfix-25",
  },
];

const categoryColors: Record<string, string> = {
  Workshop: "bg-primary",
  Seminar: "bg-accent",
  Competition: "bg-ieee-gold",
};

const Events = () => {
  const [stage1Open, setStage1Open] = useState(false);
  const [stage2Open, setStage2Open] = useState(false);
  const [stage3Open, setStage3Open] = useState(false);

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
                Discover our events and activities throughout the year.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full">
              <path
                d="M0 80L1440 80V40C1200 70 720 0 0 60V80Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Upcoming Events */}
        {/* <section className="py-20 bg-background">
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
        </section> */}

        {/* ComFix Spotlight */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#005485_0,transparent_35%),radial-gradient(circle_at_80%_10%,#00a0e0_0,transparent_30%)]"
            aria-hidden
          />
          <div className="container-max section-padding relative z-10">
            <div>
              <img src="/comfix2025.png" alt="ComFix Logo" className="h-40 mb-4" />
            </div>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div className="space-y-4">
                {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold">
                  <Sparkles size={16} />
                  ComFix 2025
                </div> */}
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Innovate. Iterate. Ignite.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ComFix 2025 is the second iteration of the communication
                  technology ideation competition organized by the IEEE
                  Communications Society (ComSoc) student branch chapter of the
                  University of Moratuwa. We aim to promote the innovative
                  thinking and technological know-how of undergraduates in the
                  field of Communication Technology by solving real-world
                  problems.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-sm text-foreground">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setStage1Open(true)}
                  >
                    Stage 1
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setStage2Open(true)}
                  >
                    Stage 2
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setStage3Open(true)}
                  >
                    Stage 3
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[comfix1, comfix2].map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  >
                    <img
                      src={img}
                      alt="ComFix highlight"
                      className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                ))}
              </div>
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
                A glimpse into our successful events and the memories we've
                created together.
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
                      <span className="text-sm text-primary-foreground/80">
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {event.highlights}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-primary">
                        {/* <Users size={14} />
                        <span>{event.attendees} Attendees</span> */}
                      </div>
                      <Link to={`/events/${event.slug}`}>
                        <Button variant="outline" size="sm">
                          More
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
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
                  description:
                    "Hands-on learning sessions and expert talks on emerging technologies in communication engineering.",
                },
                {
                  icon: Award,
                  title: "Competitions",
                  description:
                    "Hackathons, design challenges, and technical competitions to showcase your skills.",
                },
                {
                  icon: Users,
                  title: "Networking Events",
                  description:
                    "Industry visits, career fairs, and meetups to connect with professionals.",
                },
              ].map((type) => (
                <div key={type.title} className="text-center p-8">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Dialog open={stage1Open} onOpenChange={setStage1Open}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Stage 1 Guidelines</DialogTitle>
            <DialogDescription className="text-base">
              Focus on identifying a real-world problem that can be meaningfully
              addressed with communication technology.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-sm text-foreground">
            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Problem Identification
              </h3>
              <p className="text-muted-foreground">
                The main focus during stage 1 is problem identification. Pick a
                real-world problem (any field: agriculture, transportation,
                education, climate change, industrial applications, medicine,
                science, or within comms itself) where communication technology
                is central to the solution.
              </p>
              <p className="text-muted-foreground">
                You do not need a complete solution yet, but you must outline
                how communication technology can meaningfully solve the problem.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                What is Communication Technology?
              </h3>
              <p className="text-muted-foreground">
                An umbrella term intersecting many disciplines:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Telecommunications / Wireless communications</li>
                <li>Computer networking and Internet</li>
                <li>Internet of Things (IoT)</li>
                <li>Big Data</li>
                <li>Communication Software</li>
                <li>Cyber Security</li>
              </ul>
              <p className="text-muted-foreground text-sm">
                Find more areas at{" "}
                <a
                  href="https://www.comsoc.org/technical-activities"
                  className="text-primary underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  comsoc.org/technical-activities
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Problem Presentation
              </h3>
              <p className="text-muted-foreground">
                Submit a short report (PDF, max 3 pages) that includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Title (related to the problem)</li>
                <li>Team name</li>
                <li>Group member names / individual name</li>
                <li>
                  Explanation of the identified problem (data, statistics, etc.)
                </li>
                <li>Why the problem needs to be solved</li>
                <li>
                  How communication technology can be used for the solution (no
                  full solution required)
                </li>
                <li>References (if any)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Report Submission
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Format: PDF</li>
                <li>Length: maximum of 3 pages</li>
                <li>
                  Submission Deadline: <strong>30th March 2025</strong> (updates
                  via WhatsApp group)
                </li>
              </ul>
              <p className="text-muted-foreground">
                Submissions will be evaluated for impact and the connection of
                the solution to communication technology. Selected competitors
                advance to Stage 2.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Any changes or updates will be notified via the WhatsApp Group.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={stage2Open} onOpenChange={setStage2Open}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Stage 2 Guidelines</DialogTitle>
            <DialogDescription className="text-base">
              Develop and present a novel, feasible solution that meaningfully
              uses communication technology.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-sm text-foreground">
            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Developing the Solution
              </h3>
              <p className="text-muted-foreground">
                With your problem defined, focus on crafting a strong solution.
                Consider multiple alternatives, evaluate them, pick the best,
                assess feasibility, and outline a robust implementation plan.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Ensure the problem is well-defined (from Stage 1)</li>
                <li>Generate multiple solution alternatives</li>
                <li>Evaluate and select the best alternative</li>
                <li>Assess feasibility</li>
                <li>Draft a robust implementation plan</li>
              </ul>
              <p className="text-muted-foreground">
                A full implementation is not required, but present an effective
                plan with research, methodology, novelty, challenges, and
                expected outcomes.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Important</h3>
              <p className="text-muted-foreground">
                Your solution must incorporate appropriate communication
                technology (within IEEE ComSoc domains). A solution that is only
                a mobile app or website will not meet the criteria.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Solution Presentation
              </h3>
              <p className="text-muted-foreground">
                Submit a short report (PDF, max 10 pages) including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Title</li>
                <li>Team name and members</li>
                <li>Brief problem recap</li>
                <li>Considered alternatives</li>
                <li>Implementation methodology</li>
                <li>
                  Technical details (block diagrams, hardware, software,
                  algorithms, etc.) and how communication technology is used
                </li>
                <li>Feasibility, challenges, novelty, and impact</li>
                <li>References (if any)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Report Submission
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Format: PDF</li>
                <li>Length: maximum of 10 pages</li>
                <li>
                  Submission Deadline: <strong>To be announced</strong>
                </li>
              </ul>
              <p className="text-muted-foreground">
                10 competitors advance from Stage 2 to the final stage to pitch
                before the evaluation panel. Winners will be announced
                afterward.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Any changes or updates will be notified via the WhatsApp Group.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={stage3Open} onOpenChange={setStage3Open}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Stage 3 Guidelines</DialogTitle>
            <DialogDescription className="text-base">
              Prepare and deliver a concise presentation of your solution to the
              expert panel.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-sm text-foreground">
            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Presentation Preparation
              </h3>
              <p className="text-muted-foreground">
                Through Stages 1 and 2, you have developed a robust solution to
                a real-world problem using communication technology. Stage 3
                focuses on presenting that solution.
              </p>
              <p className="text-muted-foreground">
                Include the following when preparing your presentation:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Title</li>
                <li>Introduce your team and members</li>
                <li>Summarize the key report content</li>
                <li>Problem statement</li>
                <li>Solution (methodology and implementation)</li>
                <li>Use of communication technology in the solution</li>
                <li>Feasibility, challenges, budget (if possible)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Presentation Guidelines
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  You can use any tools or software to prepare the presentation.
                </li>
                <li>Presentation time must not exceed 10 minutes.</li>
                <li>If in a team, members can present different sections.</li>
                <li>
                  A 10-minute Q&A session with the judge panel follows the
                  presentation.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">
                Evaluation Date and Venue
              </h3>
              <p className="text-muted-foreground">
                The final round of ComFix2024 will take place in the ENTC1 hall
                of the Electronic and Telecommunication Department at the
                University of Moratuwa. Date will be announced later.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Events;
