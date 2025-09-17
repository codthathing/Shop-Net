import product_one from "../assets/products/image-product-1.jpg";
import product_one_thumbnail from "../assets/products/image-product-1-thumbnail.jpg";
import icon_minus from "../assets/icon-minus.svg";
import icon_plus from "../assets/icon-plus.svg";
import Image from "next/image";
import icon_cart from "../assets/icon-cart.svg";
import icon_next from "../assets/icon-next.svg";
import icon_previous from "../assets/icon-previous.svg";

export default function Home() {
  return (
    <section className="flex-1 lg:flex lg:justify-center lg:items-center">
      <main className="lg:grid lg:gap-x-[7.5rem] lg:grid-cols-2 lg:w-3/4 lg:items-center">
        <div className="relative">
          <Image
            src={product_one}
            alt=""
            className="h-[17rem] lg:h-[25rem] lg:w-full lg:rounded-3xl"
          />
          <picture className="hidden lg:flex justify-between mt-6">
            <Image
              src={product_one_thumbnail}
              alt="Product thumbnail"
              className="w-21.5 h-21.5 box-border rounded-xl contrast-[50%] brightness-105 border-3 border-[#ff7d1aff]"
            />
            <Image
              src={product_one_thumbnail}
              alt=""
              className="w-21.5 h-21.5 rounded-xl"
            />
            <Image
              src={product_one_thumbnail}
              alt=""
              className="w-21.5 h-21.5 rounded-xl"
            />
            <Image
              src={product_one_thumbnail}
              alt=""
              className="w-21.5 h-21.5 rounded-xl"
            />
          </picture>
          <div className="flex justify-between lg:hidden absolute w-full h-fit top-0 bottom-0 my-auto px-4">
            <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer">
              <Image src={icon_previous} className="w-2" alt="" />
            </div>
            <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer">
              <Image src={icon_next} className="w-2" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 pt-6 pb-2 flex flex-col gap-y-3 lg:pt-0 lg:pb-0 lg:gap-y-7">
          <p className="uppercase text-[#68707dff] text-xs lg:text-sm">sneaker company</p>
          <h1 className="capitalize text-[#1d2025ff] font-bold text-2xl lg:text-[2rem]/9 -mt-2 lg:-mt-4">
            fall limited edition sneakers
          </h1>
          <p className="text-[#b6bcc8ff] text-xs lg:text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between items-center lg:flex-col lg:justify-start lg:items-start lg:-mt-2 lg:gap-y-2">
            <div className="flex gap-x-4 items-center">
              <span className="text-[#1d2025ff] font-bold text-2xl lg:text-3xl">
                ${"125.00"}
              </span>
              <span className="bg-black text-white py-0.5 px-1.5 text-xs lg:text-sm rounded-md">
                {50}%
              </span>
            </div>
            <output className="line-through text-[#68707dff] text-xs lg:text-sm">
              ${"250.00"}
            </output>
          </div>
          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-2">
            <div className="flex justify-between items-center py-3 px-6 rounded-md bg-[#f7f8fdff] lg:gap-x-10 lg:px-4">
              <Image src={icon_minus} className="cursor-pointer" alt="" />
              <span className="font-bold text-[#1d2025ff]">0</span>
              <Image src={icon_plus} className="cursor-pointer" alt="" />
            </div>
            <button className="bg-[#ff7d1aff] flex gap-x-4 justify-center text-[#1d2025ff] font-bold text-sm lg:text-base py-3 rounded-md w-full lg:w-fit lg:flex-1 cursor-pointer">
              <Image src={icon_cart} className="text-[#1d2025ff]" alt="" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
