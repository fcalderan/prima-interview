import { useId, useState } from "react";
import { TabsContext } from "./context/TabsContext";

type TabsProps = {
  initialSelectedTab?: string;
  children: React.ReactNode;
};

export const Tabs: React.FC<TabsProps> = ({ initialSelectedTab, children }) => {
  const uID = useId();
  const [selectedTab, setSelectedTab] = useState<string | null>(
    initialSelectedTab || null
  );

  console.log(selectedTab);

  /* Retrieve the selected tab */
  const handleTabClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const target = ev.target as HTMLElement;
    const tabElement = target.closest('[role="tab"]') as HTMLElement | null;

    if (tabElement && tabElement.id && tabElement.dataset.id) {
      setSelectedTab(tabElement.dataset.id);
      console.log(tabElement.dataset.id);
    }
  };

  return (
    <TabsContext.Provider value={{ uID, selectedTab }}>
      <div className="tabs" onClick={handleTabClick}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};
