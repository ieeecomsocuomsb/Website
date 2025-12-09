import React from "react";

import AGM1 from "../assets/AGM_images/AGM-1.jpeg";
import AGM2 from "../assets/AGM_images/AGM-2.jpeg";
import AGM3 from "../assets/AGM_images/AGM-3.jpeg";
import AGM4 from "../assets/AGM_images/AGM-4.jpeg";

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

const slider: Slide[] = [
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

const Carousel: React.FC = () => {
  return (
    <div className="carousel flex flex-col">
      <div className="flex gap-8 w-[90%]">
        <div className="carousel-content w-[40%] p-6">
          {/* <span>discover</span> */}
          <h1>AGM</h1>
          <hr />
          <p>
            Communication continues to influence the modern world, and strong
            leadership ensures that this vision is carried forward. The Annual
            General Meeting of the IEEE Communications Society Student Branch
            Chapter of the University of Moratuwa celebrated the efforts of the
            outgoing committee while welcoming new leaders committed to
            expanding communication-focused initiatives. The event reflected on
            the chapter’s key activities, including ComFix and the Datacenter
            Field Visit.
          </p>
        </div>

        <Swiper
          className="myswiper w-[80%]"
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
            delay: 5000,
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
          {slider.map((data, idx) => (
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
            delay: 5000,
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
          {slider.map((data, idx) => (
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
        <div className="carousel-content w-[40%] p-6">
          <h1>Comfix</h1>
          <hr />
          <p>
            Communication continues to shape the modern world through its
            influence on connectivity, information flow, and emerging
            technologies. In this evolving landscape, Comfix’25 provided
            undergraduates a space to explore real communication challenges and
            develop innovative ideas that strengthen future communication
            systems. Organized by the IEEE Communications Society Student Branch
            Chapter of the University of Moratuwa, the event fostered analytical
            thinking and creative problem-solving.
          </p>
        </div>
      </div>

      <div className="flex gap-8 w-[90%]">
        <div className="carousel-content w-[40%] p-6">
          {/* <span>discover</span> */}
          <h1>Field Visit</h1>
          <hr />
          <p>
            Modern communication relies heavily on resilient digital
            infrastructure, and datacenters stand at the core of this global
            connectivity. To help undergraduates gain exposure to these
            essential systems, the IEEE Communications Society Student Branch
            Chapter of the University of Moratuwa organized a field visit to a
            national-level datacenter, offering a first-hand look at how uptime,
            reliability, and secure data flow are maintained.
          </p>
          <br />
          <p>
            The visit allowed students to observe the critical engineering
            behind communication networks that support daily digital
            interactions. This experience strengthened their understanding of
            how robust communication architectures sustain the increasingly
            interconnected world around us.
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
            delay: 5000,
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
          {slider.map((data, idx) => (
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
  );
};

export default Carousel;
