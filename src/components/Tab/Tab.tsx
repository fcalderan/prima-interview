import { useContext } from "react";
import { TabcontainerContext } from "../Tabcontainer/context/TabcontainerContext";
import { TabsContext } from "../Tabs/contexts/TabsContext";
import styles from "./Tab.module.scss";
import { Badge, BadgeProps } from "../Badge";

/* Base tab */
export interface TabBaseProps {
  /** Identifier */
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
  /* Check if Tab is used inside a Tabs component */
  const ctxTabs = useContext(TabsContext);
  const ctxVariant = ctxTabs?.variant ?? variant ?? "pill";

  /* Check if Tab is used inside a Tabcontainer component */
  const ctxTabcontainer = useContext(TabcontainerContext);
  const ctxUID =
    ctxTabcontainer?.uID !== undefined ? `_${ctxTabcontainer.uID}` : "";
  const ctxIsSelected =
    ctxTabcontainer?.selectedTab !== undefined
      ? ctxTabcontainer.selectedTab === id
      : isSelected;

  /* define unique IDs */
  const idTab = `${id}_button${ctxUID}`;
  const idPanel = `${id}_tabpanel${ctxUID}`;

  /* class composition */
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
