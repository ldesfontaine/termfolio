export default function StatusBadge({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-[5px] font-mono text-xs"
      style={{
        color: "var(--accent)",
        background: "var(--accent-muted)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: "var(--accent)",
          animation: "pulse-dot 2s infinite",
        }}
      />
      {text}
    </span>
  );
}
