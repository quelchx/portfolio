import { SubHeading, Heading } from "@/components/base/typography";
import { ProjectList } from "@/components/partials/projects/project-list";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Here are some of the projects I've worked on over the years. I also have contributed to a few open-source projects. You can find them on my GitHub profile.",
};

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">Open </span>
          Source Projects
        </Heading>
        <SubHeading>
          Here are some of the projects I&apos;ve worked on over the years. I
          also have contributed to a few open-source projects. You can find them
          on my GitHub profile.
        </SubHeading>

        <div className="mt-12 lg:mt-18 border-t dark:border-neutral-700 pt-12">
          <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400">
            Projects
          </p>
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
