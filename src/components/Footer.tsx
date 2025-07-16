// TODO: Remove this comment after deployment
import React from "react";
import bgGradient from "../assets/bg-gradient.png";
import docabyteLogo from "../assets/docabyteLogo.png";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaGlobe } from "react-icons/fa6";
import { openWhatsApp } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="pt-0 pb-12">
      {/* Línea blanca separadora superior */}
      <div className="mx-auto h-px bg-white opacity-80 mb-12" style={{ width: '60%' }} />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8">
        {/* Logo solo imagen */}
        <div className="flex items-center">
          <a 
            href="https://www.docabyte.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <img src={docabyteLogo} alt="Docabyte Logo" className="h-12" />
          </a>
        </div>
        {/* Navegación centrada */}
        <nav className="flex gap-8 text-white text-lg font-medium justify-center flex-1">
          <a href="#inicio" className="hover:text-cyan-400 transition">Inicio</a>
          <a href="#nosotros" className="hover:text-cyan-400 transition">Nosotros</a>
          <a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a>
          <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
        </nav>
        {/* Redes sociales a la derecha */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/people/Docabyte/61567687509169/?_rdr" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg p-2 transition">
            <FaFacebookF size={20} />
          </a>
          <button onClick={openWhatsApp} className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg p-2 transition">
            <FaWhatsapp size={20} />
          </button>
          <a href="https://www.instagram.com/docabyte/" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg p-2 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.docabyte.com/" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg p-2 transition">
            <FaGlobe size={20} />
          </a>
        </div>
      </div>
      {/* Línea blanca separadora inferior */}
      <div className="mx-auto h-px bg-white opacity-80 mt-12 mb-4" style={{ width: '60%' }} />
      {/* Copyright */}
      <div className="text-center text-white/80 text-base">
        Copyright © 2025 <a href="https://docabyte.com" className="text-white-400 hover:underline">Docabyte Agency</a> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer; 