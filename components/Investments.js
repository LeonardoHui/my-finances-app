import React from "react";

import styles from "@/styles/Investments.module.css";

import PieChart from "./PieChart";
import BarChart from "./BarChart";
import List from "./List";

export default function Investments() {
  const testDataA = [
    { label: "Stock A", value: 5 },
    { label: "Stock B", value: 1 },
    { label: "Stock C", value: 2 },
  ];

  const testDataB = [
    { label: "Stock A", value: 5 },
    { label: "Stock B", value: 1 },
    { label: "Stock C", value: 2 },
  ];

  const testDataC = [
    { label: "Stock A", value: 5 },
    { label: "Stock B", value: 1 },
    { label: "Stock C", value: 2 },
  ];
  const testDataD = [
    { label: "2000", value: 1 },
    { label: "2001", value: 2 },
    { label: "2002", value: 2.2 },
    { label: "2003", value: 3 },
    { label: "2004", value: 4 },
    { label: "2005", value: 3.5 },
    { label: "2006", value: 3.8 },
    { label: "2007", value: 4 },
    { label: "2008", value: 5 },
  ];

  const list = [
    { transaction_type: "Stock A", amount: 10000, date: "2022-01-01 00:00" },
    { transaction_type: "Stock B", amount: 20000, date: "2022-01-01 00:00" },
    { transaction_type: "Stock C", amount: 30000, date: "2022-01-01 00:00" },
  ];

  return (
    <section className={styles.table}>
      <List listData={list} listTitle="Stocks" />

      <PieChart chartData={testDataA} chartTitle={"Stocks Distribution"} />

      <BarChart chartData={testDataB} chartTitle={"Dividend Yield"} />

      <BarChart chartData={testDataC} chartTitle={"Dividend Paid"} />

      <div className={styles.history}>
        <BarChart chartData={testDataD} chartTitle={"Evolution"} />
      </div>
    </section>
  );
}
