import { useContext } from "react";
import { TabsContext } from "../Tabs/context/TabsContext";
import styles from "./Tabpanel.module.css";

type TabpanelType = {
  id: string;
  children?: React.ReactElement;
};

export const Tabpanel: React.FC<TabpanelType> = function ({ id, children }) {
  /* Check for a Tabs context */
  const ctxTabs = useContext(TabsContext);
  const ctxUID = ctxTabs?.uID !== undefined ? ctxTabs?.uID : "";

  const idTab = `${id}_button_${ctxUID}`;
  const idPanel = `${id}_tabpanel_${ctxUID}`;

  const ctxIsSelected =
    ctxTabs?.selectedTab !== undefined ? ctxTabs.selectedTab === id : false;

  const classes = styles.tabpanel;

  return (
    <div
      role="tabpanel"
      className={classes}
      id={idPanel}
      aria-labelledby={idTab}
      tabIndex={ctxIsSelected ? 0 : -1}
      hidden={!ctxIsSelected}
    >
      {children}
    </div>
  );
};
