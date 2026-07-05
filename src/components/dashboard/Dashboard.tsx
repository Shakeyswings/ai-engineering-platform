export default function Dashboard() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#f8fafc", padding: "48px" }}>
      <p style={{ letterSpacing: "0.32em", color: "#22d3ee", fontSize: "14px", fontWeight: 700 }}>
        MASTER CONTROL CENTER
      </p>

      <h1 style={{ fontSize: "48px", lineHeight: 1.1, marginTop: "24px", marginBottom: "16px" }}>
        AI Engineering Platform
      </h1>

      <p style={{ maxWidth: "720px", color: "#cbd5e1", fontSize: "18px" }}>
        Phase 2 is active. Mission generation contracts are merged, and the mission state machine is now in progress.
      </p>

      <section style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: "40px" }}>
        <div style={{ border: "1px solid #334155", borderRadius: "16px", padding: "24px", background: "#0f172a" }}>
          <p style={{ color: "#94a3b8", fontSize: "12px", letterSpacing: "0.16em" }}>PHASE</p>
          <h2>2.2</h2>
          <p>Mission State Machine</p>
        </div>

        <div style={{ border: "1px solid #334155", borderRadius: "16px", padding: "24px", background: "#0f172a" }}>
          <p style={{ color: "#94a3b8", fontSize: "12px", letterSpacing: "0.16em" }}>STATUS</p>
          <h2>Active</h2>
          <p>PR #7 open</p>
        </div>

        <div style={{ border: "1px solid #334155", borderRadius: "16px", padding: "24px", background: "#0f172a" }}>
          <p style={{ color: "#94a3b8", fontSize: "12px", letterSpacing: "0.16em" }}>NEXT</p>
          <h2>2.3</h2>
          <p>Mission Repository Layer</p>
        </div>
      </section>
    </main>
  );
}
