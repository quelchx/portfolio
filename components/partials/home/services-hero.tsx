"use client";
import Typewriter from "typewriter-effect";
import { Heading, SubHeading } from "@/components/base/typography";

export function ServicesHero() {
  return (
    <div>
      <Heading>
        <div className="flex space-x-1.5">
          <span>Do you require a </span>
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
        I specialize in designing and developing top-tier digital products.
      </SubHeading>
    </div>
  );
}
