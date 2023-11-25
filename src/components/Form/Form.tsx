import React from "react";
import styles from "./Form.module.scss";
import CheckboxListSales from "./CheckboxListSales";
import CheckboxListDis from "./CheckboxListDis";
import CheckboxListProd from "./CheckboxListProd";
import CheckboxListManeg from "./CheckboxListManeg";

export default function Form() {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label className={styles.label}>Название</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            required
            minLength={5}
            autoComplete="off"
          />
        </div>
        <div className={styles.wrapperText}>
          <p className={styles.text}>Обязаности</p>
        </div>
        <div className={styles.wrapperCheckBox}>
          <div className={styles.wrapOne}>
            <CheckboxListSales />
            <CheckboxListDis />
          </div>
          <div className={styles.wrapSecond}>
            <CheckboxListProd />
            <CheckboxListManeg />
          </div>
        </div>

        <button type="button" className={styles.button}>
          Сохранить
        </button>
      </form>
    </>
  );
}
