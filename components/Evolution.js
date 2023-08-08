import React from "react";
import styles from "@/styles/GenericSubpage.module.css";
import BarChart from "./BarChart";

export default function Evolution({ list1 }) {
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

  list1 = testDataD;

  return (
    <section className={styles.page}>
      <div className={styles.chart}>
        <BarChart chartData={list1} chartTitle={"Evolution"} />
      </div>
    </section>
  );
}
