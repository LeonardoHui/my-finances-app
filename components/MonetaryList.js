import React from "react";
import MonetaryEventItem from "./MonetaryEventItem";

import styles from "@/styles/List.module.css";

export default function MonetaryList({ listData, listTitle }) {
  function innerElem() {
    if (listData === null || listData.length === 0) {
      return <h3>No events to show</h3>;
    }
    return listData.map((stmt) => (
      <MonetaryEventItem key={stmt.id} evt={stmt} />
    ));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{listTitle}</h1>
      <div className={styles.list}>{innerElem()}</div>
    </div>
  );
}
