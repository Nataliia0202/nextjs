"use client";

import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import styles from "./Tabs.module.scss"

const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      <div>
        <button
          className={`${styles.tab} ${
            activeTab === "tab1" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("tab1")}
        >
          Иерархия
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "tab2" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("tab2")}
        >
          Должности
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "tab3" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("tab3")}
        >
          Список персонала
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "tab4" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("tab4")}
        >
          Наборы экипировки
        </button>
      </div>
      <div>
        {activeTab === "tab1" && <Tab1 />}
        {activeTab === "tab2" && <Tab2 />}
        {activeTab === "tab3" && <Tab3 />}
        {activeTab === "tab4" && <Tab4 />}
      </div>
    </div>
  );
};

export default TabsContainer;
