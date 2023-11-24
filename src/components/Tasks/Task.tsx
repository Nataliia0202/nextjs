import React from 'react'
import styles from "./Tasks.module.scss"
import { IconPoints } from '../icons/IconPoints';


export interface ITask {
    id?: string;
    name: string;
    countTask: string;
    price: string
}

export default function Task({ name, countTask, price }: ITask) {
    return (
      <>
        <div className={styles.wrapperItem}>
        <IconPoints/>
          <p>{name}</p>
          <p>{countTask}</p>
          <p>
            <span>{price}</span>/час
          </p>
        </div>
      </>
    );
}
