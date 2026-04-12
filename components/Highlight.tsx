export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-6 pl-5"
      style={{
        borderLeft: "2px solid var(--accent)",
      }}
    >
      <p
        className="text-base leading-[1.65]"
        style={{ color: "var(--n900)" }}
      >
        {children}
      </p>
    </blockquote>
  );
}
