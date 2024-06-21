import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Heading, SubHeading } from "@/components/base/typography";
import { SocialCard } from "@/components/partials/social/social-card";
import { SOCIALS } from "@/constants";

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">My </span>
          Socials
        </Heading>
        <SubHeading>
          I am active on a few social media platforms. Feel free to connect with
          me on any of the following.
        </SubHeading>
        <div className="mt-4 flex flex-row space-x-3">
          <Button className="bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 hover:bg-blue-500 text-neutral-100 outline-none border-none">
            <a href="mailto:quelchx@gmail.com">Email Me</a>
          </Button>
          <Button className="bg-purple-900 dark:bg-purple-800 dark:hover:bg-purple-700 hover:bg-purple-500 text-neutral-100 outline-none border-none">
            <Link href="/contact">Use Form</Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-col space-y-8">
          {SOCIALS.map((social) => (
            <SocialCard key={social.section} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
