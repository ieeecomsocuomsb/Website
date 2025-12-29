import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/assets/comfix_2025/IMG_3302.JPG";
import img2 from "@/assets/comfix_2025/IMG_3303.JPG";
import img3 from "@/assets/comfix_2025/IMG_3304.JPG";
import img4 from "@/assets/comfix_2025/IMG_3305.JPG";
import img5 from "@/assets/comfix_2025/IMG_3307.JPG";

const images = [img1, img2, img3, img4, img5];

const ComFix25Event = () => {
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
                ComFix'25 – Advanced Ideathon
              </h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80 animate-fade-in-up animation-delay-100">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  2025
                </span>
                {/* <span className="flex items-center gap-2">
                  <Users size={18} />
                  120+ Participants
                </span> */}
                <span className="flex items-center gap-2">
                  <TrendingUp size={18} />
                  Second Edition
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
                        alt={`ComFix'25 highlight ${index + 1}`}
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
                  About ComFix'25
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ComFix'25 elevated the ideathon to a new level by introducing
                  complex, industry-oriented problem statements. This edition
                  pushed boundaries, providing a space for undergraduates to
                  tackle emerging challenges in advanced connectivity, network
                  infrastructure, and digital communication.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Industry-Oriented
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complex problem statements from real industry challenges in
                    connectivity and network infrastructure.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Growing Interest
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Significant rise in student participation and technical
                    depth compared to the inaugural edition.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Key Focus Areas
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Advanced connectivity solutions for modern communication
                    challenges.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Network infrastructure optimization and innovation.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Digital communication technologies and their applications.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Real-world problem solving with practical implementation
                    plans.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Impact & Achievement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The event showcased a significant rise in student interest and
                  technical depth, reaffirming ComFix as a valuable platform for
                  innovation. ComFix'25 strengthened the chapter's mission of
                  nurturing the next generation of communication technology
                  innovators and established the event as a flagship competition
                  within the university's technical community.
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
                    alt={`ComFix'25 gallery ${index + 1}`}
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

export default ComFix25Event;
