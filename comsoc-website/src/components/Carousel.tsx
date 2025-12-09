import React from "react";

import AGM1 from "../assets/AGM/AGM-1.jpeg";
import AGM2 from "../assets/AGM/AGM-2.jpg";
import AGM3 from "../assets/AGM/AGM-3.jpeg";
import AGM4 from "../assets/AGM/AGM-4.jpg";

import FV1 from "../assets/FieldVisit/FV-1.JPG";

import CF25_1 from "../assets/comfix_2025/IMG_3302.JPG";
import CF25_2 from "../assets/comfix_2025/IMG_3303.JPG";
import CF25_3 from "../assets/comfix_2025/IMG_3304.JPG";
import CF25_4 from "../assets/comfix_2025/IMG_3305.JPG";
import CF25_5 from "../assets/comfix_2025/IMG_3307.JPG";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Carousel.css";

type Slide = {
  title: string;
  description: string;
  url: string;
};

const slider1: Slide[] = [
  {
    title: "AGM Photo 1",
    description: "Annual General Meeting — opening and welcome.",
    url: AGM1,
  },
  {
    title: "AGM Photo 2",
    description: "Outgoing committee recognition and highlights.",
    url: AGM2,
  },
  {
    title: "AGM Photo 3",
    description: "New committee introduction and group photo.",
    url: AGM3,
  },
  {
    title: "AGM Photo 4",
    description: "Event activities and networking snapshots.",
    url: AGM4,
  },
];

const slider2: Slide[] = [
  {
    title: "Comfix '25 — 1",
    description: "Comfix 2025 kickoff and team briefings.",
    url: CF25_1,
  },
  {
    title: "Comfix '25 — 2",
    description: "Hands-on sessions and idea exploration.",
    url: CF25_2,
  },
  {
    title: "Comfix '25 — 3",
    description: "Prototyping, testing and feedback loops.",
    url: CF25_3,
  },
  {
    title: "Comfix '25 — 4",
    description: "Showcase of solutions and collaboration.",
    url: CF25_4,
  },
  {
    title: "Comfix '25 — 5",
    description: "Closing remarks and participant networking.",
    url: CF25_5,
  },
];

const slider3: Slide[] = [
  {
    title: "Field Visit — Datacenter",
    description: "A glimpse into resilient infrastructure operations.",
    url: FV1,
  },
];

const Carousel: React.FC = () => {
  return (
    <>
      <h1 className="carouselHeading">Our Events</h1>
      <div className="carousel flex flex-col gap-24">
        <div className="flex gap-20 w-[90%] ">
          <div className="carousel-content w-[40%] p-6">
            {/* <span>discover</span> */}
            <h1>AGM</h1>
            <hr />
            <p>
              The Annual General Meeting marked a key transition for the IEEE
              Communications Society Student Branch Chapter, celebrating the
              outgoing committee’s contributions while welcoming new leaders
              committed to advancing the chapter’s mission. The AGM highlighted
              major achievements from the past year, including ComFix and key
              industrial visits. With renewed goals and fresh perspectives, the
              chapter begins a new term focused on collaboration, growth, and
              strengthening its impact within the communications engineering
              community.
            </p>
          </div>

          <Swiper
            className="myswiper h-full slider-wide"
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 2,
            //   },
            //   768: {
            //     slidesPerView: 1,
            //   },
            //   1024: {
            //     slidesPerView: 2,
            //   },
            //   1560: {
            //     slidesPerView: 3,
            //   },
            // }}
            slidesPerView={"auto"}
            spaceBetween={24}
          >
            {slider1.map((data, idx) => (
              <SwiperSlide
                key={idx}
                style={{ backgroundImage: `url(${data.url})` }}
                className="myswiper-slider"
              >
                <div>
                  {/* <h2>{data.title}</h2> */}
                  <p>{data.description}</p>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-btn"
                  >
                    explore
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-8 w-[90%]">
          <Swiper
            className="myswiper h-full slider-wide"
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            spaceBetween={24}
          >
            {slider2.map((data, idx) => (
              <SwiperSlide
                key={idx}
                style={{ backgroundImage: `url(${data.url})` }}
                className="myswiper-slider"
              >
                <div>
                  {/* <h2>{data.title}</h2> */}
                  <p>{data.description}</p>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-btn"
                  >
                    explore
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="carousel-content w-[40%] p-6">
            <h1>Comfix</h1>
            <hr />
            <p>
              ComFix is the flagship annual ideathon organized by the IEEE
              Communications Society Student Branch Chapter of the University of
              Moratuwa, designed to inspire practical solutions to real
              communication challenges. The event brings together enthusiastic
              undergraduates to innovate, collaborate, and rethink how
              technology can strengthen modern connectivity. With two successful
              editions complete, the event continues to be a launchpad for fresh
              ideas, strengthening Sri Lanka’s digital landscape and inspiring
              the next generation of engineers.
            </p>
          </div>
        </div>

        <div className="flex gap-8 w-[90%]">
          <div className="carousel-content w-[40%] p-6">
            {/* <span>discover</span> */}
            <h1>Field Visit</h1>
            <hr />
            <p>
              The IEEE Communications Society Student Branch Chapter organized
              an industrial visit to the SLT IDC National Data Center, giving
              undergraduates firsthand exposure to Sri Lanka’s core digital
              infrastructure. Students explored how critical systems ensure
              uptime, security, and uninterrupted connectivity. The visit
              offered practical insights into server environments, network
              operations, and data management processes. By connecting academic
              concepts with real-world implementation, the experience
              strengthened students’ understanding of modern communication
              technologies and the engineering behind reliable digital
              communication.
            </p>
          </div>

          <Swiper
            className="myswiper w-full h-full"
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1560: {
                slidesPerView: 3,
              },
            }}
          >
            {slider3.map((data, idx) => (
              <SwiperSlide
                key={idx}
                style={{ backgroundImage: `url(${data.url})` }}
                className="myswiper-slider"
              >
                <div>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-btn"
                  >
                    explore
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
