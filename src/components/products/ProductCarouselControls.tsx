"use client";
import Image from "next/image";
import icon_previous from "../../../public/assets/icon-previous.svg";
import icon_next from "../../../public/assets/icon-next.svg";
import { useMainContext } from "@/store/MainContext";

export default function ProductCarouselControls({ images }: { images: { id: number; image: string }[] }) {
  const { mainImage, setMainImage } = useMainContext();

  const nextProductImage = () => {
    const newImageIndex = images.indexOf(mainImage) < 3 ? images.indexOf(mainImage) + 1 : 0;
    setMainImage(images.find((_image, index) => index === newImageIndex)!);
  };

  const prevProductImage = () => {
    const newImageIndex = images.indexOf(mainImage) > 0 ? images.indexOf(mainImage) - 1 : 3;
    setMainImage(images.find((_image, index) => index === newImageIndex)!);
  };

  return (
    <div className="flex justify-between lg:hidden absolute w-full h-fit top-0 bottom-0 my-auto px-4">
      <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer" onClick={prevProductImage}>
        <Image src={icon_previous} className="w-2" alt="" />
      </div>
      <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer" onClick={nextProductImage}>
        <Image src={icon_next} className="w-2" alt="" />
      </div>
    </div>
  );
}
