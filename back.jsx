"use client";

import { useState } from "react";
import Image from "next/image";
import Magnetic from "../magnetic";

import { bubble as Menu } from "react-burger-menu";

import { HamburgerIcon } from "../hamburguer-icon";
import fotoperfil from "@/assets/foto-pessoal.png";
import asas from "@/assets/asas.svg";
import ship from "@/assets/socialship.svg";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Menu>
      <aside>
        <button onClick={toggleSidebar}>
          <HamburgerIcon />
        </button>

        <div className="mt-14">
          <Image
            src={fotoperfil}
            alt="Foto de perfil"
            width={200}
            height={200}
            className="rounded-full"
          />
          <Image
            src={asas}
            alt="Asas"
            width={200}
            height={200}
            className="mb-6 mt-3"
          />

          <ul className=" text-textSecondary">
            <Magnetic>
              <li className="mb-4 text-lg font-semibold hover:text-red-100 duration-300 ease-out">
                <a href="">Projetos</a>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="mb-4 text-lg font-semibold hover:text-red-100 duration-300 ease-out">
                <a href="">Habilidades</a>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="mb-4 text-lg font-semibold hover:text-red-100 duration-300 ease-out">
                <a href="">Sobre</a>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="mb-4 text-lg font-semibold hover:text-red-100 duration-300 ease-out">
                <a href="">CV</a>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="mb-4 text-lg font-semibold hover:text-red-100 duration-300 ease-out">
                <a href="">Contato</a>
              </li>
            </Magnetic>
          </ul>
        </div>

        <div className="relative">
          <Image
            src={ship}
            alt="Nave com icones"
            width={220}
            height={220}
            className="md:mt-16"
          />
        </div>
      </aside>
    </Menu>
  );
}
