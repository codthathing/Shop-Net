"use client";
import { useMainContext } from "@/store/MainContext";
import CartItemTemplateMain from "./CartItemTemplateMain";

export default function CartSection() {
  const { showCartSection } = useMainContext();

  return (
    <div className={`${showCartSection ? "block" : "hidden"} absolute top-full max-lg:left-0 right-0 mx-auto lg:right-0 bg-white w-[97%] lg:w-80 shadow-xl shadow-black/25 rounded-md mt-2 lg:mt-1.5 z-10`}>
      <header className="p-4 border-b-2 border-[#f7f8fdff]">
        <span className="font-bold text-base lg:text-lg text-black">Cart</span>
      </header>
      <CartItemTemplateMain />
    </div>
  );
}
