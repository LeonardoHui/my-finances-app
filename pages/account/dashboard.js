import React, { useState } from "react";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Statement from "@/components/Statement";
import Investments from "@/components/Investments";

import styles from "@/styles/Dashboard.module.css";

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
      <div className={styles.layout}>
        <div>
          <button
            className={styles.buttons}
            onClick={() => setPage(STATEMENTS)}
          >
            {STATEMENTS}
          </button>
          <button
            className={styles.buttons}
            onClick={() => setPage(INVESTMENTS)}
          >
            {INVESTMENTS}
          </button>
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
