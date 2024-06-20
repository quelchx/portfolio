"use client";

import { useLocalTime } from "@/hooks/useLocaleTime";

export function LocaleTime() {
  const time = useLocalTime();
  return (
    <p className="justify-end ml-auto">
      {time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })}
    </p>
  );
}
