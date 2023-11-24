/* trunk-ignore-all(prettier) */
"use client";
import { DragEvent, useState, useEffect } from "react";

import styles from "./Tabs.module.scss";
import Task from "./Tasks/Task";
import { ITask } from "./Tasks/Task";
import Form from "./Form/Form";

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
    {
      id: "7",
      name: "Сержант",
      countTask: "5 заданий",
      price: "$200",
      order: 7,
    },
  ]);

  // Сохранение задач в локальное хранилище при изменении состояния
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //необходимо запаминать взятую карточку, создаем новое состояние
  const [currentCard, setCurrentCard] = useState<ITask | null>(null);
  //создаем функции
  function dragStartHandler(e: DragEvent, task: ITask | null) {
    if (task) {
      setCurrentCard(task);
    }
  }
  function dragEndHandler(e: any) {
    e.target.style.background = "#303038";
  }

  function dragOverHandler(e: DragEvent) {
    e.preventDefault(); //отключаем действие браузера по умолчанию
  }
  //обрабатываем логику сортировки карточек
  function dropHandler(e: DragEvent, task: ITask) {
    e.preventDefault();
    setTasks((tasks) => {
      return tasks.map((c) => {
        if (c.id === task.id) {
          return { ...c, order: currentCard?.order || 0 };
        }
        if (c.id === currentCard?.id) {
          return { ...c, order: task.order };
        }
        return c;
      });
    });
  }
  //функция сортировки
  const sortCards = (a: any, b: any): number => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperlist}>
        <ul className={styles.list}>
          {tasks.sort(sortCards).map((task) => (
            <li
              key={task.id}
              className={styles.item}
              draggable={true} //возможность перемещать карточки
              onDragStart={(e: DragEvent) =>
                dragStartHandler(e, task)
              } //срабатывает кокда мы берем карточку
              onDragLeave={(e: DragEvent) => dragEndHandler(e)} //срабатывает когда вышли за пределы другой карточки
              onDragEnd={(e: DragEvent) => dragEndHandler(e)} // если мы отпустили перемещение
              onDragOver={(e: DragEvent) => dragOverHandler(e)} //если мы находимся над каким-то другим обьектом
              onDrop={(e: DragEvent) => dropHandler(e, task)} //если мы отпусти карточку и расчитываем на то что должно произойти какое-то связанное с этим действие
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
        <button className={styles.button} type="button">
          Создать новую должность
        </button>
      </div>
      <Form />
    </div>
  );
};

export default Tab2;
