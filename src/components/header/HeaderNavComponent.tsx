"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import close_icon from "../../assets/icon-close.svg";
import { useMainContext } from "@/contexts/MainContext";

interface NavProps<T> {
  id: number;
  text: T;
}

const styles: { default: string; mobile: string; desktopTrue: string; desktopFalse: string } = {
  default: "cursor-pointer capitalize",
  mobile: "font-bold text-base text-[#1d2025ff]",
  desktopTrue: "lg:text-[#1d2025ff] lg:text-2xl lg:font-bold",
  desktopFalse: "lg:text-gray-400 lg:font-normal lg:text-xs lg:relative before:['*'] lg:before:absolute lg:before:w-full lg:transition-all lg:duration-500 lg:ease-linear lg:hover:before:border-2 lg:before:border-[#ff7d1aff] lg:before:top-[3.35rem]",
};

export default function NavComponent({ menus }: { menus: NavProps<string>[] }) : ReactElement {
  const { showNavigation, setShowNavigation } = useMainContext();

  return (
    <aside className={`${showNavigation ? "block" : "hidden"} fixed [background-image:linear-gradient(to_right,_white_65%,_rgba(0,0,0,0.75)_65%)] w-full h-full z-25 p-5 lg:block lg:relative lg:p-0 lg:bg-transparent lg:bg-none lg:w-fit lg:h-fit lg:z-0`}>
      <Image src={close_icon} onClick={() => setShowNavigation(false)} className="w-3.5 h-3.5 mb-10 cursor-pointer lg:hidden" alt="Cancel Icon" />
      <nav className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:items-center lg:gap-x-8">
        {menus.map(({ id, text }: { id: number; text: string }) => {
          return (
            <span key={id} className={`${text === "sneakers" ? styles.desktopTrue : styles.desktopFalse} ${styles.mobile} ${styles.default}`}>
              {text}
            </span>
          );
        })}
      </nav>
    </aside>
  );
}
