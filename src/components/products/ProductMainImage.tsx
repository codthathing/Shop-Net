import Image from "next/image";

export default function ProductMainImage({ images }: { images: { id: number; image: string }[] }) {
  return <Image src={images[0].image} alt={`Product thumbnail ${images[0].id}`} width={75} height={100} className="h-[17rem] w-full lg:h-[25rem] lg:rounded-3xl" />;
}
