// components/HamburgerMenu.js
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import HamburgerIcon from "../hamburguer-icon";

export const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Links />
    </Menu>
  </div>
);

const Links = () => (
  <>
    <Link href="/">
      <a className="font-bold p-4 hover:text-red-100 duration-300 ease-out">
        Projetos
      </a>
    </Link>
    <Link href="/habilidades">
      <a className="font-bold p-4 hover:text-red-100 duration-300 ease-out">
        Habilidades
      </a>
    </Link>
    <Link href="/sobre">
      <a className="font-bold p-4 hover:text-red-100 duration-300 ease-out">
        Sobre
      </a>
    </Link>
    <Link href="/cv">
      <a className="font-bold p-4 hover:text-red-100 duration-300 ease-out">
        CV
      </a>
    </Link>
    <Link href="/contato">
      <a className="font-bold p-4 hover:text-red-100 duration-300 ease-out">
        Contato
      </a>
    </Link>
  </>
);
