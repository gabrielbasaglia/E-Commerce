import { FaTools, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiAstro, SiTailwindcss } from "react-icons/si";

export function Techno() {
  return (
    <section className="md:ml-96">
      <div className="flex items-center gap-2 text-textPrimary px-5 md:p-0">
        <h1 className="font-semibold text-2xl ">Tecnologias</h1>
        <FaTools />
        <h1 className="font-semibold text-2xl">Ferramentas</h1>
      </div>

      <div className="border-y-2 mt-4 border-slate-500 flex gap-20 md:-ml-[85px] whitespace-nowrap overflow-hidden">
        <div className=" animate-slide flex md:gap-20">
          <div className="">
            <ul className="flex my-4 gap-4 md:gap-20 ">
              <li className="flex gap-4 items-center">
                <FaReact size={56} />
                <p className="text-xl">React</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaNodeJs size={56} />
                <p className="text-xl">Nodejs</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaPython size={56} />
                <p className="text-xl">Python</p>
              </li>
              <li className="flex gap-4 items-center">
                <TbBrandNextjs size={56} />
                <p className="text-xl">Nextjs</p>
              </li>
              <li className="flex gap-4 items-center">
                <SiMongodb size={56} />
                <p className="text-xl">Mongodb</p>
              </li>
              <li className="flex gap-4 items-center">
                <SiAstro size={56} />
                <p className="text-xl">Astro</p>
              </li>
              <li className="flex gap-4 items-center">
                <SiTailwindcss size={56} />
                <p className="text-xl">Tailwindcss</p>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex my-4 gap-4 md:gap-20 ">
              <li className="flex gap-4 items-center">
                <FaReact size={56} />
                <p className="text-xl">React</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaNodeJs size={56} />
                <p className="text-xl">Nodejs</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaPython size={56} />
                <p className="text-xl">Python</p>
              </li>
              <li className="flex gap-4 items-center">
                <TbBrandNextjs size={56} />
                <p className="text-xl">Nextjs</p>
              </li>
              <li className="flex gap-4 items-center">
                <SiMongodb size={56} />
                <p className="text-xl">Mongodb</p>
              </li>
              <li className="flex gap-4 items-center">
                <SiAstro size={56} />
                <p className="text-xl">Astro</p>
              </li>
              <li className="flex gap-4 items-center">
                <SiTailwindcss size={56} />
                <p className="text-xl">Tailwindcss</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
