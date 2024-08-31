"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  const { href, children } = props;
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex",
        pathname === href ? "text-foreground" : "text-foreground/60"
      )}
    >
      {children}
    </Link>
  );
}
