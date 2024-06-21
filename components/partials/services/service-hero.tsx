"use client";

import Typewriter from "typewriter-effect";
import { Heading, SubHeading } from "@/components/base/typography";

export function ServiceHero() {
  return (
    <div>
      <Heading>
        <div className="flex space-x-2">
          <span>Are you need for a</span>
          <span className="text-blue-600 dark:text-blue-500">
            <Typewriter
              options={{
                strings: [
                  "web developer",
                  "designer",
                  "consultant",
                  "freelancer",
                  "tutor",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </Heading>
      <SubHeading>
        I am actively seeking full-time or part-time opportunities. If your
        project requires a developer, designer, or consultant, I invite you to
        consider my services.
      </SubHeading>
    </div>
  );
}
