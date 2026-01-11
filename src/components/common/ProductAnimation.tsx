"use client";
import { useEffect, useState } from "react";

export default function ProductAnimation() {
  const [currentNode, setCurrentNode] = useState(3);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentNode((prev) => prev === 1 ? 3 : prev - 1);
    }, 250);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 mx-auto w-fit flex gap-x-2 items-center">
      {[1, 2, 3, 2, 1].map((x, index) => (
        <div key={index} style={{ width: `${4 * x}px`, height: `${4 * x}px` }} className={`${x === currentNode ? "bg-[#4e4e4e]" : "bg-[#c9c9c9]"}`} />
      ))}
    </div>
  );
}
