/* trunk-ignore-all(prettier) */
"use client";
import { DragEvent, useState } from "react";
import styles from "./Tabs.module.scss";
import Task from "./Tasks/Task";
import { ITask } from "./Tasks/Task";

const Tab2: React.FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Новобранец",
      countTask: "от 10 lvl",
      price: "$50",
      order: 1,
    },
    {
      id: "2",
      name: "Рядовой",
      countTask: "10 заданий",
      price: "$80",
      order: 2,
    },
    {
      id: "3",
      name: "Сержант",
      countTask: "5 заданий",
      price: "$100",
      order: 3,
    },
    {
      id: "4",
      name: "Новобранец",
      countTask: "от 10 lvl",
      price: "$50",
      order: 4,
    },
    {
      id: "5",
      name: "Рядовой",
      countTask: "10 заданий",
      price: "$80",
      order: 5,
    },
    {
      id: "6",
      name: "Сержант",
      countTask: "5 заданий",
      price: "$100",
      order: 6,
    },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e: any, task: null) {
    setCurrentCard(task);
  }
  function dragEndHandler(e: any) {
    e.target.style.background = "#303038";
  }

  function dragOverHandler(e: any) {
    e.preventDefault();
    // e.target.style.boxShadow = "rgba(0, 0, 0, 0.40)";
  }

  function dropHandler(e: any, task: ITask) {
    e.preventDefault();
    setTasks(
      tasks.map((c) => {
        if (c.id === task.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: task.order };
        }
        return c;
      }),
    );
    // e.target.style.background = "#303038";
  }
  const sortCards = (a: any, b: any) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {tasks.sort(sortCards).map((task) => (
          <li
            key={task.id}
            className={styles.item}
            draggable={true}
            onDragStart={(e: DragEvent<HTMLDivElement>) =>
              dragStartHandler(e, task)
            }
            onDragLeave={(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
            onDragEnd={(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
            onDragOver={(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
            onDrop={(e: DragEvent<HTMLDivElement>) => dropHandler(e, task)}
          >
            <Task
              name={task.name}
              countTask={task.countTask}
              price={task.price}
              order={task.order}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab2;
