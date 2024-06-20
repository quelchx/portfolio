import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Heading, SubHeading } from "@/components/base/typography";

const temp = [
  "User Research & Testing",
  "Wireframing & Prototyping",
  "Design Systems & Handoff",
  "Responsive & Mobile Design",
  "UI/UX Audit & Accessibility",
  "Design Strategy & Thinking",
  "User Flows & Information Architecture",
  "Interaction & Visual Design",
  "Usability Testing & Feedback",
  "Design Sprints & Workshops",
  "Design Consultation & Review",
  "Design Research & Documentation",
];

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">Services </span>{" "}
          that I offer
        </Heading>
        <SubHeading>
          I offer a variety of services to help you with your project.
        </SubHeading>
        <div className="mt-4 flex space-x-4">
          <Button
            size="sm"
            className="bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 hover:bg-blue-500 text-neutral-100 outline-none border-none"
          >
            <a href="mailto:quelchx@gmail.com">Email Me</a>
          </Button>
          <Button
            size="sm"
            className="bg-purple-900 dark:bg-purple-800 dark:hover:bg-purple-700 hover:bg-purple-500 text-neutral-100 outline-none border-none"
          >
            <span>Visit dashboard</span>
          </Button>
        </div>
        <div className="mt-12 flex flex-col space-y-8 border-t dark:border-neutral-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-6 items-start p-12 mt-12   bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
            <p className="text-lg font-semibold leading-6 text-blue-500 dark:text-blue-400 group-hover:text-blue-400">
              UI/UX
            </p>
            <div className=" dark:border-neutral-700  lg:col-span-2">
              <div>
                <p className="font-semibold text-base text-black dark:text-white">
                  Design
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-400">
                  Contact for pricing.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t col-span-full dark:border-neutral-700">
                <p className="text-neutral-500 text-sm text-pretty  dark:text-neutral-400">
                  With my specialized UI/UX Design Systems service, I craft a
                  bespoke toolkit that aligns perfectly with your brand. This
                  ensures a consistent design experience and seamless
                  scalability as your business grows.
                </p>
                <p className="mt-4 text-neutral-500 text-sm dark:text-neutral-400">
                  I offer the following services:
                </p>
                <ul className=" mt-4 text-neutral-500 list-disc text-sm list-inside dark:text-neutral-400">
                  {temp.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
