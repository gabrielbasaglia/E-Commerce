"use client";
import Image from "next/image";
import { Techno } from "../techno";
import { Container } from "../container";
import Projetos from "../projetos";

import bgmain from "../../../public/assets/bg-main.png";
import cometa from "../../../public/assets/cometa.svg";
import { ThemeProvider } from "next-themes";

export default function HeroSection(toggleSidebar) {
  return (
    <ThemeProvider>
      <main className="md:relative flex h-screen flex-col">
        <div className="">
          <Image
            src={bgmain}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover opacity-5 "
          />
          <Image
            src={cometa}
            alt="foto de cometa"
            className="absolute top-0 right-0 
          w-44 h-44 md:w-80 md:h-80"
          />
        </div>

        <Container>
          <section className="mx-auto z-10 w-full mt-14">
            <div className="md:p-0 md:ml-48 md:mr-16 px-5">
              <h3 className="text-lg ">Olá, tudo bem por aí?</h3>
              <h1 className="text-5xl font-semibold  w-48 md:w-full">
                Eu sou o{" "}
                <span className="text-textSecondary">Gabriel Basaglia</span>
              </h1>
              <h2 className=" text-2xl mt-4">Desenvolvedor FullStack</h2>
              <p className=" text-md mt-4 lg:mr-72 md:w-1/2">
                Meu foco está em contribuir para soluções inovadoras, aprender
                continuamente e colaborar em projetos que desafiem minhas
                habilidades.
              </p>
            </div>
          </section>
        </Container>

        <Techno />
        <Projetos />
      </main>
    </ThemeProvider>
  );
}
