import React from "react";
import styles from "./Intro.module.scss";
import MuiButton from "../../ui/Button/Button";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <span className={styles.background}>SneakMax</span>
        <h1 className={styles.header}>
          Кроссовки известных брендов с доставкой по России и СНГ
        </h1>
        <p className={styles.text}>
          Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
          многие другие по низким ценам
        </p>
        <MuiButton text={"Перейти к покупкам"} />
      </div>
    </div>
  );
}
