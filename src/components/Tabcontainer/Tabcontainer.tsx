import { useId, useState } from "react";
import { TabcontainerContext } from "./context/TabcontainerContext";

export type TabcontainerProps = {
  initialSelectedTab?: string;
  children: React.ReactNode;
};

export const Tabcontainer: React.FC<TabcontainerProps> = ({
  initialSelectedTab,
  children,
}) => {
  const uID = useId();
  const [selectedTab, setSelectedTab] = useState<string | undefined>(
    initialSelectedTab || undefined
  );

  /* a11y */
  const handleOnKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    /*
     * ArrowUp and ArrowDown are not really necessary for inline tablists
     * but for reusability it's a good idea to include them
     */
    const allowedKeys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    const target = ev.currentTarget;
    const tabs = target.querySelectorAll(
      '[role="tab"]'
    ) as NodeListOf<HTMLElement>;
    const lastTabIndex = tabs.length - 1;
    const firstTabIndex = 0;

    /* Check first is the key is allowed */
    if (!allowedKeys.includes(ev.key)) return;

    /* Is one of the tab focused? (-1 if not) */
    const focusedTabIndex = [...tabs].findIndex(
      (tab) => tab === document.activeElement
    );
    if (focusedTabIndex < 0) return;

    let nextFocusedTabIndex = focusedTabIndex;

    switch (ev.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextFocusedTabIndex =
          nextFocusedTabIndex > firstTabIndex
            ? nextFocusedTabIndex - 1
            : lastTabIndex;
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextFocusedTabIndex =
          nextFocusedTabIndex < lastTabIndex
            ? nextFocusedTabIndex + 1
            : firstTabIndex;
        break;
      case "Home":
        nextFocusedTabIndex = firstTabIndex;
        break;
      case "End":
        nextFocusedTabIndex = lastTabIndex;
    }

    tabs[nextFocusedTabIndex].focus();
  };

  /* Set the tab */
  const handleTabClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const target = ev.target as HTMLElement;
    const tabElement = target.closest('[role="tab"]') as HTMLElement | null;

    if (tabElement && tabElement.id && tabElement.dataset.id) {
      setSelectedTab(tabElement.dataset.id);
    }
  };

  return (
    <TabcontainerContext.Provider value={{ uID, selectedTab }}>
      <div onClick={handleTabClick} onKeyDown={handleOnKeyDown}>
        {children}
      </div>
    </TabcontainerContext.Provider>
  );
};
