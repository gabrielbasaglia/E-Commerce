import Magnetic from "@/app/components/magnetic";
import { Sidebar } from "../sidebar";
import bgmain from "@/assets/bg-main.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="relative flex ">
      <Image
        src={bgmain}
        alt="Background"
        className="w-full absolute z-0 opacity-5"
        style={{ zIndex: -1 }}
        width={2000}
        height={2000}
      />
      <Sidebar className="flex-shrink-0 z-10" />
      <section className="flex-grow ml-96 mr-16 mt-14 relative z-10 ">
        <div>
          <h3 className="text-textPrimary text-lg ">Olá, tudo bem por aí?</h3>
          <h1 className="text-5xl text-textPrimary">
            Eu sou o{" "}
            <span className="text-textSecondary">Gabriel Basaglia</span>
          </h1>
          <h2 className="text-textPrimary text-2xl">Desenvolvedor FullStack</h2>
          <p className="text-textPrimary text-md mt-5">
            Estudante de Engenharia de Software, apaixonado por tecnologia e
            programação. Atualmente, estou focado em desenvolvimento web e
            mobile.This is Astrofy a free and open-source template for your
            Personal Portfolio Website built with Astro and TailwindCSS. Create
            in minutes a website with Blog, CV, Project Section, Store and RSS
            Feed. I hope you find it useful!
          </p>
        </div>
      </section>
    </main>
  );
}
