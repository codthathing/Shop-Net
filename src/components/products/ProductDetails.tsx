import { ProductDetailsType } from "@/types/productType";

export default function ProductDetails({ producerName, productName, productDescription, productPrice, percentageOff }: ProductDetailsType) {
  return (
    <>
      <p className="uppercase text-[#68707dff] text-xs lg:text-sm">sneaker company</p>
      <h1 className="capitalize text-[#1d2025ff] font-bold text-2xl lg:text-[2rem]/9 -mt-2 lg:-mt-4">fall limited edition sneakers</h1>
      <p className="text-[#b6bcc8ff] text-xs lg:text-sm">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
      <div className="flex justify-between items-center lg:flex-col lg:justify-start lg:items-start lg:-mt-2 lg:gap-y-2">
        <div className="flex gap-x-4 items-center">
          <span className="text-[#1d2025ff] font-bold text-2xl lg:text-3xl">${"125.00"}</span>
          <span className="bg-black text-white py-0.5 px-1.5 text-xs lg:text-sm rounded-md">{50}%</span>
        </div>
        <output className="line-through text-[#68707dff] text-xs lg:text-sm">${"250.00"}</output>
      </div>
    </>
  );
}
