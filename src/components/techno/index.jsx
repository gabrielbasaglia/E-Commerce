import { FaTools, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiAstro, SiTailwindcss } from "react-icons/si";
import { Container } from "../container";

const technologies = [
  { icon: <FaReact size={56} />, name: "React" },
  { icon: <FaNodeJs size={56} />, name: "Nodejs" },
  { icon: <FaPython size={56} />, name: "Python" },
  { icon: <TbBrandNextjs size={56} />, name: "Nextjs" },
  { icon: <SiMongodb size={56} />, name: "Mongodb" },
  { icon: <SiAstro size={56} />, name: "Astro" },
  { icon: <SiTailwindcss size={56} />, name: "Tailwindcss" },
];

export function Techno() {
  return (
    <section className="mt-20">
      <Container>
        <div className="flex items-center gap-2 px-5 md:p-0 md:ml-48">
          <h1 className="font-semibold text-2xl">Tecnologias</h1>
          <FaTools />
          <h1 className="font-semibold text-2xl">Ferramentas</h1>
        </div>
      </Container>

      <div className="border-y-2 mt-4 border-slate-500 flex md:gap-20 whitespace-nowrap overflow-hidden w-full">
        <div className="animate-slide flex gap-4 md:gap-20">
          {Array(2)
            .fill()
            .map((_, index) => (
              <div key={index}>
                <ul className="flex my-4 gap-4 md:gap-20 ">
                  {technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="flex gap-4 items-center hover:scale-125 ease-in duration-300"
                    >
                      {tech.icon}
                      <p className="text-xl">{tech.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
