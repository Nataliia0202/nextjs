import React from 'react'
import Task from './Task'
import { ITask } from './Task'
import { tasks } from './data'

console.log(tasks)

export interface ITasksList {
    [x: string]: any
    tasks: ITask[]
}


export default function TasksList(tasks: ITasksList) {
  return (
    <>
      <ul>
        {tasks?.length !== 0 &&
          tasks?.map((task: ITask) => {
            return (
              <li key={task.id}>
                <Task
                  name={task.name}
                  countTask={task.countTask}
                  price={task.price}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}
