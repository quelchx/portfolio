import { Icon } from "@iconify/react";

import { Route } from "./route";
import { LocaleTime } from "./locale-time";

export function Footer() {
  return (
    <footer className="border-t border-dashed dark:border-neutral-700">
      <div className="px-12 pt-4 pb-12 mx-auto">
        <div className="flex-col flex lg:flex-row lg:items-center gap-y-12 items-start justify-between pb-6 pt-16 mx-auto">
          <div className="flex flex-col gap-12 w-full">
            <div className="inline-flex items-center text-neutral-100 dark:text-white gap-3 group-hover:opacity-80">
              <Icon icon="mdi:tree-outline" className="text-3xl" />
              <span className="uppercase font-bold text-xl">Eric Quelch</span>
            </div>
            <div className="leading-6 text-neutral-500 dark:text-neutral-200 text-sm flex flex-wrap justify-between w-full">
              <nav className="flex-wrap  flex gap-y-3  gap-x-8">
                <Route href="/home" label="Home" />
                <Route href="/projects" label="Projects" />
                <Route href="/socials" label="Socials" />
                <Route href="/blog" label="Blog" />
              </nav>
              <div>
                <LocaleTime />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex border-t dark:border-white/20 pt-6 pb-12 mx-auto">
        <p className="text-sm text-zinc-500">
          © Copyright Eric Quelch. All rights reserved. Designed and built by
          Eric Quelch.
        </p>
      </div>
    </footer>
  );
}
