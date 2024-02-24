import Image from "next/image";
import { Container } from "../container";

import geradorProposta from "../../../public/assets/projetos/gerador-propostas.png";
import blogAstro from "../../../public/assets/projetos/blog-astro.png";
import Instasany from "../../../public/assets/projetos/Instasany.png";

export default function Projetos() {
  return (
    <Container>
      <article className="mt-20 md:p-0 md:ml-48 md:mr-16 px-5">
        <div className="text-2xl">
          <h1 className="font-bold">
            Meus Projetos <span className="pl-2">&lt;/&gt;</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-4 ">
          <div className="relative flex flex-col justify-between min-w-80 w-80">
            <Image
              src={geradorProposta}
              alt="foto projeto 1"
              width={300}
              height={300}
              className="w-full flex-1"
            />
            <div className="absolute bottom-0 flex justify-between w-full px-2 ">
              <button className=" w-2/5 text-sm bg-textSecondary  text-white font-bold px-2 py-1 rounded self-start">
                <a
                  href="https://github.com/gabrielbasaglia/proposal-generator"
                  target="_blank"
                >
                  Github
                </a>
              </button>

              <button className="w-2/5 text-sm bg-textSecondary text-white font-bold px-2 py-1 rounded self-start">
                <a href="https://propostasmp.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </button>
            </div>
          </div>

          <div>
            <h1
              className="flex gap-2
            font-semibold text-xl mb-1"
            >
              <span>Projeto 1:</span> Gerador de proposta
            </h1>
            <p className="text-lg">
              O Gerador de Propostas é um aplicativo desenvolvido para atender à
              necessidade de criação de propostas detalhadas, comparando o
              consumo atual com o consumo proposto, e permitindo o rastreamento
              dos clientes cadastrados.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10  ">
          <div className="relative flex flex-col justify-between min-w-80 w-80">
            <Image
              src={blogAstro}
              alt="foto projeto 2"
              width={300}
              height={300}
              className="w-full flex-1"
            />
            <div className="absolute bottom-0 flex justify-between w-full px-2 ">
              <button className=" w-2/5 text-sm bg-textSecondary  text-white font-bold px-2 py-1 rounded self-start">
                <a
                  href="https://github.com/gabrielbasaglia/BlogAstro"
                  target="_blank"
                >
                  Github
                </a>
              </button>

              <button className="w-2/5 text-sm bg-textSecondary text-white font-bold px-2 py-1 rounded self-start">
                <a href="https://blog-astro-murex.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </button>
            </div>
          </div>

          <div>
            <h1
              className="flex gap-2
            font-semibold text-xl mb-1"
            >
              <span>Projeto 2:</span> Blog Astro
            </h1>
            <p className="text-lg">
              Desenvolvi um blog em Astro no qual explorei as funcionalidades
              básicas, como o consumo de APIs, a utilização de Markdown e o
              design colaborativo.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10 mb-20 ">
          <div className="relative flex flex-col justify-between min-w-80 w-80">
            <Image
              src={Instasany}
              alt="foto projeto 3"
              width={300}
              height={300}
              className="w-full flex-1"
            />
            <div className="absolute bottom-0 flex justify-between w-full px-2 ">
              <button className=" w-2/5 text-sm bg-textSecondary  text-white font-bold px-2 py-1 rounded self-start">
                <a
                  href="https://github.com/gabrielbasaglia/Instasany"
                  target="_blank"
                >
                  Github
                </a>
              </button>

              <button className="w-2/5 text-sm bg-textSecondary text-white font-bold px-2 py-1 rounded self-start">
                <a href="https://instasany-azure.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </button>
            </div>
          </div>

          <div>
            <h1
              className="flex gap-2
            font-semibold text-xl mb-1"
            >
              <span>Projeto 3:</span> Instasany
            </h1>
            <p className="text-lg">
              Este projeto foi desenvolvido com Nextjs14, Tailwindcss e Gsap
              para estudar animações.
            </p>
          </div>
        </div>
      </article>
    </Container>
  );
}
