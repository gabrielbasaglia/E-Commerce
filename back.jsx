"use client";
import React, { useEffect, useRef } from "react";
import { FaTools, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiAstro, SiTailwindcss } from "react-icons/si";

const technologies = [
  { icon: <FaReact size={56} />, label: "React" },
  { icon: <SiMongodb size={56} />, label: "Mongodb" },
  { icon: <FaNodeJs size={56} />, label: "NodeJs" },
  { icon: <TbBrandNextjs size={56} />, label: "NextJs" },
  { icon: <SiAstro size={56} />, label: "Astro" },
  { icon: <SiTailwindcss size={56} />, label: "Tailwind" },
  { icon: <FaPython size={56} />, label: "Python" },
];

export function Techno() {
  const iconsRef = useRef(null);

  useEffect(() => {
    const icons = iconsRef.current.querySelectorAll(".animate-slide");

    icons.forEach((icon, index) => {
      icon.style.transition = "transform 0.3s ease";
      icon.style.transform = `translateX(${index * 50}px)`;
    });
  }, []);

  return (
    <section className="md:ml-96">
      <div className="flex items-center gap-2 text-textPrimary">
        <h1 className="font-semibold text-2xl">Tecnologias</h1>
        <FaTools />
        <h1 className="font-semibold text-2xl">Ferramentas</h1>
      </div>
      <div
        ref={iconsRef}
        className="border-y-2 mt-4 overflow-hidden border-slate-500 flex gap-20 md:-ml-[85px]"
      >
        {technologies.map(({ icon, label }, index) => (
          <div
            key={index}
            className="flex gap-4 items-center transition-transform ease-in-out duration-300 transform animate-slide"
          >
            <p>{icon}</p>
            <p className="my-6">{label}</p>
          </div>
        ))}
        {/* Clones dos ícones */}
        {technologies.map(({ icon, label }, index) => (
          <div
            key={`clone-${index}`}
            className="flex gap-4 items-center transition-transform ease-in-out duration-300 transform animate-slide"
          >
            <p>{icon}</p>
            <p className="my-6">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
