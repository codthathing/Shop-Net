"use client";
import Image from "next/image";
import { useMainContext } from "@/lib/store/MainContext";

export default function HeaderNavOpenButton() {
  const { setShowNavigation } = useMainContext();

  return <Image src={"/assets/icon-menu.svg"} width={100} height={100} alt="Menu Icon" onClick={() => setShowNavigation(true)} className="h-fit w-2.5 cursor-pointer lg:hidden ml-5" />;
}
