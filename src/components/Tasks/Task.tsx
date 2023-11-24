import React from 'react'
import styles from "./Tasks.module.scss"
import { IconPoints } from '../icons/IconPoints';


export interface ITask {
  id?: string;
  name: string;
  countTask: string;
  price: string;
  order?: number | undefined;
}

export default function Task({ name, countTask, price }: ITask) {
    return (
      <>
        <div className={styles.wrapperItem}>
          <IconPoints />
          <div className={styles.wrapperTitle}>
            <p className={styles.name}>{name}</p>
            <p className={styles.count}>{countTask}</p>
          </div>
          <p className={styles.time}>
            <span className={styles.span}>{price}</span>/час
          </p>
        </div>
      </>
    );
}
