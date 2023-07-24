import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Statement from "@/components/Statement";
import Simulation from "@/components/Simulation";
import Investments from "@/components/Investments";
import AuthContext from "@/context/AuthContext";

import styles from "@/styles/Dashboard.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

import { useContext } from "react";
import { useRouter } from "next/router";

const STATEMENTS = "STATEMENTS";
const INVESTMENTS = "INVESTMENTS";

export default function DashboardPage() {
  const [page, setPage] = useState(STATEMENTS);
  const [data, setData] = useState();
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }

    fetchData("/statements");
  }, []);

  async function fetchData(path) {
    const res = await fetch(`${API_URL + path}`, {
      method: "GET",
      headers: {
        authorization: user,
      },
    });
    setData(await res.json());
  }

  function setCurrentPageFunc(pageName) {
    setPage(pageName);
  }

  function innerPage() {
    if (data === undefined) {
      return <p>Loading ...</p>;
    }
    if (page == STATEMENTS) {
      return <Statement list={data} />;
    } else if (page == "SIMULATION") {
      return <Simulation list={data} />;
    } else if (page == INVESTMENTS) {
      return <Investments list={data} />;
    } else {
      return <p>{page}</p>;
    }
  }

  return (
    <Layout>
      <Header />
      <div className={styles.layout}>
        <SideBar setCurrentPage={setCurrentPageFunc} />
        {user ? (
          <div className={styles.layout2}>{innerPage()}</div>
        ) : (
          <div className={styles.error}>
            <h1>
              <FaExclamationTriangle /> 401
            </h1>
            <h2>Sorry, there is nothing here</h2>
            <p>Please log in</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
