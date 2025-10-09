import { createContext, useContext } from "react";

export type TabcontainerContextType = {
  uID?: string | null;
  selectedTab?: string | null;
};

export const TabcontainerContext =
  createContext<TabcontainerContextType | null>(null);

export const useTabcontainerContext = () => {
  const context = useContext(TabcontainerContext);
  if (!context) {
    throw new Error(
      "useTabcontainerContext must be used within a TabsProvider"
    );
  }
  return context;
};
