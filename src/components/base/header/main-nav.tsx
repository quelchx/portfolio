import Link from "next/link";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site.config";

import { NavLink } from "./nav-link";

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 items-center space-x-2 flex">
        <Icons.logo className="h-8 w-8" />
        <span className="font-semibold text-lg tracking-tight">
          {siteConfig.author}
        </span>
      </Link>
      {siteConfig.pages.map((link) => (
        <NavLink key={link.label} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
