import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import Statement from "@/components/Statement";
import Simulation from "@/components/Simulation";
import Investments from "@/components/Investments";
import Evolution from "@/components/Evolution";
import styles from "@/styles/Dashboard.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

import { useContext } from "react";
import { useRouter } from "next/router";

const STATEMENTS = "STATEMENTS";
const INVESTMENTS = "INVESTMENTS";

export default function DashboardPage() {
  const [page, setPage] = useState(STATEMENTS);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }
  }, []);

  function setCurrentPageFunc(pageName) {
    setPage(pageName);
  }

  function innerPage() {
    if (page == STATEMENTS) {
      return <Statement />;
    } else if (page == "SIMULATION") {
      return <Simulation />;
    } else if (page == INVESTMENTS) {
      return <Investments />;
    } else if (page == "EVOLUTION") {
      return <Evolution />;
    } else {
      return (
        <div style={{ height: "100%", "margin-top": "10px" }}>
          <h1>Soon</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
      );
    }
  }

  return (
    <Layout>
      <Header />
      <div className={styles.layout}>
        <SideBar setCurrentPage={setCurrentPageFunc} />
        <div className={styles.layout2}>{innerPage()}</div>
      </div>
    </Layout>
  );
}
