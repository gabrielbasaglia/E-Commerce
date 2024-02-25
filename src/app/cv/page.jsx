"use client";

import Link from "next/link";
import { ThemeProvider } from "next-themes";

import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Cv() {
  const numeroTelefone = "5516997511431";
  const urlWhatsapp = `https://wa.me/${numeroTelefone}`;
  const enderecoEmail = "gabagtc@outlook.com";

  return (
    <ThemeProvider>
      <section className="max-w-4xl h-full mx-auto flex mt-20 text-black bg-textPrimary">
        <div className="mt-20 mx-4 md:mx-16 w-full">
          <div className="w-full flex">
            <Link href="/" className="w-10">
              <FaArrowLeftLong />
            </Link>
          </div>
          <h1 className="text-xl first-line:font-semibold uppercase">
            Gabriel Tadeu Basaglia Coutinho
          </h1>

          <div className="flex mt-4 flex-col md:flex-row">
            <div className="  flex flex-col md:flex-1">
              <div className="flex gap-1 items-center">
                <a
                  href={`mailto:${enderecoEmail}`}
                  onMouseOver={() =>
                    (document.getElementById("email-icon").style.visibility =
                      "visible")
                  }
                  onMouseOut={() =>
                    (document.getElementById("email-icon").style.visibility =
                      "hidden")
                  }
                >
                  {enderecoEmail}
                </a>
                <MdOutlineMail
                  id="email-icon"
                  style={{ visibility: "hidden" }}
                />
              </div>

              <div className="flex gap-1 items-center">
                <a
                  href={urlWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  onMouseOver={() =>
                    (document.getElementById("whatsapp-icon").style.visibility =
                      "visible")
                  }
                  onMouseOut={() =>
                    (document.getElementById("whatsapp-icon").style.visibility =
                      "hidden")
                  }
                >
                  16 99751 1431
                </a>
                <FaWhatsapp
                  id="whatsapp-icon"
                  style={{ visibility: "hidden" }}
                />
              </div>
              <span>Ribeirão Preto</span>
            </div>

            <div className="flex flex-col md:items-end mt-2 md:mt-0">
              <a
                href="https://www.linkedin.com/in/gabrielbasaglia/"
                className="text-green-600 "
              >
                https://www.linkedin.com/in/gabrielbasaglia/
              </a>
              <a
                href="https://github.com/gabrielbasaglia"
                className="text-green-600 "
              >
                https://github.com/gabrielbasaglia
              </a>
              <a
                href="https://gabrielbasaglia.tech/"
                className="text-green-600 "
              >
                https://gabrielbasaglia.tech/
              </a>
            </div>
          </div>

          <div className="mt-14">
            <div>
              <h1 className="uppercase font-medium">Apresentação</h1>
              <p className="mt-2">
                Carreira desenvolvida na área Comercial, com experiência na
                liderança de equipes, habilidade de planejamento e estratégia,
                gestão de vendas, prospecção e fidelização de clientes.
                Estudando Análise e Desenvolvimento de Sistemas. React | Next |
                Astro | NodeJS | MongoDb | Python
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div>
              <h1 className="uppercase font-medium">FORMAÇÃO</h1>
              <p className="mt-2 flex flex-col font-semibold">
                Análise e Desenvolvimento de Sistemas
                <span className="text-green-600 text-sm font-normal">
                  Estácio
                </span>
                <span className="text-sm font-normal">Julho 2023</span>
              </p>
            </div>
          </div>

          <div className="mt-14">
            <div>
              <h1 className="uppercase font-medium">
                EXPERIÊNCIA PROFISSIONAL
              </h1>

              <div className="mt-4 flex flex-col font-semibold">
                <span>Consultor executivo de vendas</span>
                <span className="text-green-600 text-sm font-normal">
                  AXS Energia
                </span>
                <span className="text-sm font-normal">Abril 2023</span>
                <p className="font-normal mt-2">
                  Responsável pela captação de novos negócios no ramo da energia
                  solar, todas as metas superadas desde o primeiro mês,
                  agraciado pelo prêmio de vendedor destaque
                </p>
              </div>
              <div className="mt-14 flex flex-col font-semibold">
                <span>Consultor executivo de vendas</span>
                <span className="text-green-600 text-sm font-normal">
                  AXS Energia
                </span>
                <span className="text-sm font-normal">Abril 2023</span>
                <p className="font-normal mt-2">
                  Responsável pela captação de novos negócios no ramo da energia
                  solar, todas as metas superadas desde o primeiro mês,
                  agraciado pelo prêmio de vendedor destaque
                </p>
              </div>
              <div className="mt-14 flex flex-col font-semibold">
                <span>Consultor executivo de vendas</span>
                <span className="text-green-600 text-sm font-normal">
                  AXS Energia
                </span>
                <span className="text-sm font-normal">Abril 2023</span>
                <p className="font-normal mt-2">
                  Responsável pela captação de novos negócios no ramo da energia
                  solar, todas as metas superadas desde o primeiro mês,
                  agraciado pelo prêmio de vendedor destaque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
