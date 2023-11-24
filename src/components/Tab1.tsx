import styles from "./Tabs.module.scss"

const Tab1: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Tab 1 Content</h2>
      <p>This is the content for Tab 1.</p>
    </div>
  );
};

export default Tab1;
