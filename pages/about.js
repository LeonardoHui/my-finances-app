import React from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "@/styles/About.module.css";

export default function AboutPage() {
  return (
    <Layout title="About MyFinances App">
      <Header />
      <section className={styles.container}>
        <h1>About</h1>
        <p>
          This project is for learning purposes only. The main idea is to
          practice overall Web Development
        </p>
      </section>
      <Footer />
    </Layout>
  );
}
