"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavLink(props: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex",
        pathname === props.href ? "text-foreground" : "text-foreground/60"
      )}
    >
      {props.children}
    </Link>
  );
}
