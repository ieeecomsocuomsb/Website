import React from "react";
import "../../components/Carousel.css";

import CF24_1 from "../../assets/comfix 2024/IMG_3310.JPG";
import CF24_2 from "../../assets/comfix 2024/IMG_3312.JPG";
import CF25_1 from "../../assets/comfix_2025/IMG_3302.JPG";
import CF25_2 from "../../assets/comfix_2025/IMG_3305.JPG";

const ComfixPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f24] to-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight carouselHeading">
          ComFix
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl">
          ComFix is the premier ideathon by the IEEE Communications Society
          Student Branch Chapter, University of Moratuwa. It empowers
          undergraduates to break down real communication challenges and
          engineer practical, tech-driven solutions that strengthen modern
          connectivity.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={CF24_1}
            className="rounded-lg object-cover w-full h-64"
            alt="ComFix'24"
          />
          <img
            src={CF25_1}
            className="rounded-lg object-cover w-full h-64"
            alt="ComFix'25"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="bg-[#0d262b] rounded-xl p-6 border border-[#16434a]">
          <h2 className="text-3xl font-bold">ComFix – Vision & Impact</h2>
          <p className="mt-4 text-gray-300">
            As a recurring flagship initiative, ComFix nurtures teamwork, rapid
            problem-solving, and innovation. Each edition challenges
            participants to rethink communication systems and develop solutions
            with meaningful, real-world impact. The ideathon continues to
            evolve, fueling Sri Lanka’s digital growth and inspiring
            future-ready engineers.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-[#103138] rounded-lg p-4">
              Industry-aligned challenges
            </div>
            <div className="bg-[#103138] rounded-lg p-4">
              Mentorship & guidance
            </div>
            <div className="bg-[#103138] rounded-lg p-4">
              Prototype-driven outcomes
            </div>
            <div className="bg-[#103138] rounded-lg p-4">
              Team-based collaboration
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold">ComFix’24</h3>
            <p className="mt-3 text-gray-300">
              ComFix’24 marked the inaugural launch of this premier ideathon,
              introducing undergraduates to a dedicated platform for solving
              real-world communication challenges. As the first edition, it set
              the precedent by encouraging participants to deconstruct modern
              communication systems and engineer practical, tech-driven
              solutions. The event brought together diverse teams, fostering a
              culture of teamwork and rapid problem-solving. ComFix’24
              successfully laid the foundation for a recurring legacy, firmly
              establishing the chapter’s mission to advance communication
              technology within the university community.
            </p>
            <div className="mt-4 flex gap-4">
              <img
                src={CF24_2}
                className="rounded-lg object-cover w-40 h-28"
                alt="ComFix'24 highlight"
              />
              <img
                src={CF24_1}
                className="rounded-lg object-cover w-40 h-28"
                alt="ComFix'24 team"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">ComFix’25</h3>
            <p className="mt-3 text-gray-300">
              ComFix’25 elevated the ideathon to a new level by introducing
              complex, industry-oriented problem statements. This edition pushed
              boundaries, providing a space for undergraduates to tackle
              emerging challenges in advanced connectivity, network
              infrastructure, and digital communication. The event showcased a
              significant rise in student interest and technical depth,
              reaffirming ComFix as a valuable platform for innovation.
              ComFix’25 strengthened the chapter’s mission of nurturing
              future-ready engineers equipped to contribute to Sri Lanka’s
              digital growth.
            </p>
            <div className="mt-4 flex gap-4">
              <img
                src={CF25_2}
                className="rounded-lg object-cover w-40 h-28"
                alt="ComFix'25 highlight"
              />
              <img
                src={CF25_1}
                className="rounded-lg object-cover w-40 h-28"
                alt="ComFix'25 team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="bg-[#0d262b] rounded-xl p-6 border border-[#16434a] flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-semibold">
              Be part of the next ComFix
            </h4>
            <p className="mt-2 text-gray-300">
              Bring your ideas, build prototypes, and shape the future of
              communication.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="slider-btn">
              Register Interest
            </a>
            <a href="#" className="slider-btn">
              View Guidelines
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComfixPage;
