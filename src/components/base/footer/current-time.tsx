"use client";

import { useEffect, useState } from "react";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime.toLocaleTimeString();
};

export function CurrentTime() {
  const currentTime = useCurrentTime();
  return (
    <time
      suppressHydrationWarning
      dateTime={currentTime}
      className="text-muted-foreground"
    >
      {currentTime}
    </time>
  );
}
