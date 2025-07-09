import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionHeader from "@/components/ui/SectionHeader";
import { Laptop } from "lucide-react";
import vitalisImage from "@/assets/vitalis-demo.jpg";

export default function PortfolioScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <SectionHeader 
            smallTitle="NUESTRO TRABAJO"
            mainTitle="Proyectos que hemos desarrollado"
            icon={Laptop}
          />
        }
      >
        <img
          src={vitalisImage}
          alt="Vitalis - Plataforma médica profesional"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}