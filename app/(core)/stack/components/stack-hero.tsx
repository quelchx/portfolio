"use client";

import Typewriter from "typewriter-effect";
import { Heading, SubHeading } from "@/components/base/typography";

export function StackHero() {
  return (
    <div>
      <Heading>
        <div className="flex space-x-2">
          <span className="text-blue-600 dark:text-blue-500">My favorite </span>
          <Typewriter
            options={{
              strings: ["Languages", "Frameworks", "Tools", "Libraries"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Heading>
      <SubHeading>
        Here are some of the languages, libraries, and tools that I enjoy
        working with.
      </SubHeading>
    </div>
  );
}
