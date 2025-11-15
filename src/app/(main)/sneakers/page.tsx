import { Metadata } from "next";
import ProductTemplate from "@/components/common/ProductTemplate";
import { GeneralProductType } from "@/types/productType";

export const metadata: Metadata = {
  title: "Sneakers Page"
}

export default async function SneakersPage() {
  const res = await fetch("http://localhost:5000/sneakers");
  const data: GeneralProductType[] = await res.json();

  return (
    <section className="flex-1 lg:flex lg:justify-center lg:items-center">
      <ProductTemplate products={data.splice(1, 1)} />
    </section>
  );
}
