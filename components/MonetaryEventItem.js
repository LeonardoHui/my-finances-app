import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function MonetaryEventItem({ evt }) {
  return (
    <div
      className={styles.events}
      style={{
        display: "grid",
        placeItems: "start",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <div className={styles.info}>{evt.date}</div>
      <div className={styles.info}>R$ {(evt.amount / 100).toFixed(2)}</div>
      <div className={styles.info}>{evt.description}</div>
    </div>
  );
}
