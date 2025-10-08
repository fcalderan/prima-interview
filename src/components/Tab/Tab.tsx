import { useContext } from "react";
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
  const ctx = useContext(TablistContext);
  const inheritedVariant = ctx?.variant ?? variant ?? "pill";

  const classes = `
    ${styles.tab} 
    ${styles[inheritedVariant]}
  `.trim();
  return (
    <button id={id} role="tab" aria-selected={isSelected} className={classes}>
      <span className={styles["tab__label"]}>
        {label}
        {"badgeLabel" in props && props.badgeLabel && (
          <Badge label={props.badgeLabel} variant={props.badgeVariant} />
        )}
      </span>
    </button>
  );
};
