import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Statement from "@/components/Statement";
import Investments from "@/components/Investments";
import AuthContext from "@/context/AuthContext";

import styles from "@/styles/Dashboard.module.css";
import Header from "@/components/Header";

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

  function innerPage() {
    if (data === undefined) {
      return <p>Loading ...</p>;
    }
    if (page == STATEMENTS) {
      return <Statement list={data} />;
    }
    if (page == INVESTMENTS) {
      return <Investments list={data} />;
    }
  }

  return (
    <Layout>
      <Header />
      {user ? (
        <div className={styles.layout}>
          <div className={styles.options}>
            <button
              onClick={() => {
                setData();
                fetchData("/statements");
                setPage(STATEMENTS);
              }}
            >
              {STATEMENTS}
            </button>
            <button
              onClick={() => {
                setData();
                fetchData("/investments");
                setPage(INVESTMENTS);
              }}
            >
              {INVESTMENTS}
            </button>
          </div>
          {innerPage()}
        </div>
      ) : (
        <div className={styles.error}>
          <h1>
            <FaExclamationTriangle /> 401
          </h1>
          <h2>Sorry, there is nothing here</h2>
          <p>Please log in</p>
        </div>
      )}
    </Layout>
  );
}
