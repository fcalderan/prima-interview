import styles from "./Tabpanels.module.scss";

export type TabpanelsProps = {
  children: React.ReactNode;
};

export const Tabpanels: React.FC<TabpanelsProps> = function ({ children }) {
  return <div className={styles.tabpanels}>{children}</div>;
};
