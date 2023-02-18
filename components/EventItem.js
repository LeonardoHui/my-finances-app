import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  return (
    <div
      className={styles.events}
      style={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <div className={styles.info}>
        <t>{evt.date}</t>
      </div>
      <div className={styles.info}>
        <t>R$ {(evt.amount / 100).toFixed(2)}</t>
      </div>
      <div>
        <t>{evt.transaction_type}</t>
      </div>
    </div>
  );
}
