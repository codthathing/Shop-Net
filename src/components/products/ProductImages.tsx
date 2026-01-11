"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }: { images: { id: number; image: string }[] }) {
  const [mainImage, setMainImage] = useState<{ id: number; image: string }>(images[0]);

  const nextProductImage = () => {
    const newImageIndex = images.indexOf(mainImage) < 3 ? images.indexOf(mainImage) + 1 : 0;
    setMainImage(images.find((_image, index) => index === newImageIndex)!);
  };

  const prevProductImage = () => {
    const newImageIndex = images.indexOf(mainImage) > 0 ? images.indexOf(mainImage) - 1 : 3;
    setMainImage(images.find((_image, index) => index === newImageIndex)!);
  };

  return (
    <>
      <Image src={mainImage.image} alt={`Product thumbnail ${mainImage.id}`} width={75} height={100} className="h-[17rem] w-full lg:h-[25rem] lg:rounded-3xl" />
      <picture className="hidden lg:flex justify-between mt-6">
        {images.map(({ id, image }) => {
          return <Image key={id} priority src={image} alt={`Product thumbnail ${id}`} onMouseEnter={() => setMainImage({ id, image })} width={100} height={100} className={`w-21.5 h-21.5 ${mainImage.image === image ? "border-3 border-[#d9945d]" : ""} box-border rounded-xl cursor-pointer`} />;
        })}
      </picture>
      <div className="flex justify-between lg:hidden absolute w-full h-fit top-0 bottom-0 my-auto px-4">
        <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer" onClick={prevProductImage}>
          <Image src={"/assets/icon-previous.svg"} width={100} height={100} className="w-2" alt="" />
        </div>
        <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer" onClick={nextProductImage}>
          <Image src={"/assets/icon-next.svg"} width={100} height={100} className="w-2" alt="" />
        </div>
      </div>
    </>
  );
}
