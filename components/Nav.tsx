"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/projets", label: "projets" },
  { href: "/parcours", label: "parcours" },
  { href: "/a-propos", label: "a propos" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{ borderBottom: "0.5px solid var(--n100)" }}>
      <div className="mx-auto max-w-[820px] px-5 flex items-center justify-between py-5">
      <Link
        href="/"
        className="font-mono text-[13px] sm:text-[15px] font-medium"
        style={{ color: "var(--n900)" }}
      >
        lucas<span style={{ color: "var(--accent)" }}>.</span>desf
      </Link>
      <div className="flex items-center gap-4 sm:gap-5">
        {links.map((link, i) => {
          const active =
            pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <span key={link.href} className="flex items-center gap-4 sm:gap-5">
              {i > 0 && (
                <span
                  className="font-mono text-[11px] sm:text-[12.5px]"
                  style={{ color: "var(--n300)" }}
                >
                  |
                </span>
              )}
              <Link
                href={link.href}
                className="font-mono text-[11px] sm:text-[12.5px] transition-colors duration-200"
                style={{ color: active ? "var(--accent)" : "var(--n400)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  !active &&
                  (e.currentTarget.style.color = "var(--n400)")
                }
              >
                {link.label}
              </Link>
            </span>
          );
        })}
        <span
          className="font-mono text-[11px] sm:text-[12.5px]"
          style={{ color: "var(--n300)" }}
        >
          |
        </span>
        <ThemeToggle />
      </div>
      </div>
    </nav>
  );
}
