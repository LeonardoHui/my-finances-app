import React from "react";

import styles from "@/styles/Investments.module.css";

import PieChart from "./PieChart";
import BarChart from "./BarChart";
import List from "./List";

export default function Investments() {
  const testData = [
    { label: "Object A", value: 5 },
    { label: "Object B", value: 1 },
    { label: "Object C", value: 2 },
  ];

  const list = [
    { transaction_type: "Stock A", amount: 10000, date: "2022-01-01 00:00" },
    { transaction_type: "Stock B", amount: 20000, date: "2022-01-01 00:00" },
    { transaction_type: "Stock C", amount: 30000, date: "2022-01-01 00:00" },
  ];

  return (
    <section className={styles.table}>
      <List listData={list} listTitle="Stocks" />

      <PieChart chartData={testData} chartTitle={"Test title"} />

      <BarChart chartData={testData} chartTitle={"Test title"} />

      <BarChart chartData={testData} chartTitle={"Test title"} />

      <div className={styles.history}>
        <BarChart chartData={testData} chartTitle={"Test title"} />
      </div>
    </section>
  );
}
