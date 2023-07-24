import React from "react";

import styles from "@/styles/Charts.module.css";

// Do not remove Chart
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Example of income chartData
// const list = {
//   lines: ["deposits", "selic"],
//   values: [
//     { month: "jan", value: [1, 1] },
//     { month: "fev", value: [1, 1.1] },
//     { month: "mar", value: [2.2, 2.5] },
//     { month: "apr", value: [3, 3] },
//     { month: "may", value: [4, 4.1] },
//     { month: "jun", value: [5, 5.5] },
//     { month: "jul", value: [5.8, 6] },
//     { month: "aug", value: [6, 6.5] },
//     { month: "set", value: [7, 8] },
//   ],
// };
export default function LineChart({ chartData, chartTitle }) {
  const lineData = {
    labels: [],
    datasets: [
      {
        data: [],
        label: chartData.lines[0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        data: [],
        label: chartData.lines[1],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const lineOptions = {
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

  function innerElem() {
    if (chartData === null || chartData.length === 0) {
      return (
        <div className={styles.empty}>
          <h3>Nothing to show</h3>
        </div>
      );
    }

    chartData.values.map(
      (elm) => (
        lineData.labels.push(elm.month),
        lineData.datasets[0].data.push(elm.value[0]),
        lineData.datasets[1].data.push(elm.value[1])
      )
    );

    return <Line data={lineData} options={lineOptions} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{chartTitle}</h1>
      <div className={styles.chart}>{innerElem()}</div>
    </div>
  );
}
