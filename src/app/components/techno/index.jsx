import { FaTools, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiAstro, SiTailwindcss } from "react-icons/si";

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
    <section className="">
      <div className="flex items-center gap-2 text-textPrimary px-5 md:p-0 md:ml-96">
        <h1 className="font-semibold text-2xl">Tecnologias</h1>
        <FaTools />
        <h1 className="font-semibold text-2xl">Ferramentas</h1>
      </div>

      <div className="border-y-2 mt-4 border-slate-500 flex md:gap-20 whitespace-nowrap overflow-hidden ">
        <div className="animate-slide flex gap-4 md:gap-20">
          {Array(2)
            .fill()
            .map((_, index) => (
              <div key={index}>
                <ul className="flex my-4 gap-4 md:gap-20">
                  {technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex gap-4 items-center">
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
