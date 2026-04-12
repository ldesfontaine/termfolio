export default function CodeBlock({
  filename,
  language,
  children,
}: {
  filename: string;
  language: string;
  children: string;
}) {
  return (
    <div
      className="my-6 overflow-hidden rounded-lg"
      style={{
        background: "var(--code-bg)",
        border: "0.5px solid var(--code-border)",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "0.5px solid var(--code-border)" }}
      >
        <span
          className="font-mono text-xs"
          style={{ color: "var(--n500)" }}
        >
          {filename}
        </span>
        <span
          className="font-mono text-[10px] uppercase"
          style={{ color: "var(--n300)" }}
        >
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto p-4">
        <code
          className="font-mono text-[12.5px] leading-[1.8]"
          style={{ color: "var(--n700)" }}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
