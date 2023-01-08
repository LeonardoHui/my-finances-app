import React from "react";

import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";

import { API_URL } from "@/config/index";

export default function DashboardPage({ events }) {
  return (
    <Layout>
      <h1>Statements</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const res = await fetch(`${API_URL}/api/fakedata`);
  const events = await res.json();

  console.log(req.headers.cookie);

  return {
    props: { events },
  };
}
