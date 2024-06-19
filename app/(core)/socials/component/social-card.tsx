import { Icon } from "@iconify/react";
import type { Socials } from "@/types";

export function SocialCard(props: Socials) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12  border-t dark:border-neutral-700">
      <div className="flex flex-col space-y-1">
        <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400">
          {props.section}
        </p>
        <span className="text-sm tracking-tighter leading-snug text-pretty">
          {props.overview}
        </span>
      </div>
      <ul className="grid md:grid-cols-2 gap-12 dark:border-neutral-700 lg:col-span-2">
        {props.platforms.map((p) => (
          <li key={p.platform} className="flow-root">
            <a
              href={p.url ?? `#${p.platform.toLowerCase().replace(/\s/g, "-")}`}
              target={p.url ? "_blank" : "_self"}
            >
              <div className=" flex items-center gap-x-4">
                <Icon icon={p.icon} className="size-10" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-black dark:text-white hover:text-blue-500">
                    {p.platform}
                  </p>
                  <p className="text-neutral-500 text-sm dark:text-neutral-400">
                    {p.username}
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
