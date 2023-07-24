import React from "react";
import EventItem from "@/components/EventItem";
import styles from "@/styles/Statement.module.css";

import PieChart from "./PieChart";
import List from "./List";
import LineChart from "./LineChart";

export default function Simulation({ list1 }) {
  const list = {
    lines: ["deposits", "selic"],
    values: [
      { month: "jan", value: [1, 1] },
      { month: "fev", value: [1, 1.1] },
      { month: "mar", value: [2.2, 2.5] },
      { month: "apr", value: [3, 3] },
      { month: "may", value: [4, 4.1] },
      { month: "jun", value: [5, 5.5] },
      { month: "jul", value: [5.8, 6] },
      { month: "aug", value: [6, 6.5] },
      { month: "set", value: [7, 8] },
    ],
  };

  list1 = list;

  return (
    <section className={styles.table}>
      <div className={styles.chart}>
        <LineChart chartData={list1} chartTitle={"Simulation"} />
      </div>
    </section>
  );
}
