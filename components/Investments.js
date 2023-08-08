import React from "react";
import { useEffect, useState, useContext } from "react";

import styles from "@/styles/Investments.module.css";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import List from "./List";

export default function Investments() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL + "/investments"}`, {
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

  function loadPage() {
    if (data === undefined) {
      return <p>Loading ...</p>;
    }
    return (
      <section className={styles.table}>
        <List listData={data.investments} listTitle="Stocks" />
        <PieChart
          chartData={data.stock_distribution}
          chartTitle={"Stocks Distribution"}
        />
        <BarChart
          chartData={data.dividend_yied}
          chartTitle={"Dividend Yield"}
        />
        <BarChart chartData={data.dividend_paid} chartTitle={"Dividend Paid"} />
      </section>
    );
  }

  return loadPage();
}
