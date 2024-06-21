import { Heading, SubHeading } from "@/components/base/typography";
import { GuestbookList } from "@/components/partials/guestbook/guestbook-list";
import { GuestbookForm } from "@/components/partials/guestbook/guestbook-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook - Leave a Message",
  description:
    "Sign my guestbook and leave a message. I always enjoy hearing from people. Your name and message will be displayed publicly. Please be kind and thank you in advance.",
};

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>
          Sign my{" "}
          <span className="text-blue-600 dark:text-blue-500">Guestbook </span>
        </Heading>
        <SubHeading>
          I always enjoy hearing from people. Feel free to leave a message. Your
          name and message will be displayed publicly. Please be kind and thank
          you in advance.
        </SubHeading>

        <div className="space-y-4">
          <GuestbookList />
          <GuestbookForm />
        </div>
      </div>
    </section>
  );
}
