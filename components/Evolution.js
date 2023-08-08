import React from "react";
import { useEffect, useState, useContext } from "react";

import styles from "@/styles/GenericSubpage.module.css";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";
import BarChart from "./BarChart";

export default function Evolution() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL + "/evolution"}`, {
          method: "GET",
          headers: { authorization: user },
        });
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
          <BarChart chartData={data} chartTitle={"Evolution"} />
        </div>
      </section>
    );
  }

  return loadChart();
}
