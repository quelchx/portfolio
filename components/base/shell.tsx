"use client";

import { useState, memo } from "react";
import { Icon } from "@iconify/react";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { routes } from "@/data/constants";

import { Button } from "@/components/ui/button";
import { PageLink } from "@/components/base/page-link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon
            icon="ph:sun"
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="ph:moon"
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DownloadCV() {
  return (
    <a
      href="/ericquelch-resume.pdf"
      download="EricQuelchResume.pdf"
      target="_blank"
      className="inline-flex items-center gap-2 justify-center rounded-lg py-3 px-6 text-sm outline-offset-2 transition bg-white text-black font-medium hover:bg-neutral-50 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 group w-full border dark:border-white/20"
    >
      <Icon icon="pepicons-pop:cv" className="size-4 dark:text-neutral-200" />
      <span>Download CV</span>
    </a>
  );
}

function AvatarCard() {
  return (
    <a className="group block flex-shrink-0 cursor-pointer" href="/">
      <div className="flex items-center">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/74473426?v=4"
            alt="avatar"
            className="inline-block h-9 w-9 ring-1 ring-black dark:ring-white/10 grayscale filter rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:opacity-80">
            Eric Quelch
          </p>
          <p className="text-xs font-medium text-neutral-500 dark:text-white group-hover:opacity-80">
            Full Stack Developer
          </p>
        </div>
      </div>
    </a>
  );
}

function PageLinks() {
  return routes.map((route) => (
    <PageLink
      label={route.label}
      key={route.href}
      href={route.href}
      icon={route.icon}
    />
  ));
}

export const Shell = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="min-h-[640px] flex flex-col">
      <div className="z-50 hidden bg-white dark:bg-neutral-900 lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-1 relative min-h-0 border-r bg-white dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex flex-col flex-1 pt-12 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 pl-8 text-black">
              <AvatarCard />
            </div>
            <nav className="flex-1 mt-6">
              <div>
                <div className="px-8 py-4 space-y-4">
                  <p className="text-sm font-semibold uppercase text-black dark:text-white">
                    Core
                  </p>
                  <PageLinks />
                </div>
              </div>
            </nav>
          </div>
          <div className="flex flex-shrink-0 py-4 px-6 border-t dark:border-neutral-700 items-center">
            <DownloadCV />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggle}
          className="fixed z-50 bottom-4 right-4 p-4 bg-white dark:bg-neutral-900 rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden w-72">
          <div
            className={cn(
              "fixed inset-y-0 left-0 py-2 z-50 w-64  bg-white dark:bg-neutral-900 shadow-lg transform transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center flex-shrink-0 pl-2 text-black">
                  <AvatarCard />
                </div>
              </div>
              <nav className="px-2 mt-3 space-y-1">
                <div>
                  <div className="px-8 py-4 space-y-4">
                    <p className="text-sm font-semibold uppercase text-black dark:text-white">
                      Dashboard
                    </p>
                    <PageLinks />
                  </div>
                </div>
              </nav>
              <div className="flex-1" />
              <div className="flex py-4 px-6 border-t dark:border-neutral-700 items-center">
                <DownloadCV />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed top-6 right-6">
        <ModeToggle />
      </div>
      <main
        className="flex-1 lg:ml-72 px-8 z-100"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
      >
        {props.children}
      </main>
    </div>
  );
};
