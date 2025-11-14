import Image from "next/image";
import product_one_thumbnail from "../../../public/assets/products/image-product-1-thumbnail.jpg";

export default function ProductImages() {
  return (
    <picture className="hidden lg:flex justify-between mt-6">
      <Image src={product_one_thumbnail} alt="Product thumbnail" className="w-21.5 h-21.5 opacity-45 box-border rounded-xl cursor-pointer border-3 border-[#ff7d1aff]" />
      <Image src={product_one_thumbnail} alt="" className="w-21.5 h-21.5 transition-opacity ease-initial duration-100 hover:opacity-80 rounded-xl cursor-pointer" />
      <Image src={product_one_thumbnail} alt="" className="w-21.5 h-21.5 transition-opacity ease-initial duration-100 hover:opacity-80 rounded-xl cursor-pointer" />
      <Image src={product_one_thumbnail} alt="" className="w-21.5 h-21.5 transition-opacity ease-initial duration-100 hover:opacity-80 rounded-xl cursor-pointer" />
    </picture>
  );
}
