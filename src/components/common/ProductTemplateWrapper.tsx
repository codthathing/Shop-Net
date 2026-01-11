"use client";
import { GeneralProductType } from "@/types/productType";
import { useMotionValue, animate, motion, PanInfo } from "framer-motion";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export default function ProductTemplateWrapper({ products, children }: { products: GeneralProductType[]; children: ReactNode }) {
  const x = useMotionValue(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mobile, setMobile] = useState<boolean>(false);

  const snapToNearest = useCallback((latestX: number) => {
    if (!itemWidth) return;
    const clampedIndex = Math.max(0, Math.min(Math.round(-latestX / itemWidth), products.length - 1));

    animate(x, mobile ? -(clampedIndex * itemWidth) + (-0.25 * clampedIndex ): -(clampedIndex * itemWidth), { type: "spring", stiffness: 300, damping: 30 });
  }, [itemWidth, mobile, products, x]);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) {
        setMobile(false);
        setItemWidth(window.innerWidth * 0.75);
      } else {
        setMobile(true);
        setItemWidth(window.innerWidth);
      }
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (itemWidth > 0) {
      snapToNearest(x.get());
    }
  }, [x, snapToNearest, itemWidth]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !itemWidth) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        x.set(Math.max(-(products.length - 1) * itemWidth, Math.min(0, x.get() - e.deltaX)));

        if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);

        wheelTimeoutRef.current = setTimeout(() => {
          snapToNearest(x.get());
        }, 50);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [x, snapToNearest, itemWidth, products.length]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full lg:w-3/4 relative border-none touch-pan-y">
      <motion.div whileTap={{ cursor: "grabbing" }} onPan={(_e, info: PanInfo) => x.set(Math.max(-(products.length - 1) * itemWidth, Math.min(0, x.get() + info.delta.x)))} onPanEnd={() => snapToNearest(x.get())} style={{ x }} className="flex touch-none">
        {children}
      </motion.div>
    </div>
  );
}
