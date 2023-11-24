"use client"

import React, { useState } from "react";
import styles from "./Form.module.scss"

const CheckboxListSales: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  return (
    <div className={styles.wrapperItemBox}>
      <p className={styles.textTitle}>Торговля</p>
      <label className={styles.labelPos}>
        <input
          className={styles.inputCheck}
          type="checkbox"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
        Продавать продукт
      </label>

      <label className={styles.labelPos}>
        <input
          className={styles.inputCheck}
          type="checkbox"
          name="option2"
          checked={checkboxes.option2}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
        Выставлять цены
      </label>

      <label className={styles.labelPos}>
        <input
          className={styles.inputCheck}
          type="checkbox"
          name="option3"
          checked={checkboxes.option3}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
        Смотреть аналитику
      </label>
    </div>
  );
};

export default CheckboxListSales;
