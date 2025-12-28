import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Award, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/assets/comfix 2024/IMG_3309.JPG";
import img2 from "@/assets/comfix 2024/IMG_3310.JPG";
import img3 from "@/assets/comfix 2024/IMG_3311.JPG";
import img4 from "@/assets/comfix 2024/IMG_3312.JPG";
import img5 from "@/assets/comfix 2024/IMG_3313.JPG";

const images = [img1, img2, img3, img4, img5];

const ComFix24Event = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 network-pattern" />
          <div className="container-max section-padding relative z-10">
            <Link to="/events">
              <Button
                variant="ghost"
                className="mb-6 text-primary-foreground hover:bg-white/10"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Events
              </Button>
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
                ComFix'24 – Inaugural Ideathon
              </h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80 animate-fade-in-up animation-delay-100">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  2024
                </span>
                <span className="flex items-center gap-2">
                  <Users size={18} />
                  100+ Participants
                </span>
                <span className="flex items-center gap-2">
                  <Award size={18} />
                  First Edition
                </span>
              </div>
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

        {/* Image Carousel */}
        {/* <section className="py-16 bg-background">
          <div className="container-max section-padding">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video overflow-hidden rounded-2xl shadow-elevated">
                      <img
                        src={img}
                        alt={`ComFix'24 highlight ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </section> */}

        {/* Event Details */}
        <section className="py-16 bg-muted/50">
          <div className="container-max section-padding">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About ComFix'24
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ComFix'24 marked the inaugural launch of this premier
                  ideathon, introducing undergraduates to a dedicated platform
                  for solving real-world communication challenges. As the first
                  edition, it set the precedent by encouraging participants to
                  deconstruct modern communication systems and engineer
                  practical, tech-driven solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Innovation Focus
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Participants deconstructed modern communication systems to
                    develop practical, tech-driven solutions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Teamwork Culture
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Brought together diverse teams, fostering collaboration and
                    rapid problem-solving skills.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Key Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    First-ever edition of the ComFix ideathon series, setting a
                    strong foundation.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Multiple teams competed to solve real-world communication
                    challenges.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Expert mentorship and guidance throughout the competition.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Successfully established the chapter's mission to advance
                    communication technology.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Legacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ComFix'24 successfully laid the foundation for a recurring
                  legacy, firmly establishing the chapter's mission to advance
                  communication technology within the university community. The
                  event demonstrated the potential of undergraduate students to
                  tackle complex communication challenges with innovative
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container-max section-padding">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Event Gallery
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 group"
                >
                  <img
                    src={img}
                    alt={`ComFix'24 gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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

export default ComFix24Event;
