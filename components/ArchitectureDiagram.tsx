export default function ArchitectureDiagram({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="overflow-x-auto rounded-lg p-6"
        style={{
          background: "var(--code-bg)",
          border: "0.5px solid var(--code-border)",
        }}
      >
        {children}
      </div>
      {caption && (
        <figcaption
          className="mt-2 text-center font-mono text-[11px]"
          style={{ color: "var(--n400)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
