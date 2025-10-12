"use client";
import { useIndexDB } from "@/hooks/useIndexDB";

export default function CartItemTemplateMain() {
  const { cartItems } = useIndexDB();

  return (
    <main className="p-4">
      {cartItems.length > 0 ? (
        cartItems.map(({ id }: { id: number }) => {
          return (
            <div key={id}>
              <p>hello</p>
            </div>
          );
        })
      ) : (
        <p className="text-center text-xs lg:text-sm text-[#68707dff] py-16 lg:py-10 w-full">Your cart is empty</p>
      )}
    </main>
  );
}
