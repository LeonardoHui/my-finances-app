import Link from "next/link";

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </Layout>
  );
}
