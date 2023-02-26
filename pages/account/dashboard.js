import React from "react";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Statement from "@/components/Statement";
import Investments from "@/components/Investments";

export default function DashboardPage({ statements }) {
  return (
    <Layout>
      {/* <Statement list={statements} /> */}
      <Investments />
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
