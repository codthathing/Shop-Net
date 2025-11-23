import { ReactNode } from "react";

export const ProductButton = ({ children, className, ...props }: { children: ReactNode, className?: string, [key: string]: any }) => {
  return <button {...props} className={`${className} bg-[#ff7d1aff] hover:bg-[#ffac6a] duration-200 ease-linear text-[#1d2025ff] font-bold text-sm lg:text-base py-3 rounded-md w-full cursor-pointer`}>{children}</button>;
};
