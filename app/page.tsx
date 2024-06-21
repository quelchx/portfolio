import Link from "next/link";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";

import { Route } from "@/components/base/route";
import { Heading, SubHeading, Text } from "@/components/base/typography";

import { OVERVIEW } from "@/constants";

import { LatestPosts } from "@/components/partials/home/latest-posts";
import { ServicesHero } from "@/components/partials/home/services-hero";

const TreeCanvas = dynamic(
  () => import("@/components/base/tree-canvas").then((mod) => mod.TreeCanvas),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <section className="flex flex-col space-y-12">
      <div className="flex flex-col lg:flex-row items-center w-full px-4 gap-2">
        <div className="flex flex-col space-y-4 container px-8 py-16">
          <div className="flex flex-col space-y-6 text-neutral-900 dark:text-neutral-300 dark:hover:text-blue-300 hover:text-blue-600 transition-all duration-300">
            <h1 className="text-[5em] font-extrabold text-left tracking-[-2px] leading-[0.7em]">
              Eric
              <br />
              <span className="relative inline-block stroke-current ">
                Quelch
                <svg
                  className="absolute bottom-[-17px] w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h1>
            <Text>
              Experienced Full Stack Developer with a strong history of creating
              and optimizing high-impact applications.
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Link href="/contact">
              <Button className="bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 hover:bg-blue-500 text-neutral-100 outline-none border-none">
                Contact Me
              </Button>
            </Link>
            <a
              href="https://github.com/quelchx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-900 dark:bg-purple-800 dark:hover:bg-purple-700 hover:bg-purple-500 text-neutral-100 outline-none border-none">
                My Github
              </Button>
            </a>
          </div>
        </div>
        <div className="h-[400px] hidden lg:block">
          <TreeCanvas />
        </div>
      </div>
      {/* services overview */}
      <div className="px-12 py-4 mx-auto">
        <ServicesHero />
        <div className="border-t border-dashed dark:border-neutral-700 pt-6 mt-4">
          <Text>
            Consider my services for your website, app, or other digital product
            design needs. With expertise in UI/UX design, wireframing,
            prototyping, and visual design, I bring a broad skill set and
            extensive experience to every project.
          </Text>
          <ul className="mt-4 text-neutral-500 space-y-1 list-disc text-sm list-inside dark:text-neutral-400">
            {OVERVIEW.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <div className="flex flex-wrap border-t justify-end dark:border-neutral-700 pt-6 mt-6">
            <Route href="/" label="Learn more about my services →" />
          </div>
        </div>
      </div>
      {/* latest articles */}
      <div className="px-12 pt-4 pb-12 mx-auto">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">Latest </span>
          Articles
        </Heading>
        <SubHeading>
          I enjoy writing about web development, design, and various other
          topics.
        </SubHeading>

        <LatestPosts />
        <div className="flex flex-wrap border-t justify-end dark:border-neutral-700 pt-6 mt-6">
          <Route href="/blog" label="Read more articles →" />
        </div>
      </div>
    </section>
  );
}
