import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import type { ServiceProps } from "@/constants";

export function ServiceCard(props: ServiceProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-6 items-start p-12 mt-12  bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
      <p className="text-lg font-semibold leading-6 text-blue-500 dark:text-blue-400 group-hover:text-blue-400">
        {props.skill}
      </p>
      <div className=" dark:border-neutral-700  lg:col-span-2">
        <div>
          <p className="font-semibold text-base text-black dark:text-white">
            {props.label}
          </p>
          <p className="text-neutral-500 text-sm dark:text-neutral-400">
            {props.pricing}
          </p>
        </div>
        <div className="mt-6 pt-6 border-t col-span-full dark:border-neutral-700">
          <p className="text-neutral-500 text-sm text-pretty  dark:text-neutral-400">
            {props.description}
          </p>
          <p className="mt-4 text-neutral-500 text-sm dark:text-neutral-400">
            I offer the following services:
          </p>
          <ul className=" mt-4 text-neutral-500 list-disc text-sm list-inside dark:text-neutral-400">
            {props.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between space-x-2 mt-6 pt-6 border-t col-span-full dark:border-neutral-700">
        <Button>
          <a
            href="https://calendly.com/quelchx/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </Button>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="flex space-x-1 items-center">
              <span>More info</span>
              <Icon className="relative top-[1px]" icon="mingcute:down-line" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{props.skill}</h4>
                <div className="text-sm max-h-[240px] overflow-y-auto space-y-2 py-1">
                  <p>{props.details}</p>
                </div>

                <div className="flex items-center space-x-1 pt-2">
                  <Icon icon="mdi:contact" />
                  <span className="text-xs text-muted-foreground">
                    <Link href="/contact">Questions</Link>
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
