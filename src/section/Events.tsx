// pages/Events.tsx
"use client";
import React from "react";
import Card from "../component/Card";
import cardData from "../data/moc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Events: React.FC = () => {
  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-18" style={{ fontFamily: "var(--font-third)" }}>We Plan Your Dream Destination Weddings and Events</h1>
<Swiper
  modules={[Autoplay]}
  spaceBetween={24}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  speed={600}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {cardData.map((item, index) => (
    <SwiperSlide key={index}>
      <Card
        imageSrc={item.imageSrc}
        title={item.title}
        description={item.description}
        buttonText={item.buttonText}
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
};

export default Events;
