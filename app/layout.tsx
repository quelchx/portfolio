import Link from "next/link";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Shell } from "@/components/base/shell";
import { ThemeProvider } from "@/components/base/theme-provider";
import { QueryProvider } from "@/components/base/query-provider";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eric Quelch",
  description: "Full Stack Developer",
};

function Footer() {
  return (
    <footer className="border-t border-dashed dark:border-neutral-700">
      <div className="px-12 pt-4 pb-12 mx-auto">
        <div className="flex-col flex lg:flex-row lg:items-center gap-y-12 items-start justify-between pb-6 pt-16 mx-auto">
          <div className="flex flex-col gap-12 w-full">
            <span className="inline-flex items-center text-neutral-1300 dark:text-white gap-3 group-hover:opacity-80">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 232 232"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z"
                    fill="currentColor"
                  ></path>{" "}
                </svg>
              </span>
              <span className="uppercase font-bold text-xl">Eric Quelch</span>
            </span>
            <div className="leading-6 text-neutral-500 dark:text-neutral-200 text-sm flex flex-wrap justify-between w-full">
              <nav className="flex-wrap  flex gap-y-3  gap-x-8">
                <Link href="/" className="hover:text-black duration-300">
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-black duration-300"
                >
                  Projects
                </Link>
                <Link href="/socials" className="hover:text-black duration-300">
                  Socials
                </Link>
                <Link href="/contact" className="hover:text-black duration-300">
                  Contact
                </Link>
              </nav>
              <div>
                <p className="justify-end ml-auto">22:00:00</p>
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development" ? true : false;
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <body
        className={cn(
          "min-h-screen dark:bg-neutral-900 bg-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Shell>
              {children}
              <Footer />
            </Shell>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
