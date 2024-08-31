"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { MenuIcon } from "lucide-react";

import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { MobileLink } from "./mobile-link";

const socialLinks = [
  {
    label: "Github",
    href: siteConfig.links.github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink href="/" onOpenChange={setOpen} sx="py-6">
          <Icons.logo className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Eric Quelch</span>
        </MobileLink>
        <div className="flex flex-col space-y-2">
          {siteConfig.pages.map((page) => (
            <MobileLink
              key={page.label}
              href={page.href}
              onOpenChange={setOpen}
              sx={"text-lg font-medium"}
            >
              {page.label}
            </MobileLink>
          ))}

          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="text-lg font-medium flex items-center transition-colors text-foreground/60 duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
