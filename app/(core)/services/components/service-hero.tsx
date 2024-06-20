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
        I offer a variety of services to help you with your project.
      </SubHeading>
    </div>
  );
}
