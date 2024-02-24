"use client";

import Image from "next/image";
import Magnetic from "../ui/magnetic";
import { bubble as Menu } from "react-burger-menu";

import fotoperfil from "../../../public/assets/foto-pessoal.png";
import asas from "../../../public/assets/asas.svg";
import ship from "../../../public/assets/socialship4.svg";
import gitLogo from "../../../public/assets/logos/github.svg";
import linkdedIn from "../../../public/assets/logos/linkedin.svg";
import discord from "../../../public/assets/logos/discord.svg";
import spotfy from "../../../public/assets/logos/spotify.svg";
import steam from "../../../public/assets/logos/steam.svg";

export default function Sidebar() {
  return (
    <Menu isOpen={true} noOverlay disableOverlayClick>
      <aside className="fixed flex bg-secondary h-screen w-full">
        <div className="flex flex-col items-center mt-14 w-full ">
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

          <div className="fixed bottom-2">
            <Image
              src={ship}
              alt="Nave com icones"
              width={200}
              height={200}
              className=" w-52 invisible lg:visible"
            />
            <div className="flex gap-4 mb-10 xss:mb-2 xxs:mb-0">
              <a href="https://github.com/gabrielbasaglia" target="_blank">
                <Image
                  src={gitLogo}
                  width={26}
                  height={26}
                  alt="logo do github"
                  className="lg:absolute lg:bottom-[152px] lg:left-[97px] "
                />
              </a>

              <a
                href="https://www.linkedin.com/in/gabrielbasaglia/"
                target="_blank"
              >
                <Image
                  src={linkdedIn}
                  width={24}
                  height={24}
                  alt="logo linkedin"
                  className="lg:absolute lg:bottom-[124px] lg:left-[110px]"
                />
              </a>

              <a
                href="https://open.spotify.com/user/12166834458?si=HP3aTy7rS8K_qxWJ6Jrl5Q&nd=1&dlsi=079933887bd34e5a"
                target="_blank"
              >
                <Image
                  src={spotfy}
                  width={24}
                  height={24}
                  alt="logo discord"
                  className="lg:absolute lg:bottom-[124px] lg:left-[82px]"
                />
              </a>

              <a
                href="https://steamcommunity.com/id/gababulldog/"
                target="_blank"
              >
                <Image
                  src={steam}
                  width={24}
                  height={24}
                  alt="logo discord"
                  className="lg:absolute lg:bottom-[94px] lg:left-[82px]"
                />
              </a>

              <a
                href="https://discordapp.com/users/Bulldog#3803"
                target="_blank"
              >
                <Image
                  src={discord}
                  width={24}
                  height={24}
                  alt="logo discord"
                  className="lg:absolute lg:bottom-[94px] lg:left-[110px]"
                />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </Menu>
  );
}
