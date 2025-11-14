import Image from "next/image";
import React from "react";
import image_avatar from "../../../public/assets/image-avatar.png";
import HeaderNavComponent from "../header/HeaderNavComponent";
import HeaderNavOpenButton from "../header/HeaderNavOpenButton";
import CartSection from "../cart/CartSection";
import HeaderCartIcon from "../header/HeaderCartIcon";

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
    <header className="relative flex py-5 lg:mx-16 lg:px-5 lg:py-8 items-center justify-between border-b-2 border-[#f7f8fdff]">
      <div className="gap-x-2 flex items-baseline">
        <HeaderNavOpenButton />
        <HeaderNavComponent menus={headerMenus} />
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-8 mr-5">
        <HeaderCartIcon />
        <Image src={image_avatar} alt={"Image Avatar"} className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-transparent hover:border-[#ff7d1aff] cursor-pointer" />
      </div>
      <CartSection />
    </header>
  );
}
