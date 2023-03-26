import React, { useState } from "react";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Statement from "@/components/Statement";
import Investments from "@/components/Investments";

import styles from "@/styles/Dashboard.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const STATEMENTS = "STATEMENTS";
const INVESTMENTS = "INVESTMENTS";

export default function DashboardPage({ statements }) {
  const [page, setPage] = useState(STATEMENTS);

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
      <div className={styles.layout}>
        <div className={styles.options}>
          <button onClick={() => setPage(STATEMENTS)}>{STATEMENTS}</button>
          <button onClick={() => setPage(INVESTMENTS)}>{INVESTMENTS}</button>
        </div>
        {innerPage()}
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
