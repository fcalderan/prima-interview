import styles from "./Tabpanels.module.scss";

type TabpanelsType = {
  children: React.ReactNode;
};

export const Tabpanels: React.FC<TabpanelsType> = function ({ children }) {
  return <div className={styles.tabpanels}>{children}</div>;
};
