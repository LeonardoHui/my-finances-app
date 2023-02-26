import React from "react";

// Do not remove Chart
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 200; //Not 255 to avoid full white
  return (
    "rgb(" +
    o(r() * s) +
    "," +
    o(r() * s + 55) + //+25 to avoid full black
    "," +
    o(r() * s) +
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
      },
    ],
  };

  {
    chartData.map(
      (elm) => (
        pieData.labels.push(elm.label),
        pieData.datasets[0].data.push(elm.value),
        pieData.datasets[0].backgroundColor.push(random_rgba())
      )
    );
  }

  const pieOptions = {
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
    <div>
      <Pie data={pieData} options={pieOptions} />
    </div>
  );
}
