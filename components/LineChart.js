import React from "react";

import styles from "@/styles/Charts.module.css";
import { hslToRgb } from "utils/RGB";

// Do not remove Chart
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Example of income chartData
// const list = {
//   lines: ["deposits", "selic"],
//   values: [
//     { month: "jan", value: [1, 1] },
//     { month: "fev", value: [1, 1.1] },
//   ],
// };

export default function LineChart({ chartData, chartTitle }) {
  const linesnum = chartData.lines.length;
  const step = 360 / linesnum; // Step size for varying hue
  let el = {};
  const lineData = {
    labels: [],
    datasets: [],
  };

  //Create configs for each line
  for (let i = 0; i < linesnum; i++) {
    const hue = (i * step) % 360;
    const rgb = hslToRgb(hue, 75, 50); // Convert HSL to RGB
    el = {
      data: [],
      label: chartData.lines[i],
      borderColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
      backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.5)`,
    };
    lineData.datasets.push(el);
  }

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

    for (let i = 0; i < chartData.values.length; i++) {
      lineData.labels.push(chartData.values[i].month);
      for (let j = 0; j < chartData.values[i].value.length; j++) {
        lineData.datasets[j].data.push(chartData.values[i].value[j]);
      }
    }

    return <Line data={lineData} options={lineOptions} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{chartTitle}</h1>
      <div className={styles.chart}>{innerElem()}</div>
    </div>
  );
}
