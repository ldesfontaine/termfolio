"use client";

import Link from "next/link";
import type { ProjectMeta } from "@/lib/types";

export default function ProjectCard({
  project,
  href,
}: {
  project: ProjectMeta;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="grid gap-4 px-6 py-5 transition-[background] duration-150"
      style={{
        gridTemplateColumns: "1fr auto",
        background: "var(--card-bg)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--accent-muted)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.color = "var(--accent)";
          arrow.style.transform = "translateX(3px)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--card-bg)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.color = "var(--n300)";
          arrow.style.transform = "translateX(0)";
        }
      }}
    >
      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[11px] uppercase"
            style={{ color: "var(--accent)" }}
          >
            {project.category}
          </span>
          {project.badge && (
            <span
              className="rounded px-2 py-0.5 font-mono text-[10px]"
              style={{
                color: "var(--accent)",
                background: "var(--accent-muted)",
              }}
            >
              {project.badge}
            </span>
          )}
        </div>
        <span className="text-base lg:text-lg font-medium" style={{ color: "var(--n900)" }}>
          {project.title}
        </span>
        <span className="text-[13.5px] lg:text-[15px]" style={{ color: "var(--n500)" }}>
          {project.description}
        </span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded px-2 py-0.5 font-mono text-[11px] lg:text-xs"
              style={{
                color: "var(--n500)",
                background: "var(--n50)",
                border: "0.5px solid var(--n100)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <svg
          data-arrow
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-all duration-200"
          style={{ color: "var(--n300)" }}
        >
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
