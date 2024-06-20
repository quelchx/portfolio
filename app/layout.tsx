import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Shell } from "@/components/base/shell";
import { ThemeProvider } from "@/components/base/theme-provider";
import { QueryProvider } from "@/components/base/query-provider";

import { Footer } from "@/components/base/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eric Quelch",
  description: "Full Stack Developer",
};

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
              <Toaster />
            </Shell>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
