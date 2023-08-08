import React from "react";
import styles from "@/styles/Statement.module.css";

import PieChart from "./PieChart";
import List from "./List";

export default function Statement({ list }) {
  var balance_distribution = [];
  list.balance.map((item) =>
    balance_distribution.push({
      label: item.transaction_type,
      value: item.amount,
    })
  );

  return (
    <section className={styles.table}>
      <div className={styles.statements}>
        <List listData={list.statements} listTitle="Statement" />
      </div>

      <List listData={list.balance} listTitle="Bank Balance" />

      <div className={styles.chart}>
        <PieChart
          chartData={balance_distribution}
          chartTitle={"Balance Distribution"}
        />
      </div>
    </section>
  );
}
