import Link from "next/link";

const cards = [
  {
    title: "New Mission",
    description: "Define goals, context, constraints, and success criteria.",
    href: "/missions/new",
  },
  {
    title: "Workflow Library",
    description: "Reuse successful workflows and saved mission patterns.",
    href: "/workflows",
  },
  {
    title: "Supabase Auth",
    description: "Sign in, sign up, and prepare persistent user storage.",
    href: "/auth",
  },
  {
    title: "Settings",
    description: "Check environment variables and integration readiness.",
    href: "/settings",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl space-y-10 p-8">
        <div className="flex items-start justify-between gap-6">
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

          <Link
            href="/missions/new"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Create Mission
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-600"
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-2 text-slate-400">{card.description}</p>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-cyan-900 bg-cyan-950/40 p-6">
          <h2 className="text-2xl font-semibold">Phase 1 Build Status</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Mission Dashboard installed</li>
            <li>New Mission form installed</li>
            <li>Mission Workspace installed</li>
            <li>Workflow Library installed</li>
            <li>Supabase client scaffold installed</li>
            <li>Auth page installed</li>
            <li>Database schema generated</li>
            <li>Next step: create Supabase project and add keys</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
