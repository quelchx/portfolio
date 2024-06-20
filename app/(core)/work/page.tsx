import { EXPERIENCE } from "@/constants";

import { Heading, SubHeading } from "@/components/base/typography";
import { WorkCard } from "./components/work-card";

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">Work </span>
          Experience
        </Heading>
        <SubHeading>
          I have worked with a variety of companies and clients over the years.
          Here are some of the projects I&apos;ve worked on.
        </SubHeading>

        <div className="mt-12">
          {EXPERIENCE.map((exp) => (
            <WorkCard key={exp.years} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
