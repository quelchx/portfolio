"use client";

import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type MobileLinkProps = {
  sx?: string;
  children: React.ReactNode;
  onOpenChange: (o: boolean) => void;
} & LinkProps;

export function MobileLink(props: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { sx, children, href, onOpenChange } = props;
  return (
    <Link
      className={cn(
        "flex items-center transition-colors duration-300 hover:text-primary",
        pathname === href.toString() ? "text-primary" : "text-foreground/60",
        sx
      )}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
