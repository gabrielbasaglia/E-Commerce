"use client";
import bgmain from "@/assets/bg-main.png";
import Image from "next/image";
import { Techno } from "../techno";
import { Container } from "../container";

export default function HeroSection(toggleSidebar) {
  return (
    <main className="md:relative flex h-screen">
      <Image
        src={bgmain}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover opacity-5"
      />

      <Container>
        <section className="mx-auto z-10 w-full ">
          <div className="md:p-0 md:ml-96 md:mr-16 px-5">
            <h3 className="text-textPrimary text-lg ">Olá, tudo bem por aí?</h3>
            <h1 className="text-5xl text-textPrimary">
              Eu sou o{" "}
              <span className="text-textSecondary">Gabriel Basaglia</span>
            </h1>
            <h2 className="text-textPrimary text-2xl mt-4">
              Desenvolvedor FullStack
            </h2>
            <p className="text-textPrimary text-md mt-4 lg:mr-72 mb-14 md:w-1/2">
              Meu foco está em contribuir para soluções inovadoras, aprender
              continuamente e colaborar em projetos que desafiem minhas
              habilidades.
            </p>
          </div>
        </section>
        <Techno />
      </Container>
    </main>
  );
}
