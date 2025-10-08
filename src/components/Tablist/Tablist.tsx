import { TablistContext, TablistContextType } from "./contexts/TablistContext";
import styles from "./Tablist.module.css";

export type TablistProps = TablistContextType & {
  children: React.ReactNode;
};

export const Tablist: React.FC<TablistProps> = ({ variant, children }) => {
  const classes = `
    ${styles.tablist} 
    ${styles[variant || "pill"]}
  `.trim();

  return (
    <TablistContext.Provider value={{ variant }}>
      <div role="tablist" className={classes}>
        {children}
      </div>
    </TablistContext.Provider>
  );
};
