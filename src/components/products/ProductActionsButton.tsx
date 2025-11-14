import Image from "next/image";
import icon_minus from "../../../public/assets/icon-minus.svg";
import icon_plus from "../../../public/assets/icon-plus.svg";
import icon_cart from "../../../public/assets/icon-cart.svg";

type ProductDetails = {
  id: number;
  productCartCount: number;
};

export default function ProductActionsButton({ id, productCartCount} : ProductDetails) {
  return (
    <div key={id} className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-2">
      <div className="flex justify-between items-center py-3 px-6 rounded-md bg-[#f7f8fdff] lg:gap-x-10 lg:px-4">
        <Image src={icon_minus} className="w-4 cursor-pointer" alt="" />
        <span className="font-bold text-[#1d2025ff]">{productCartCount}</span>
        <Image src={icon_plus} className="w-4 h-4 cursor-pointer" alt="" />
      </div>
      <button className="bg-[#ff7d1aff] flex gap-x-4 justify-center items-center text-[#1d2025ff] font-bold text-sm lg:text-base py-3 rounded-md w-full lg:w-fit lg:flex-1 cursor-pointer">
        <Image src={icon_cart} className="w-4.5 h-4.5 text-[#1d2025ff]" alt="" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
