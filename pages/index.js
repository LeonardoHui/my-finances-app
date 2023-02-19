import React from "react";
import styles from "@/styles/Landing.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <LandingContent />
    </Layout>
  );
}

export function LandingContent() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1>Get your finances in order</h1>
        <h1>And</h1>
        <h1> Unlock your financial freedom</h1>
        <div className={styles.button}>
          <Link className={styles.link} href="/account/register">
            <p className={styles.text}>Start Now!</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
