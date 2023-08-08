import React from "react";

import styles from "@/styles/Investments.module.css";

import PieChart from "./PieChart";
import BarChart from "./BarChart";
import List from "./List";

export default function Investments({ list }) {
  list = {
    investments: [
      { id: 1, date: "2023-01-01", amount: 100, transaction_type: "DEBIT" },
      { id: 2, date: "2023-01-02", amount: 200, transaction_type: "CREDIT" },
      { id: 3, date: "2023-01-03", amount: 300, transaction_type: "DEBIT" },
    ],
    stock_distribution: [
      { label: "Object A", value: 0 },
      { label: "Object B", value: 1 },
      { label: "Object C", value: 2 },
    ],
    dividend_yied: [
      { label: "Object A", value: 0 },
      { label: "Object B", value: 1 },
      { label: "Object C", value: 2 },
    ],
    dividend_paid: [
      { label: "Object A", value: 0 },
      { label: "Object B", value: 1 },
      { label: "Object C", value: 2 },
    ],
  };

  return (
    <section className={styles.table}>
      <List listData={list.investments} listTitle="Stocks" />
      <PieChart
        chartData={list.stock_distribution}
        chartTitle={"Stocks Distribution"}
      />
      <BarChart chartData={list.dividend_yied} chartTitle={"Dividend Yield"} />
      <BarChart chartData={list.dividend_paid} chartTitle={"Dividend Paid"} />
    </section>
  );
}
