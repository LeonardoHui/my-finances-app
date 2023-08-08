import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";
import styles from "@/styles/GenericSubpage.module.css";
import LineChart from "./LineChart";

export default function Simulation() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${API_URL + "/simulation?index=selic,ipca"}`,
          {
            method: "GET",
            headers: { authorization: user },
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          throw new Error("Request failed.");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function loadChart() {
    if (data === undefined) {
      return <p>Loading ...</p>;
    }
    return (
      <section className={styles.page}>
        <div className={styles.chart}>
          <LineChart chartData={data} chartTitle={"Simulation"} />
        </div>
      </section>
    );
  }

  return loadChart();
}
