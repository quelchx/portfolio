import { StackHero } from "@/components/partials/stack/stack-hero";
import { StackList } from "@/components/partials/stack/stack-list";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Stack",
  description:
    "Here are some of the technologies I use to build projects and applications. I am always learning and trying out new things.",
};

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <StackHero />

        <div className="mt-12 flex flex-col space-y-8 border-t dark:border-neutral-700">
          <StackList />
        </div>
      </div>
    </section>
  );
}
