import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, MapPin, ExternalLink, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import fv1 from "@/assets/FieldVisit/FV-1.JPG";

const images = [fv1];

const GALLERY_LINK = "https://www.facebook.com/share/p/1BfsoXa5xJ/";

const FieldVisitEvent = () => {
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
                Field Visit: SLT IDC National Data Center
              </h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80 animate-fade-in-up animation-delay-100">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  2025
                </span>
                {/* <span className="flex items-center gap-2">
                  <Users size={18} />
                  45+ Attendees
                </span> */}
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  SLT IDC, Sri Lanka
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
        <section className="py-16 bg-background">
          <div className="container-max section-padding">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video overflow-hidden rounded-2xl shadow-elevated">
                      <img
                        src={img}
                        alt={`Field Visit highlight ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 bg-muted/50">
          <div className="container-max section-padding">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About the Visit
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The IEEE Communications Society Student Branch Chapter
                  organized an industrial visit to the SLT IDC National Data
                  Center, giving undergraduates firsthand exposure to Sri
                  Lanka's core digital infrastructure. This visit provided a
                  unique opportunity to bridge the gap between academic learning
                  and real-world implementation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Students Learned
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    How critical systems ensure uptime, security, and
                    uninterrupted connectivity.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Practical insights into server environments and their
                    configurations.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Network operations and data management processes at scale.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    The engineering behind reliable digital communication
                    infrastructure.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Impact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By connecting academic concepts with real-world
                  implementation, the experience strengthened students'
                  understanding of modern communication technologies. The visit
                  offered invaluable insights into the backbone of Sri Lanka's
                  digital infrastructure and inspired students to pursue careers
                  in network engineering and data center management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* View Full Gallery CTA */}
        <section className="py-12 bg-muted/50">
          <div className="container-max section-padding">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Want to see more photos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out the complete photo gallery from the SLT Data Center visit on our Facebook page.
              </p>
              <a
                href={GALLERY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-gradient-to-r from-[#1877F2] to-[#0866FF] text-white font-medium rounded-xl hover:from-[#166FE5] hover:to-[#0756E0] transition-all hover:shadow-lg hover:shadow-blue-500/25 group"
              >
                <Camera size={20} className="group-hover:scale-110 transition-transform" />
                View Full Gallery on Facebook
                <ExternalLink size={16} className="ml-1 opacity-70" />
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container-max section-padding">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Event Gallery
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 group"
                >
                  <img
                    src={img}
                    alt={`Field Visit gallery ${index + 1}`}
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

export default FieldVisitEvent;
