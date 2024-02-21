import Magnetic from "@/app/components/magnetic";
import bgmain from "@/assets/bg-main.png";
import Image from "next/image";

export default function HeroSection(toggleSidebar) {
  return (
    <>
      <main className="md:relative flex">
        <Image
          src={bgmain}
          alt="Background"
          className="absolute bg-fixed bg-cover w-screen h-screen  opacity-5"
        />

        <section className="flex-grow mx-auto p-4 md:p-0 md:ml-96 md:mr-16 mt-14 relative z-10 ">
          <div>
            <h3 className="text-textPrimary text-lg ">Olá, tudo bem por aí?</h3>
            <h1 className="text-5xl text-textPrimary">
              Eu sou o{" "}
              <span className="text-textSecondary">Gabriel Basaglia</span>
            </h1>
            <h2 className="text-textPrimary text-2xl">
              Desenvolvedor FullStack
            </h2>
            <p className="text-textPrimary text-md mt-5 lg:mr-72">
              This is Astrofy a free and open-source template for your Personal
              Portfolio Website built with Astro and TailwindCSS. Create in
              minutes a website with Blog, CV, Project Section, Store and RSS
              Feed. I hope you find it useful!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
