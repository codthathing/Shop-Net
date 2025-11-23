"use client";
import { useMainContext } from "@/store/MainContext";
import Image from "next/image";
import { useEffect } from "react";

export default function ProductImages({ images }: { images: { id: number; image: string }[] }) {
  const { mainImage, setMainImage } = useMainContext();
  useEffect(() => {
    setMainImage(images.find((_image, index) => index === 0)!);
  }, [images, setMainImage]);

  return (
    <picture className="hidden lg:flex justify-between mt-6">
      {images.map(({ id, image }) => {
        return <Image key={id} priority src={image} alt={`Product thumbnail ${id}`} onMouseEnter={() => setMainImage({ id, image })} width={100} height={100} className={`w-21.5 h-21.5 ${mainImage.image === image ? "border-3 border-[#d9945d]" : ""} box-border rounded-xl cursor-pointer`} />;
      })}
    </picture>
  );
}
