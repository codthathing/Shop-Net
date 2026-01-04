import ProductImages from "../products/ProductImages";
import ProductCarouselControls from "../products/ProductCarouselControls";
import ProductDetails from "../products/ProductDetails";
import ProductActionsButton from "../products/ProductActionsButton";
import { GeneralProductType } from "@/types/productType";
import ProductMainImage from "../products/ProductMainImage";


export default function HorizontalScroll() {


  return (
    <div style={{ overflow: "hidden", width: "320px", position: "relative" }}>
      <motion.div>
        {items.map((item) => (
          <div key={item} style={{ minWidth: "300px", height: "200px", background: "#3b82f6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: "white" }}>
            Item {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProductTemplate({ products }: { products: GeneralProductType[] }) {
  return (
    <>
      {products.map(({ id, producerName, productName, productDescription, productPrice, percentageOff, productImages }) => {
        return (
          <main key={id} className="lg:grid lg:gap-x-[7.5rem] lg:grid-cols-2 lg:w-3/4 lg:items-center">
            <div className="relative">
              <ProductMainImage />
              <ProductImages images={productImages} />
              <ProductCarouselControls images={productImages} />
            </div>
            <div className="px-4 pt-6 pb-2 flex flex-col gap-y-3 lg:pt-0 lg:pb-0 lg:gap-y-7">
              <ProductDetails producerName={producerName} productName={productName} productDescription={productDescription} productPrice={productPrice} percentageOff={percentageOff} />
              <ProductActionsButton id={id} products={products} />
            </div>
          </main>
        );
      })}
    </>
  );
}
