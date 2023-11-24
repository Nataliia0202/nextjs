"use client";

import React, { useState } from "react";
import styles from "./Form.module.scss";

const CheckboxListManeg: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
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
      <p className={styles.textTitle}>Управление</p>
      <label className={styles.labelPos}>
        <input
          className={styles.inputCheck}
          type="checkbox"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
        Назначать должности
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
        Выгонять из банды
      </label>
    </div>
  );
};

export default CheckboxListManeg;
