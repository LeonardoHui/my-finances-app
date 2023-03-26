import React from "react";

import styles from "@/styles/Charts.module.css";

// Do not remove Chart
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

/*  
chartData = 
[
    {label: "Object A", value: 0},
    {label: "Object B", value: 1},
    {label: "Object C", value: 2},
]
*/
export default function BarChart({ chartData, chartTitle }) {
  const barData = {
    labels: [],
    datasets: [
      {
        data: [],
        categoryPercentage: 1, //  bars proximity
        barPercentage: 0.95, //  bars proximity
        backgroundColor: "rgb(125, 255, 0)",
      },
    ],
  };

  {
    chartData.map(
      (elm) => (
        barData.labels.push(elm.label), barData.datasets[0].data.push(elm.value)
      )
    );
  }

  const barOptions = {
    plugins: {
      // title: {
      //   display: true,
      //   text: chartTitle,
      //   font: { size: 20 },
      // },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        // grid: { color: "gray" },
        ticks: { color: "white" },
      },
      y: {
        // grid: { color: "gray" },
        ticks: { color: "white" },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{chartTitle}</h1>
      <div className={styles.chart}>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
