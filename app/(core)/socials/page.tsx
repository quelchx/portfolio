import { socials } from "@/data/constants";

import { Button } from "@/components/ui/button";
import { Heading, SubHeading } from "@/components/base/typography";
import { SocialCard } from "./component/social-card";
import Link from "next/link";

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
          <Button
            size="sm"
            variant="secondary"
            className="hover:bg-blue-500 dark:hover:bg-blue-600 bg-neutral-600 dark:bg-neutral-500 text-white"
          >
            <a href="mailto:quelchx@gmail.com">Send Email</a>
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className=" bg-slate-800 dark:bg-slate-700 hover:bg-green-600 dark:hover:bg-green-500 text-white"
          >
            <Link href="/contact">Use Form</Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-col space-y-8">
          {socials.map((social) => (
            <SocialCard key={social.section} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
