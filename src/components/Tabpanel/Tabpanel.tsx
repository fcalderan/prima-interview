import { useContext } from "react";
import { TabcontainerContext } from "../Tabcontainer/context/TabcontainerContext";
import styles from "./Tabpanel.module.scss";

export type TabpanelProps = {
  id: string;
  children?: React.ReactElement;
};

export const Tabpanel: React.FC<TabpanelProps> = function ({ id, children }) {
  /* Check if the component is within a Tabcontainer context, get  */
  const ctxTabcontainer = useContext(TabcontainerContext);
  const ctxUID = ctxTabcontainer?.uID !== undefined ? ctxTabcontainer?.uID : "";

  /* Create unique IDs for tabs and panels to avoid duplicated identifiers */
  const idTab = `${id}_button_${ctxUID}`;
  const idPanel = `${id}_tabpanel_${ctxUID}`;

  /* we need to decide if this panel is visible or not */
  const ctxIsSelected =
    /* A selectedtab value is passed froma a tabcontainer provider? */
    ctxTabcontainer?.selectedTab !== undefined
      ? /* Does it match the current id ? */
        ctxTabcontainer.selectedTab === id
      : /* Otherwise, if this ctxTabcontainer is false then I'm loading this
         * component alone and I need to set this property to true
         */
        !ctxTabcontainer;

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
