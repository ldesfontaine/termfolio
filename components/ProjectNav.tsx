"use client";

import Link from "next/link";
import type { ProjectMeta } from "@/lib/types";

export default function ProjectNav({
  prev,
  next,
}: {
  prev?: ProjectMeta;
  next?: ProjectMeta;
}) {
  return (
    <div
      className="flex items-center justify-between py-6"
      style={{ borderTop: "0.5px solid var(--n100)" }}
    >
      {prev ? (
        <Link
          href={`/projets/${prev.slug}`}
          className="group flex flex-col"
        >
          <span
            className="font-mono text-[10.5px] uppercase"
            style={{ color: "var(--n300)" }}
          >
            précédent
          </span>
          <span
            className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--n700)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--n700)")
            }
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 3L5 8l5 5" />
            </svg>
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/projets/${next.slug}`}
          className="group flex flex-col items-end"
        >
          <span
            className="font-mono text-[10.5px] uppercase"
            style={{ color: "var(--n300)" }}
          >
            suivant
          </span>
          <span
            className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--n700)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--n700)")
            }
          >
            {next.title}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
