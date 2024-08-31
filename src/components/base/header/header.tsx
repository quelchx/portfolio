import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { MobileNav } from "./mobile-nav";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";

const socialLinks = [
  {
    label: "Github",
    href: siteConfig.links.github,
    icon: Icons.github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Icons.linkedin,
  },
];

type SocialLinkProps = {
  href: string;
  label: string;
  icon: (typeof Icons)[keyof typeof Icons];
};

function SocialLink(props: SocialLinkProps) {
  const { href, label } = props;
  return (
    <Link href={href} target="_blank">
      <div
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-10 px-0 hidden sm:inline-flex"
        )}
      >
        <props.icon className="h-7 w-7" />
        <span className="sr-only">{label}</span>
      </div>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl mx-auto flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
