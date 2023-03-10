import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "My Finances",
  description: "Manage your finances easily and intuitively",
  keywords: "finances, money, bank",
};
