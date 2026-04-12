import type { TimelineItem as TItem } from "@/lib/types";
import TimelineItem from "./TimelineItem";

export default function Timeline({ items }: { items: TItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} isLast={i === items.length - 1} />
      ))}
    </div>
  );
}
