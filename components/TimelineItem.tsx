import type { TimelineItem as TItem } from "@/lib/types";

export default function TimelineItem({
  item,
  isLast,
}: {
  item: TItem;
  isLast: boolean;
}) {
  return (
    <div
      className="grid gap-0 sm:gap-0"
      style={{
        gridTemplateColumns: "100px 16px 1fr",
      }}
    >
      {/* Date */}
      <div className="hidden pt-[2px] text-right sm:block">
        <span
          className="font-mono text-[11.5px]"
          style={{ color: "var(--n400)" }}
        >
          {item.date}
        </span>
      </div>

      {/* Dot + connector */}
      <div className="hidden flex-col items-center sm:flex">
        <div
          className="mt-[6px] h-2 w-2 shrink-0 rounded-full"
          style={{
            border: "2px solid var(--accent)",
            background: item.status === "active" ? "var(--accent)" : "var(--card-bg)",
          }}
        />
        {!isLast && (
          <div
            className="flex-1"
            style={{
              width: "0.5px",
              background: "var(--n200)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-6 pl-0 sm:pl-3">
        <span
          className="mb-1 block font-mono text-[11.5px] sm:hidden"
          style={{ color: "var(--n400)" }}
        >
          {item.date}
        </span>
        <span
          className="block text-sm lg:text-[15px] font-medium"
          style={{ color: "var(--n900)" }}
        >
          {item.title}
        </span>
        <span
          className="block text-[12.5px] lg:text-sm"
          style={{ color: "var(--n500)" }}
        >
          {item.subtitle}
        </span>
        {item.highlight && (
          <span
            className="mt-1 inline-block font-mono text-[11px]"
            style={{ color: "var(--accent)" }}
          >
            {item.highlight}
          </span>
        )}
      </div>
    </div>
  );
}
