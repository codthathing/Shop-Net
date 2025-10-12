import ProductActionsButton from "@/components/products/ProductActionsButton";
import ProductCarouselControls from "@/components/products/ProductCarouselControls";
import ProductDetails from "@/components/products/ProductDetails";
import ProductImages from "@/components/products/ProductImages";
import Image from "next/image";
import product_one from "../../../assets/products/image-product-1.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneakers Page"
}

export default function SneakersPage() {
  return (
    <section className="flex-1 lg:flex lg:justify-center lg:items-center">
      <main className="lg:grid lg:gap-x-[7.5rem] lg:grid-cols-2 lg:w-3/4 lg:items-center">
        <div className="relative">
          <Image src={product_one} alt="" className="h-[17rem] lg:h-[25rem] lg:w-full lg:rounded-3xl" />
          <ProductImages />
          <ProductCarouselControls />
        </div>
        <div className="px-4 pt-6 pb-2 flex flex-col gap-y-3 lg:pt-0 lg:pb-0 lg:gap-y-7">
          <ProductDetails />
          <ProductActionsButton id={0} productCartCount={0} />
        </div>
      </main>
    </section>
  );
}
