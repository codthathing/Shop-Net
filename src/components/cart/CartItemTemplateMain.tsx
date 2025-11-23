"use client";
import { useIndexDB } from "@/hooks/useIndexDB";
import { CartProductType } from "@/types/productType";
import Image from "next/image";
import { ProductButton } from "../common/ProductButton";
import { useProductFunctions } from "@/hooks/useProductFunctions";

export default function CartItemTemplateMain() {
  const { cartItems } = useIndexDB();
  const { deleteProductFromCart } = useProductFunctions();

  return (
    <>
      {cartItems.length > 0 ? (
        <section className="flex flex-col gap-y-4 pt-4 pr-1">
          <div className="h-auto max-h-[5.7rem] lg:max-h-[11.75rem] overflow-auto custom-scrollbar flex flex-col gap-y-2 pl-4">
            {cartItems.map(({ id, productImage, productName, productPrice, productCartCount }: CartProductType) => {
              return (
                <main key={id} className="flex items-center justify-between mr-3">
                  <div className="flex items-center gap-x-3">
                    <Image src={productImage} alt={productName} width={100} height={100} className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg" />
                    <div className="flex flex-col">
                      <h1 className="text-sm lg:text-base font-bold text-[#b6bcc8ff] capitalize tracking-wider leading-none">{productName}</h1>
                      <div className="flex gap-x-1 items-center">
                        <p className="text-xs lg:text-sm text-[#b6bcc8ff]">
                          ${productPrice.toFixed(2)} * {productCartCount}
                        </p>
                        <span className="text-sm lg:text-lg text-[#b6bcc8ff]">=</span>
                        <output className="text-[#1d2025ff] font-bold text-xs lg:text-sm">${(productPrice * productCartCount).toFixed(2)}</output>
                      </div>
                    </div>
                  </div>
                  <Image src={"/assets/icon-delete.svg"} onClick={() => deleteProductFromCart(id)} width={75} height={100} className="h-3 w-2.5 lg:h-4 lg:w-3.5 cursor-pointer" alt="Delete Product Icon" />
                </main>
              );
            })}
          </div>
          <div className="pl-4 pb-4 pr-3">
            <ProductButton>Checkout</ProductButton>
          </div>
        </section>
      ) : (
        <p className="text-center text-xs lg:text-sm text-[#68707dff] py-20 lg:py-14 w-full">Your cart is empty</p>
      )}
    </>
  );
}
