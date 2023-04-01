import React from "react";
import EventItem from "./EventItem";

import styles from "@/styles/List.module.css";

export default function List({ listData, listTitle }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{listTitle}</h1>
      <div className={styles.list}>
        {listData.length === 0 && <h3>No events to show</h3>}
        {listData.map((stmt) => (
          <EventItem key={stmt.id} evt={stmt} />
        ))}
      </div>
    </div>
  );
}
