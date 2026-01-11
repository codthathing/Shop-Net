"use client";
import Image from "next/image";
import { useState } from "react";
import { useProductFunctions } from "@/hooks/useProductFunctions";
import { GeneralProductType } from "@/types/productType";
import { ProductButton } from "../common/ProductButton";

export default function ProductActionsButton({ id, products }: { id: number; products: GeneralProductType[] }) {
  const [productCartCount, setProductCartCount] = useState<number>(0);
  const { addProductToCart } = useProductFunctions(products);

  return (
    <div key={id} className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-2">
      <div className="flex justify-between items-center py-3 px-6 rounded-md bg-[#f7f8fdff] lg:gap-x-10 lg:px-4">
        <Image src={"/assets/icon-minus.svg"} width={100} height={100} alt="Minus Icon" onClick={() => productCartCount > 0 && setProductCartCount((prev) => (prev -= 1))} className="w-4 cursor-pointer" />
        <span className="font-bold text-[#1d2025ff]">{productCartCount}</span>
        <Image src={"/assets/icon-plus.svg"} width={100} height={100} onClick={() => setProductCartCount((prev) => (prev += 1))} className="w-4 h-4 cursor-pointer" alt="" />
      </div>
      <ProductButton
        className="flex gap-x-4 justify-center items-center lg:w-fit lg:flex-1"
        onClick={() => {
          addProductToCart(id, productCartCount);
          setProductCartCount(0);
        }}
      >
        <Image src={"/assets/icon-cart.svg"} width={100} height={100} loading="eager" fetchPriority="high" className="w-4.5 h-4.5 text-[#1d2025ff]" alt="" />
        <span>Add to cart</span>
      </ProductButton>
    </div>
  );
}
