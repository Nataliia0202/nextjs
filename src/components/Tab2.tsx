import styles from "./Tabs.module.scss";
import TasksList from "./Tasks/TasksList";
import { tasks } from "./Tasks/data";

const Tab2: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Tab 2 Content</h2>
     <TasksList tasks={tasks}/>
    </div>
  );
};

export default Tab2;
