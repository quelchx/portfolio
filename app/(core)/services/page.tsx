import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/partials/services/service-hero";
import { ServiceList } from "@/components/partials/services/service-list";

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <ServiceHero />
        <div className="mt-4 flex items-center justify-between">
          <Button
            size="sm"
            className="bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700 hover:bg-blue-500 text-neutral-100 outline-none border-none"
          >
            <a href="mailto:quelchx@gmail.com">Email Me</a>
          </Button>
          <Button
            size="sm"
            variant="link"
            className="flex space-x-2 items-center relative"
          >
            <span>Visit dashboard</span>
            <Icon icon="maki:arrow" />
          </Button>
        </div>
        <div className="mt-12 flex flex-col space-y-8 border-t dark:border-neutral-700">
          <ServiceList />
        </div>
      </div>
    </section>
  );
}
