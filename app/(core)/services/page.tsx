import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/partials/services/service-hero";
import { ServiceList } from "@/components/partials/services/service-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Services",
  description:
    "Here are some of the services I offer. I am always happy to help you with your project or business.",
};

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <ServiceHero />
        <div className="mt-4 flex items-center space-x-2">
          <a href="mailto:quelchx@gmail.com">
            <Button
              size="sm"
              className="bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 hover:bg-blue-500 text-neutral-100 outline-none border-none"
            >
              Email
            </Button>
          </a>
          <Link href="/contact">
            <Button size="sm" className="flex space-x-2 items-center relative">
              <span>Contact</span>
            </Button>
          </Link>
        </div>
        <div className="mt-12 flex flex-col space-y-8 border-t dark:border-neutral-700">
          <ServiceList />
        </div>
      </div>
    </section>
  );
}
