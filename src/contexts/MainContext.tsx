"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface MainContextType {
  showNavigation: boolean;
  setShowNavigation: Dispatch<SetStateAction<boolean>>;
}

const MainContext = createContext<MainContextType | null>(null);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return <MainContext.Provider value={{ showNavigation, setShowNavigation }}>{children}</MainContext.Provider>;
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) throw new Error("useMainContext must be used within a MainProvider");
  return context;
};
