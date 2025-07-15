"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Docabyte transformó la manera en que gestiono mi clínica y atiendo a mis pacientes.",
    name: "Dra. Laura Méndez",
    title: "Odontóloga General",
  },
  {
    quote: "El chatbot que nos implementaron ha reducido el tiempo que pasamos contestando mensajes.",
    name: "Dr. Rodrigo Sánchez",
    title: "Clínica de Medicina Familiar",
  },
  {
    quote: "Mi página web no solo se ve profesional, sino que facilita que mis pacientes agenden en línea.",
    name: "Dra. Fernanda Gómez",
    title: "Dermatóloga",
  },
  {
    quote: "El sistema de recordatorios automáticos nos ha ayudado a reducir inasistencias.",
    name: "Dr. Carlos Ibáñez",
    title: "Clínica Integral de Especialidades",
  },
  {
    quote: "El equipo de Docabyte entendió mis necesidades y las resolvió con tecnología simple pero poderosa.",
    name: "Dra. Sofía Peña",
    title: "Ginecóloga",
  },
  {
    quote: "Desde que tengo mi plataforma con Docabyte, he ganado más visibilidad y pacientes.",
    name: "Dr. Mauricio Torres",
    title: "Cardiólogo",
  }
];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[28rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
} 