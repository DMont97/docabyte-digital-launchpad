import React from "react";
import mockup from "../assets/mockup.png";
import bgGradient from "../assets/bg-gradient.png";
import { openWhatsApp } from '@/lib/utils';

const CTA = () => {
  return (
    <div id="contacto" className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 px-8 pt-16 pb-16">
      {/* Texto */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-left">
          La salud digital no es el futuro. Es el presente.
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl text-left">
          Da el siguiente paso en la transformación de tu clínica o consultorio.
        </p>
        <a
          href="#"
          className="bg-white text-blue-700 font-bold px-8 py-3 rounded-xl text-lg shadow-none hover:bg-blue-50 transition w-auto"
          style={{ minWidth: 0, maxWidth: "fit-content" }}
          onClick={e => { e.preventDefault(); openWhatsApp(); }}
        >
          Contáctanos
        </a>
      </div>
      {/* Mockup sobresaliente */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        <img
          src={mockup}
          alt="Mockup Vitalis"
          className="w-[340px] md:w-[420px] lg:w-[480px] relative z-20"
          style={{
            maxWidth: "100%",
            boxShadow: "none",
            position: "absolute",
            top: "-140px",
            right: 0,
            background: "none",
            height: "auto",
            objectFit: "contain",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default CTA;