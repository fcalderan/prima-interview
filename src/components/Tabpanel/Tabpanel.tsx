import { useContext } from "react";
import { TabcontainerContext } from "../Tabcontainer/context/TabcontainerContext";
import styles from "./Tabpanel.module.scss";

type TabpanelType = {
  id: string;
  children?: React.ReactElement;
};

export const Tabpanel: React.FC<TabpanelType> = function ({ id, children }) {
  /* Check if the component is within a Tabcontainer context, get  */
  const ctxTabcontainer = useContext(TabcontainerContext);
  const ctxUID = ctxTabcontainer?.uID !== undefined ? ctxTabcontainer?.uID : "";

  /* Create unique IDs for tabs and panels to avoid duplicated identifiers */
  const idTab = `${id}_button_${ctxUID}`;
  const idPanel = `${id}_tabpanel_${ctxUID}`;

  const ctxIsSelected =
    ctxTabcontainer?.selectedTab !== undefined
      ? ctxTabcontainer.selectedTab === id
      : false;

  return (
    <div
      role="tabpanel"
      className={styles.tabpanel}
      id={idPanel}
      aria-labelledby={idTab}
      tabIndex={ctxIsSelected ? 0 : -1}
      hidden={!ctxIsSelected}
    >
      {children}
    </div>
  );
};
