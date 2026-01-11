import { Metadata } from "next";
import Loading from "../loading";
import { GeneralProductType } from "@/types/productType";
import { Suspense } from "react";
import ProductTemplate from "@/components/common/ProductTemplate";
import ProductAnimation from "@/components/common/ProductAnimation";
import { supabase } from "@/lib/supabaseClient";

export const metadata: Metadata = {
  title: "Men's Page",
};

export default async function MenPage() {
  const { data } = await supabase.from("products").select(`id, producerName, productName, productDescription, productPrice, percentageOff, productImages(id, image)`).eq("category", "men").order("position", { referencedTable: "productImages" });
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
