import { TabsContext, TabsContextType } from "./contexts/TabsContext";
import styles from "./Tabs.module.scss";

export type TabsProps = TabsContextType & {
  children: React.ReactNode;
};

export const Tabs: React.FC<TabsProps> = ({ variant, children }) => {
  const classes = `
    ${styles.Tabs} 
    ${styles[variant || "pill"]}
  `.trim();

  return (
    <TabsContext.Provider value={{ variant }}>
      <div role="Tabs" className={classes}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};
