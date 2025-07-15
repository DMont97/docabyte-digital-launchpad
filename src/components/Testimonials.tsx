"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Handshake } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    quote: "El equipo de Docabyte entendió mis necesidades y las resolvió con tecnología simple pero poderosa.",
    name: "Dra. Sofía Peña",
    title: "Ginecóloga",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    quote: "Desde que tengo mi plataforma con Docabyte, he ganado más visibilidad y pacientes.",
    name: "Dr. Mauricio Torres",
    title: "Cardiólogo",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  },
  {
    quote: "Docabyte transformó la manera en la que gestiono mi clínica y atiendo a mis pacientes.",
    name: "Dra. Laura Méndez",
    title: "Odontóloga General",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "El chatbot que nos implementaron ha reducido el tiempo que pasamos contestando mensajes.",
    name: "Dr. Rodrigo Sánchez",
    title: "Clínica de Medicina Familiar",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Mi página web no solo se ve profesional, sino que facilita que mis pacientes agenden en línea.",
    name: "Dra. Fernanda Gómez",
    title: "Dermatóloga",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-black mt-20 mb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header exacto */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-5 h-5 text-cyan-600" strokeWidth={2} />
            <span className="font-inter font-semibold text-sm uppercase tracking-wider text-cyan-600">
              Testimonios de nuestros clientes
            </span>
          </div>
          <h2 className="font-heading font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Lo que dicen los profesionales de salud<br />sobre Docabyte
            </span>
          </h2>
        </div>
        {/* Slider restaurado */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          speed={1200}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-blue-50 rounded-2xl shadow-md p-8 flex flex-col h-full justify-between border border-blue-100 mx-2">
                <p className="text-lg text-gray-800 mb-6 font-medium">"{t.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow" />
                  <div>
                    <div className="font-semibold text-blue-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}