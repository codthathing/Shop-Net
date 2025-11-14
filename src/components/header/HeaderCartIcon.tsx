"use client";
import Image from "next/image";
import cart_icon from "../../../public/assets/icon-cart.svg";
import { useMainContext } from "@/store/MainContext";

export default function HeaderCartIcon() {
  const { setShowCartSection } = useMainContext();

  return <Image src={cart_icon} alt="Cart Icon" onClick={() => setShowCartSection(prev => !prev)} className="h-fit w-6 lg:w-5 cursor-pointer" />;
}
