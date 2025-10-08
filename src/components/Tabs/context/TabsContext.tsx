import { createContext, useContext } from "react";

export type TabsContextType = {
  uID?: string | null;
  selectedTab?: string | null;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};
