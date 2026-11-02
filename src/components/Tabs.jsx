import { createContext, useContext, useState } from "react";

// Webflow tabs (w-tabs): TabLink switches which TabPane is shown.
const TabsContext = createContext(null);

export function Tabs({ defaultTab, className, children }) {
  const [current, setCurrent] = useState(defaultTab);
  return (
    <TabsContext value={{ current, setCurrent }}>
      <div className={className}>{children}</div>
    </TabsContext>
  );
}

export function TabLink({ tab, className, children }) {
  const { current, setCurrent } = useContext(TabsContext);
  const active = current === tab;
  return (
    <a
      className={`${className}${active ? " w--current" : ""}`}
      role="tab"
      tabIndex={0}
      aria-selected={active}
      onClick={() => setCurrent(tab)}
      onKeyDown={(e) => e.key === "Enter" && setCurrent(tab)}
    >
      {children}
    </a>
  );
}

export function TabPane({ tab, className, children }) {
  const { current } = useContext(TabsContext);
  return (
    <div
      className={`${className}${current === tab ? " w--tab-active" : ""}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
}
