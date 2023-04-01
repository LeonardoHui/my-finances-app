import React from "react";

import styles from "@/styles/Investments.module.css";

import PieChart from "./PieChart";
import BarChart from "./BarChart";
import List from "./List";

export default function Investments({ list }) {
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

  return (
    <section className={styles.table}>
      <List listData={list.investments} listTitle="Stocks" />
      <PieChart
        chartData={list.stock_distribution}
        chartTitle={"Stocks Distribution"}
      />
      <BarChart chartData={list.dividend_yied} chartTitle={"Dividend Yield"} />
      <BarChart chartData={list.dividend_paid} chartTitle={"Dividend Paid"} />

      <div className={styles.history}>
        <BarChart chartData={testDataD} chartTitle={"Evolution"} />
      </div>
    </section>
  );
}
