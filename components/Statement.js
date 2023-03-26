import React from "react";
import EventItem from "@/components/EventItem";
import styles from "@/styles/Statement.module.css";

import PieChart from "./PieChart";
import List from "./List";

export default function Statement({ list }) {
  const testData = [
    { label: "Object A", value: 5 },
    { label: "Object B", value: 1 },
    { label: "Object C", value: 2 },
  ];

  return (
    <section className={styles.table}>
      <div className={styles.statements}>
        <List listData={list} listTitle="Statement" />
      </div>

      <List listData={list} listTitle="Bank Balance" />

      <div className={styles.chart}>
        <PieChart chartData={testData} chartTitle={"Balance Distribution"} />
      </div>
    </section>
  );
}
