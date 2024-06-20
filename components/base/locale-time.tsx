"use client";

import { useLocalTime } from "@/hooks/useLocaleTime";

export function LocaleTime() {
  const time = useLocalTime();

  return (
    <time suppressHydrationWarning className="justify-end ml-auto">
      {time}
    </time>
  );
}
