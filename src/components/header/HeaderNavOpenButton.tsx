"use client";
import Image from "next/image";
import menu_icon from "../../assets/icon-menu.svg";
import { useMainContext } from "@/contexts/MainContext";

export default function HeaderNavOpenButton() {
  const { setShowNavigation } = useMainContext();

  return <Image src={menu_icon} alt="Menu Icon" onClick={() => setShowNavigation(true)} className="h-fit w-2.5 cursor-pointer lg:hidden ml-5" />;
}
