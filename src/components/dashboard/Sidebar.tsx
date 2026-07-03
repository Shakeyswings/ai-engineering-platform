"use client";

import Link from "next/link";
import { BarChart3, CheckSquare, ClipboardCheck, LayoutDashboard, Menu, Settings, Shield, Target } from "lucide-react";

interface SidebarProps {
  currentPath?: string;
}

const items = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Missions", href: "/missions/new", icon: Target },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Approvals", href: "/approvals", icon: ClipboardCheck },
  { label: "Evaluations", href: "/evaluations", icon: BarChart3 },
  { label: "System", href: "/system", icon: Shield },
  { label: "Settings", href: "/settings", icon: Settings },
];

/** Fixed enterprise dashboard sidebar with collapsed tablet behavior. */
export default function Sidebar({ currentPath = "/" }: SidebarProps) {
  return (
    <aside className="group hidden h-screen w-[60px] shrink-0 border-r border-[var(--border-default)] bg-[var(--bg-secondary)] transition-[width] duration-300 md:sticky md:top-0 md:flex md:flex-col md:hover:w-[240px] lg:w-[240px]">
      <div className="flex h-16 items-center gap-3 border-b border-[var(--border-default)] px-4">
        <button type="button" aria-label="Collapse navigation" className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]">
          <Menu size={20} />
        </button>
        <span className="hidden text-[14px] font-semibold leading-[1.6] text-[var(--text-primary)] group-hover:block lg:block">AI Platform</span>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Primary navigation">
        {items.map((item) => {
          const Icon = item.icon;
          const active = currentPath === item.href;
          return (
            <Link key={item.href} href={item.href} className={`flex h-11 items-center gap-3 rounded-md border-l-4 px-3 text-[14px] font-medium leading-[1.6] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)] ${active ? "border-[var(--accent-cyan)] bg-[var(--bg-tertiary)] text-[var(--text-primary)]" : "border-transparent text-[var(--text-secondary)]"}`}>
              <Icon size={20} aria-hidden="true" />
              <span className="hidden group-hover:inline lg:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
