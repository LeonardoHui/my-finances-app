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

export default function DashboardPage({ statements }) {
  const [page, setPage] = useState(STATEMENTS);
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }
  });

  function innerPage() {
    {
      if (page == STATEMENTS) {
        return <Statement list={statements} />;
      } else {
        return <Investments />;
      }
    }
  }

  return (
    <Layout>
      <Header />
      {user ? (
        <div className={styles.layout}>
          <div className={styles.options}>
            <button onClick={() => setPage(STATEMENTS)}>{STATEMENTS}</button>
            <button onClick={() => setPage(INVESTMENTS)}>{INVESTMENTS}</button>
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

export async function getServerSideProps({ req }) {
  const res = await fetch(`${API_URL}/api/fakestatements`);
  const statements = await res.json();

  console.log(req.headers.cookie);
  console.log(statements);
  return {
    props: { statements },
  };
}
