export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <section className="mx-auto max-w-6xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Master Control Center
          </p>
          <h1 className="mt-4 text-5xl font-bold">
            AI Engineering Platform
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Turn user goals into evaluated, documented, reusable AI workflows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">New Mission</h2>
            <p className="mt-2 text-slate-400">
              Define goals, context, constraints, and success criteria.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Research Engine</h2>
            <p className="mt-2 text-slate-400">
              Convert questions into evidence-based findings and options.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">App Builder</h2>
            <p className="mt-2 text-slate-400">
              Turn app ideas into pages, data models, backend plans, and MVP scope.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-900 bg-cyan-950/40 p-6">
          <h2 className="text-2xl font-semibold">Current Build Status</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>✅ App scaffold complete</li>
            <li>✅ Next.js server running</li>
            <li>✅ Master Control Center docs copied</li>
            <li>⏳ Next step: build New Mission page</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
