import React from "react";
import { useEffect, useState, useContext } from "react";

import styles from "@/styles/Statement.module.css";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";
import PieChart from "./PieChart";
import List from "./List";

export default function Statement() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL + "/statements"}`, {
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
    var balance_distribution = [];
    data.balance.map((item) =>
      balance_distribution.push({
        label: item.transaction_type,
        value: item.amount,
      })
    );
    return (
      <section className={styles.table}>
        <div className={styles.statements}>
          <List listData={data.statements} listTitle="Statement" />
        </div>
        <List listData={data.balance} listTitle="Bank Balance" />
        <div className={styles.chart}>
          <PieChart
            chartData={balance_distribution}
            chartTitle={"Balance Distribution"}
          />
        </div>
      </section>
    );
  }

  return loadPage();
}
