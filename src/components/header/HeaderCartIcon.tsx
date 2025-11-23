"use client";
import Image from "next/image";
import cart_icon from "../../../public/assets/icon-cart.svg";
import { useMainContext } from "@/store/MainContext";
import { useMemo } from "react";

export default function HeaderCartIcon() {
  const { setShowCartSection, cartItems } = useMainContext();

  const totalCartItems = useMemo(() => {
    return cartItems.reduce((sum: number, { productCartCount }) => sum += productCartCount, 0);
  }, [cartItems])

  return (
    <div className="relative cursor-pointer" onClick={() => setShowCartSection((prev) => !prev)}>
      <Image src={cart_icon} alt="Cart Icon" className="h-fit w-6 lg:w-5" />
      <span className="absolute lg:-right-2 -right-1 -top-0.5 lg:-top-2 text-white bg-[#ff7d1aff] px-1 py-[1.5px] lg:px-[3px] lg:py-0.5 leading-none rounded-md text-[8px] lg:text-xs">{totalCartItems}</span>
    </div>
  );
}
