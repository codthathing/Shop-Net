import Image from "next/image";
import React, { ReactElement } from "react";
import menu_icon from "../../assets/icon-menu.svg";
import cart_icon from "../../assets/icon-cart.svg";
import image_avatar from "../../assets/image-avatar.png";

type menusType = {
  id: number;
  text: string;
};
const headerMenus: menusType[] = [
  { id: 0, text: "collections" },
  { id: 1, text: "men" },
  { id: 2, text: "women" },
  { id: 3, text: "about" },
  { id: 4, text: "contact" },
];

interface NavProps<T> {
  id: number;
  text: T;
}
const NavComponent = (props: { menus: NavProps<string>[] }): ReactElement => {
  return (
    <nav className="hidden lg:flex items-center lg:gap-x-4">
      {props.menus.map(({ id, text }: menusType) => {
        return <span key={id} className="text-gray-400 lg:text-xs cursor-pointer capitalize">{text}</span>;
      })}
    </nav>
  );
};

export default function Header() {
  return (
    <header className="flex p-5 lg:mx-16 lg:py-8 items-center justify-between border-b lg:border-b-2 border-gray-300">
      <div className="gap-x-2 flex lg:gap-x-8 items-center">
        <Image src={menu_icon} alt="Menu Icon" className="h-fit w-4 cursor-pointer lg:hidden" />
        <h1 className="text-xl lg:text-2xl font-extrabold">sneakers</h1>
        <NavComponent menus={headerMenus} />
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-8">
        <Image src={cart_icon} alt="Cart Icon" className="h-fit w-6 lg:w-5 cursor-pointer" />
        <Image src={image_avatar} alt={"Image Avatar"} className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
      </div>
    </header>
  );
}
