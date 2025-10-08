import { createContext, useContext } from "react";
import { TabBaseProps } from "../../Tab";

export type TablistContextType = {
  variant?: TabBaseProps["variant"];
};

export const TablistContext = createContext<TablistContextType | null>(null);

export const useTablistContext = () => {
  const context = useContext(TablistContext);
  if (!context) {
    throw new Error("useTablistContext must be used within a TablistProvider");
  }
  return context;
};
