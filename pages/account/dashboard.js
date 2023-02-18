import React from "react";

import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import styles from "@/styles/Dashboard.module.css";
import { API_URL } from "@/config/index";

import { Chart } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

export default function DashboardPage({ statements }) {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(0, 255, 0)",
        borderColor: "rgb(0, 255, 0)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const data2 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Layout>
      <h1>Statements</h1>
      <div className={styles.list}>
        {statements.length === 0 && <h3>No events to show</h3>}
        {statements.map((stmt) => (
          <EventItem key={stmt.id} evt={stmt} />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div>
          <Bar data={data} />
        </div>
        <div>
          <Pie data={data2} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const res = await fetch(`${API_URL}/api/fakestatements`);
  const statements = await res.json();

  console.log(req.headers.cookie);
  console.log(statements);
  return {
    props: { statements },
  };
}
