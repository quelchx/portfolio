import Link from "next/link";
import { Icon } from "@iconify/react";

export function PageLink(props: {
  href: string;
  label: string;
  icon?: string;
}) {
  return (
    <Link
      href={props.href}
      className="flex items-center text-sm text-neutral-500 dark:hover:text-blue-400 hover:text-blue-500 dark:text-neutral-50 group duration-200  gap-3"
    >
      {props.icon && (
        <Icon icon={props.icon} className="size-4 dark:text-neutral-200" />
      )}
      <span>{props.label}</span>
    </Link>
  );
}
