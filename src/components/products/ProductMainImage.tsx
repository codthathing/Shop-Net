"use client";
import { useMainContext } from "@/store/MainContext";
import Image from "next/image";

export default function ProductMainImage() {
  const { mainImage } = useMainContext();

  return <Image src={mainImage.image} alt={`Product thumbnail ${mainImage.id}`} width={75} height={100} className="h-[17rem] w-full lg:h-[25rem] lg:rounded-3xl" />;
}
