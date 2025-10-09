import styles from "./Badge.module.scss";

export interface BadgeProps {
  /** Badge content, visible to the user */
  label: string;
  /** Badge variant: 'neutral', 'positive', o 'negative' */
  variant?: "neutral" | "positive" | "negative";
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "neutral" }) => {
  const BadgeElement = variant === "neutral" ? "span" : "em";
  /* I choose to use a <span> element in case of a neutral variant 
   + and an <em> element for positive and negative variants to
   + convey a semantic meaning of emphasis.
   */
  return (
    <BadgeElement className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </BadgeElement>
  );
};

export default Badge;
