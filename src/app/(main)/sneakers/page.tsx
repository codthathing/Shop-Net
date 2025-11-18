import { Metadata } from "next";
import ProductTemplate from "@/components/common/ProductTemplate";
import { GeneralProductType } from "@/types/productType";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Sneakers Page",
};

async function getProductDetails() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:5000/sneakers").catch(() => { throw new Error("Failed to fetch"); });
  
  return res.json();
}

export default async function SneakersPage() {
  const data: GeneralProductType[] = await getProductDetails();

  return (
    <section className="flex-1 lg:flex lg:justify-center lg:items-center">
      <Suspense fallback={<Loading />}>
        <ProductTemplate products={data.splice(1, 1)} />
      </Suspense>
    </section>
  );
}
