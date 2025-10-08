import { useContext } from "react";
import { TabsContext } from "../Tabs/context/TabsContext";
import { TablistContext } from "../Tablist/contexts/TablistContext";
import styles from "./Tab.module.css";
import { Badge, BadgeProps } from "../Badge";

/* Base tab */
export interface TabBaseProps {
  /** Unique identifier */
  id: string;
  /** Visible label */
  label: string;
  /** Tab variant: 'pill' o 'underline' */
  variant?: "pill" | "underline";
  /** Is the tab selected? */
  isSelected?: boolean;
}

/* Badge tab (with BadgeProps imported from Badge component) */
export interface TabBadgeProps extends TabBaseProps {
  badgeLabel: BadgeProps["label"];
  badgeVariant?: BadgeProps["variant"];
}

/* Tab Props can be either Base or Badge tab */
export type TabProps = TabBaseProps | TabBadgeProps;

export const Tab: React.FC<TabProps> = ({
  id,
  label,
  variant = "pill",
  isSelected = false,
  ...props
}) => {
  /* Check if Tab is used inside a Tablist component */
  const ctxTablist = useContext(TablistContext);
  const ctxVariant = ctxTablist?.variant ?? variant ?? "pill";

  /* Check if Tab is used inside a Tabs component */
  const ctxTabs = useContext(TabsContext);
  const ctxUID = ctxTabs?.uID !== undefined ? ctxTabs?.uID : "";

  const idTab = `${id}_button_${ctxUID}`;
  const idPanel = `${id}_tabpanel_${ctxUID}`;

  const ctxIsSelected =
    ctxTabs?.selectedTab !== undefined
      ? ctxTabs.selectedTab === id
      : isSelected;

  const classes = `
    ${styles.tab} 
    ${styles[ctxVariant]}
  `.trim();

  return (
    <button
      id={idTab}
      data-id={id}
      role="tab"
      className={classes}
      aria-selected={ctxIsSelected}
      aria-controls={idPanel}
      tabIndex={ctxIsSelected ? 0 : -1}
    >
      <span className={styles["tab__label"]}>
        {label}
        {"badgeLabel" in props && props.badgeLabel && (
          <Badge label={props.badgeLabel} variant={props.badgeVariant} />
        )}
      </span>
    </button>
  );
};
