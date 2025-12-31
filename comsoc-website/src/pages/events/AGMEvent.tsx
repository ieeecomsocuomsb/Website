import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, ExternalLink, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import agm1 from "@/assets/AGM/AGM-1.jpeg";
import agm2 from "@/assets/AGM/AGM-2.jpg";
import agm3 from "@/assets/AGM/AGM-3.jpeg";
import agm4 from "@/assets/AGM/AGM-4.jpg";

const images = [agm1, agm2, agm3, agm4];

const GALLERY_LINK = "https://www.facebook.com/share/p/1DNxLpciPa/";

const AGMEvent = () => {
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
                Annual General Meeting (AGM)
              </h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80 animate-fade-in-up animation-delay-100">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  2025
                </span>
                {/* <span className="flex items-center gap-2">
                  <Users size={18} />
                  150+ Attendees
                </span> */}
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
                        alt={`AGM highlight ${index + 1}`}
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
                  About the Event
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Annual General Meeting marked a key transition for the
                  IEEE Communications Society Student Branch Chapter,
                  celebrating the outgoing committee's contributions while
                  welcoming new leaders committed to advancing the chapter's
                  mission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Celebrated the outgoing committee's achievements and
                    contributions throughout their term.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Welcomed and introduced new leadership committed to
                    advancing the chapter's mission.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Highlighted major achievements from the past year, including
                    ComFix and key industrial visits.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Set renewed goals and fresh perspectives for the upcoming
                    term.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Looking Forward
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  With renewed goals and fresh perspectives, the chapter begins
                  a new term focused on collaboration, growth, and strengthening
                  its impact within the communications engineering community.
                  The AGM set the stage for an exciting year of innovation and
                  engagement.
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
                Check out the complete photo gallery from AGM 2025 on our
                Facebook page.
              </p>
              <a
                href={GALLERY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-gradient-to-r from-[#1877F2] to-[#0866FF] text-white font-medium rounded-xl hover:from-[#166FE5] hover:to-[#0756E0] transition-all hover:shadow-lg hover:shadow-blue-500/25 group"
              >
                <Camera
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 group"
                >
                  <img
                    src={img}
                    alt={`AGM gallery ${index + 1}`}
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

export default AGMEvent;
