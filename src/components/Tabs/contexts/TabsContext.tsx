import { createContext, useContext } from "react";
import { TabBaseProps } from "../../Tab";

export type TabsContextType = {
  variant?: TabBaseProps["variant"];
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};
