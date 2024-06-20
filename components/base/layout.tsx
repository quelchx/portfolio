"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { DownloadCV } from "./download-cv";
import { AvatarCard } from "./avatar-card";
import { PageLinks } from "./page-links";

export function Layout(props: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div id="main">
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
}
