"use client";
import React, { ReactElement, useState } from "react";
import Image from "next/image";
import { useMainContext } from "@/lib/store/MainContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps<T> {
  id: number;
  text: T;
}

const styles: { default: string; mobile: string; desktopTrue: string; desktopFalse: string } = {
  default: "cursor-pointer capitalize w-fit",
  mobile: "font-bold text-base text-[#1d2025ff]",
  desktopTrue: "lg:text-[#1d2025ff] lg:text-2xl lg:font-bold",
  desktopFalse: "lg:text-[#b6bcc8ff] lg:font-normal lg:text-xs lg:relative lg:before:['*'] lg:before:absolute lg:hover:before:border-2 lg:before:w-0 lg:hover:before:w-full lg:before:transition-[width] lg:before:duration-200 lg:before:ease-linear lg:before:border-[#ff7d1aff] lg:before:top-[3.35rem]",
};

export default function NavComponent({ menus }: { menus: NavProps<string>[] }): ReactElement {
  const { showNavigation, setShowNavigation } = useMainContext();
  const [currentPage, setCurrentPage] = useState<string>("sneakers");

  const path = usePathname();

  const navigationLinkClick = (link: string) => {
    setCurrentPage(link);
    setShowNavigation(false);
  };

  return (
    <>
      <h1 className="text-xl lg:hidden font-bold text-[#1d2025ff]">{currentPage}</h1>
      <aside className={`${showNavigation ? "-translate-x-0" : "-translate-x-full"} fixed top-0 right-0 transition-transform duration-200 ease-linear [background-image:linear-gradient(to_right,_white_65%,_rgba(0,0,0,0.75)_65%)] w-full h-full z-25 p-5 lg:transition-none lg:translate-x-0 lg:block lg:relative lg:p-0 lg:bg-transparent lg:bg-none lg:w-fit lg:h-fit lg:z-0`}>
        <Image src={"/assets/icon-close.svg"} width={100} height={100} onClick={() => setShowNavigation(false)} className="w-3.5 h-3.5 mb-10 cursor-pointer lg:hidden" alt="Cancel Icon" />
        <nav className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:items-center lg:gap-x-8">
          {menus.map(({ id, text }: { id: number; text: string }) => {
            return (
              <Link key={id} href={text} onClick={() => navigationLinkClick(text)} className={`${text === path.replace("/", "") ? styles.desktopTrue : styles.desktopFalse} ${styles.mobile} ${styles.default}`}>
                {text}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
