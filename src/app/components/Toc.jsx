"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Toc() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h2, h3")
    ).map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName,
    }));

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    elements.forEach((h) =>
      document.getElementById(h.id)?.observe?.()
    );

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="space-y-0.5 hidden md:block text-[11px] leading-4">
      {headings.map((h) => (
        <li
          key={h.id}
          className={cn(
            h.level === "H3" && "ml-2",
            activeId === h.id
              ? "text-white"
              : "text-zinc-500"
          )}
        >
          <a
            href={`#${h.id}`}
            className="block truncate hover:text-zinc-200"
          >
            {h.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
