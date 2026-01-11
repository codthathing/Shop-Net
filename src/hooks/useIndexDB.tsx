"use client";
import { useMainContext } from "@/lib/store/MainContext";
import { CartProductType } from "@/types/productType";
import { Dispatch, SetStateAction, useEffect } from "react";

export const getAllCartItems = (db: IDBDatabase, setCartItems: Dispatch<SetStateAction<CartProductType[]>>) => {
  const transaction = db.transaction(["cartItems"], "readonly");
  const cartStore = transaction.objectStore("cartItems");

  const request = cartStore.getAll();

  request.onsuccess = (event: Event) => {
    const items = (event.target as IDBRequest).result;
    setCartItems(items);

    console.log("Successfully loaded the cart items");
  };

  request.onerror = (event: Event) => {
    console.error("Unable to load cart items:", (event.target as IDBRequest).error);
  };
};

export const useIndexDB = () => {
  const { db, setDb, cartItems, setCartItems } = useMainContext();

  useEffect(() => {
    const request = indexedDB.open("User Database", 1);

    request.onsuccess = (event: Event) => {
      const database: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      setDb(database);

      console.log("Database has successfully been opened.");

      getAllCartItems(database, setCartItems);
    };

    request.onerror = (event: Event) => {
      console.error("Error opening database:", (event.target as IDBOpenDBRequest).error);
    };

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const database: IDBDatabase = (event.target as IDBOpenDBRequest).result;

      if (!database.objectStoreNames.contains("cartItems")) console.log("CartItems store created");

      const cartStore = database.createObjectStore("cartItems", { keyPath: "id", autoIncrement: true });
      cartStore.createIndex("productName", "productName", { unique: true });

      console.log("Database updgrade complete!");
    };

    request.onblocked = (event: Event) => {
      console.warn("Database upgrade blocked. Please close other tabs using this database.", (event.target as IDBOpenDBRequest).error);
    };
  }, [setDb, setCartItems]);

  return { db, cartItems };
};
