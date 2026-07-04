"use client";

import Link from "next/link";
import { BarChart3, CheckSquare, ClipboardList, LayoutDashboard, Menu, Settings, ShieldCheck, Target } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  currentPath?: string;
}

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Missions", href: "/missions/new", icon: Target },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Approvals", href: "/approvals", icon: ShieldCheck },
  { label: "Evaluations", href: "/evaluations", icon: BarChart3 },
  { label: "System", href: "/system", icon: ClipboardList },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ currentPath = "/" }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`hidden min-h-screen border-r border-[var(--border-default)] bg-[var(--bg-secondary)] transition-all duration-300 md:block ${collapsed ? "w-[60px]" : "w-[240px]"}`}>
      <div className="flex h-16 items-center justify-between border-b border-[var(--border-default)] px-4">
        <Link href="/" className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--accent-cyan)] text-[var(--text-inverted)]"><Target size={16} aria-hidden="true" /></div>
          {!collapsed ? <span className="text-[14px] font-semibold leading-[1.6] text-[var(--text-primary)]">AI Platform</span> : null}
        </Link>
        <button type="button" onClick={() => setCollapsed((value) => !value)} className="rounded-md p-2 text-[var(--text-secondary)] transition duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]" aria-label="Toggle sidebar">
          <Menu size={18} aria-hidden="true" />
        </button>
      </div>
      <nav className="space-y-1 p-3" aria-label="Primary navigation">
        {navItems.map((item) => {
          const active = currentPath === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={`flex min-h-11 items-center gap-3 rounded-md border-l-4 px-3 py-2 text-[14px] font-medium leading-[1.6] transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)] ${active ? "border-[var(--accent-cyan)] bg-[var(--bg-tertiary)] text-[var(--text-primary)]" : "border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"}`}>
              <Icon size={20} aria-hidden="true" />
              {!collapsed ? <span>{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
