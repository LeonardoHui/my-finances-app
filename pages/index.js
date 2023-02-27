import React from "react";
import styles from "@/styles/Landing.module.css";
import Link from "next/link";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <LandingContent />
      <Footer />
    </Layout>
  );
}

export function LandingContent() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.textbox}>
          <p>Get your finances in order and unlock your financial freedom</p>
        </div>
        <div className={styles.button}>
          <Link className={styles.link} href="/account/register">
            <p className={styles.text}>Start Now!</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
