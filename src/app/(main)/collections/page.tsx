import { Suspense } from "react";
import Loading from "../loading";
import ProductTemplate from "@/components/common/ProductTemplate";
import { Metadata } from "next";
import { GeneralProductType } from "@/types/productType";
import ProductAnimation from "@/components/common/ProductAnimation";
import { supabase } from "@/lib/supabaseClient";

export const metadata: Metadata = {
  title: "Collections Page",
};

export default async function CollectionsPage() {
  const { data } = await supabase.from("products").select(`id, producerName, productName, productDescription, productPrice, percentageOff, productImages(id, image)`).eq("category", "collections").order("position", { referencedTable: "productImages" });
  const products: GeneralProductType[] = data as GeneralProductType[];

  return (
    <section className="flex-1 lg:flex lg:justify-center lg:items-center">
      <Suspense fallback={<Loading />}>
        <ProductTemplate products={products} />
        <ProductAnimation />
      </Suspense>
    </section>
  );
}
