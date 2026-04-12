import type { Certification } from "@/lib/types";

function statusStyle(status: Certification["status"]) {
  if (status === "in-progress") {
    return {
      background: "var(--accent-muted)",
      color: "var(--accent)",
    };
  }
  // obtained + course-only share the same style
  return {
    background: "rgba(46,107,79,0.08)",
    color: "#2E6B4F",
  };
}

export default function CertifList({ items }: { items: Certification[] }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--n100)",
        borderRadius: "10px",
        border: "0.5px solid var(--n100)",
      }}
    >
      {items.map((cert, i) => (
        <div
          key={i}
          className="grid items-center gap-4 px-5 py-3.5"
          style={{
            gridTemplateColumns: "1fr auto",
            background: "var(--card-bg)",
            borderTop: i > 0 ? "1px solid var(--n100)" : undefined,
          }}
        >
          <div>
            <span
              className="block text-sm font-medium"
              style={{ color: "var(--n900)" }}
            >
              {cert.name}
            </span>
            <span
              className="block text-[12.5px]"
              style={{ color: "var(--n500)" }}
            >
              {cert.organization}
            </span>
          </div>
          <span
            className="rounded px-2.5 py-[3px] font-mono text-[11px]"
            style={statusStyle(cert.status)}
          >
            {cert.statusLabel}
          </span>
        </div>
      ))}
    </div>
  );
}
