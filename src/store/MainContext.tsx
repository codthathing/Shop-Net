"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface MainContextType {
  showNavigation: boolean;
  setShowNavigation: Dispatch<SetStateAction<boolean>>;
  showCartSection: boolean;
  setShowCartSection: Dispatch<SetStateAction<boolean>>;
  db: IDBDatabase | undefined;
  setDb: Dispatch<SetStateAction<IDBDatabase | undefined>>;
  mainImage: { id: number, image: string };
  setMainImage: Dispatch<SetStateAction<{ id: number, image: string }>>;
}

const MainContext = createContext<MainContextType | null>(null);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [showCartSection, setShowCartSection] = useState<boolean>(false);
  const [db, setDb] = useState<IDBDatabase | undefined>(undefined);
  const [mainImage, setMainImage] = useState<{ id: number, image: string }>({ id: 0, image: "/assets/default-image-product.jpg" });

  return <MainContext.Provider value={{ showNavigation, setShowNavigation, showCartSection, setShowCartSection, db, setDb, mainImage, setMainImage }}>{children}</MainContext.Provider>;
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) throw new Error("useMainContext must be used within a MainProvider");
  return context;
};