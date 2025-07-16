// TODO: Remove this comment after deployment
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsApp() {
  const phoneNumber = '524435110710'; // +52 para México, sin espacios ni guiones
  const message = encodeURIComponent('Hola, me gustaría saber sobre sus servicios para doctores....');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}
