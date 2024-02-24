import Image from "next/image";
import { Container } from "../container";

import geradorProposta from "../../../public/assets/projetos/gerador-propostas.png";

export default function Projetos() {
  return (
    <Container>
      <article className="mt-20 md:p-0 md:ml-96 md:mr-16  ">
        <div className="text-2xl">
          <h1 className="font-bold">
            Meus Projetos <span className="pl-2">&lt;/&gt;</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-4 ">
          <div className="relative flex flex-col justify-between w-full">
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
      </article>
    </Container>
  );
}
