"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../src/lib/api";

type HealthResponse = {
  status: string;
  service: string;
  timestamp: string;
};

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<HealthResponse>("/health")
      .then(setHealth)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>CampusOps Frontend</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!health && !error && <p>Loading backend status…</p>}

      {health && (
        <pre style={{ marginTop: 16 }}>
          {JSON.stringify(health, null, 2)}
        </pre>
      )}
    </main>
  );
}
