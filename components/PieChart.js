import React from "react";

import styles from "@/styles/Charts.module.css";

// Do not remove Chart
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    p = 155;
  return (
    "rgb(" +
    o(r() * 255) +
    "," +
    o(r() * p + 100) + // +55 tp avoid full black
    "," +
    "0" +
    ")"
  );
}

/*  
chartData = 
[
    {label: "Object A", value: 0},
    {label: "Object B", value: 1},
    {label: "Object C", value: 2},
]
*/
export default function PieChart({ chartData, chartTitle }) {
  const pieData = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderWidth: 2,
        borderColor: ["rgba(0,0,125,0.25)"],
        hoverOffset: 12,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      // title: {
      //   display: true,
      //   text: chartTitle,
      //   font: { size: 20 },
      //   color: "white",
      // },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 6,
    },
    animation: { animateRotate: true, animateScale: true },
  };

  function innerElem() {
    if (chartData === null || chartData.length === 0) {
      return (
        <div className={styles.empty}>
          <h3>Nothing to show</h3>
        </div>
      );
    }

    chartData.map(
      (elm) => (
        pieData.labels.push(elm.label),
        pieData.datasets[0].data.push(elm.value),
        pieData.datasets[0].backgroundColor.push(random_rgba())
      )
    );
    return (
      <div className={styles.piechart}>
        <Pie data={pieData} options={pieOptions} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{chartTitle}</h1>
      {innerElem()}
    </div>
  );
}
