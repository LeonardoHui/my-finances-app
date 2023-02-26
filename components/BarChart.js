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
        backgroundColor: "rgb(225, 225, 0)",
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
      title: {
        display: true,
        text: chartTitle,
        font: { size: 20 },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Bar data={barData} options={barOptions} />
    </div>
  );
}
