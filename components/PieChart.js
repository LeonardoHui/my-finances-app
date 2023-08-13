import React from "react";
import styles from "@/styles/Charts.module.css";
import { hslToRgb } from "utils/RGB";

// Do not remove Chart
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

/*  
Example of income chartData
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

    const step = 360 / chartData.length;
    for (let index = 0; index < chartData.length; index++) {
      const hue = (index * step) % 360;
      const rgb = hslToRgb(hue, 75, 50);

      pieData.labels.push(chartData[index].label);
      pieData.datasets[0].data.push(chartData[index].value),
        pieData.datasets[0].backgroundColor.push(
          `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        );
    }

    return (
      <div className={styles.piechart}>
        <Pie data={pieData} options={pieOptions} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{chartTitle}</h1>
      <div className={styles.chart}>{innerElem()}</div>
    </div>
  );
}
