"use client";
import { CartProductType, GeneralProductType } from "@/types/productType";
import { getAllCartItems } from "./useIndexDB";
import { useMainContext } from "@/store/MainContext";

export const useProductFunctions = (data?: GeneralProductType[]) => {
  const { cartItems, setCartItems, db } = useMainContext();

  const addProductToCart = (itemId: number, itemCount: number) => {
    const transaction = db!.transaction(["cartItems"], "readwrite");
    const cartStore = transaction.objectStore("cartItems");

    if (itemCount > 0) {
      const { productName: currentProductName, productPrice, productImages, percentageOff } = data?.find(({ id }) => id === itemId)!;

      if (cartItems.some(({ productName }) => productName === currentProductName)) {
        const request = cartStore.index("productName").get(currentProductName);
        request.onsuccess = (event: Event) => {
          const product: CartProductType = (event.target as IDBRequest).result;
          product.productCartCount += itemCount;

          cartStore.put(product);
          console.log("Successfully updated product!✅");
        };

        request.onerror = (event: Event) => {
          console.error("Unable to update product: ", (event.target as IDBRequest).error);
        };
      } else {
        const newCartProduct = { productName: currentProductName, productPrice: productPrice - productPrice * (percentageOff / 100), productImage: productImages[0].image, productCartCount: itemCount };

        const request = cartStore.add(newCartProduct);

        request.onsuccess = () => {
          console.log("New product added!✅");
        };

        request.onerror = (event: Event) => {
          console.error("Unable to add new product: ", (event.target as IDBRequest).error);
        };
      }

      getAllCartItems(db!, setCartItems);
    }
  };

  const deleteProductFromCart = (id: number) => {
    const transaction = db!.transaction(["cartItems"], "readwrite");
    const cartStore = transaction.objectStore("cartItems");

    const request = cartStore.delete(id);

    request.onsuccess = () => {
      console.log("Successfully deleted product from cart✅!");

      getAllCartItems(db!, setCartItems);
    };

    request.onerror = (event: Event) => {
      console.error("Unable to delete product: ", (event.target as IDBRequest).error);
    };
  };

  return { addProductToCart, deleteProductFromCart };
};
