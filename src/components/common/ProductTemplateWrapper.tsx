"use client";
import { GeneralProductType } from "@/types/productType";
import { useMotionValue, animate, motion, number } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function ProductTemplateWrapper({ products, children }: { products: GeneralProductType[]; children: ReactNode }) {
  const x = useMotionValue(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setItemWidth(window.innerWidth * 0.75);
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const snapToNearest = (latestX: number) => {
    const clampedIndex = Math.max(0, Math.min(Math.round(-latestX / itemWidth), products.length - 1));

    animate(x, -(clampedIndex * itemWidth), { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <div className="overflow-hidden w-full lg:w-3/4 relative">
      <motion.div drag="x" dragConstraints={{ left: -(products.length - 1) * itemWidth, right: 0 }} whileTap={{ cursor: "grabbing" }} onDragEnd={() => snapToNearest(x.get())} style={{ x }} className="flex gap-y-5 cursor-grab">
        {children}
      </motion.div>
    </div>
  );
}
