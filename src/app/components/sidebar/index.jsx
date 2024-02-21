"use client";
import { useState } from "react";

import Image from "next/image";
import { bubble as Menu } from "react-burger-menu";
import fotoperfil from "@/assets/foto-pessoal.png";
import asas from "@/assets/asas.svg";
import ship from "@/assets/socialship.svg";
import Magnetic from "../magnetic";

export function Sidebar() {
  return (
    <Menu isOpen={true} noOverlay>
      <aside className="fixed flex bg-secondary h-screen w-full">
        <div className="flex flex-col items-center mt-14 w-full">
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

          <ul className="flex flex-col mr-20 mt-8 text-textSecondary">
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
              <li className="text-lg font-semibold hover:text-red-100 duration-300 ease-out">
                <a href="">Contato</a>
              </li>
            </Magnetic>
          </ul>

          <div className="">
            <Image
              src={ship}
              alt="Nave com icones"
              width={220}
              height={220}
              className="mt-40 md:mt-16 "
            />
          </div>
        </div>
      </aside>
    </Menu>
  );
}
