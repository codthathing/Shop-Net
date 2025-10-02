import Image from "next/image";
import React from "react";
import cart_icon from "../../assets/icon-cart.svg";
import image_avatar from "../../assets/image-avatar.png";
import HeaderNavComponent from "../header/HeaderNavComponent";
import HeaderNavOpenButton from "../header/HeaderNavOpenButton";

type menusType = {
  id: number;
  text: string;
};

const headerMenus: menusType[] = [
  { id: 0, text: "sneakers" },
  { id: 1, text: "collections" },
  { id: 2, text: "men" },
  { id: 3, text: "women" },
  { id: 4, text: "about" },
  { id: 5, text: "contact" },
];

export default function Header() {
  return (
    <header className="flex py-5 lg:mx-16 lg:px-5 lg:py-8 items-center justify-between border-b lg:border-b-2 border-gray-300">
      <div className="gap-x-2 flex items-baseline">
        <HeaderNavOpenButton />
        <h1 className="text-xl lg:hidden font-bold text-[#1d2025ff]">sneakers</h1>
        <HeaderNavComponent menus={headerMenus} />
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-8 mr-5">
        <Image src={cart_icon} alt="Cart Icon" className="h-fit w-6 lg:w-5 cursor-pointer" />
        <Image src={image_avatar} alt={"Image Avatar"} className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
      </div>
    </header>
  );
}
