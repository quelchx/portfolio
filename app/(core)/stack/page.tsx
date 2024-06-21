import { StackHero } from "@/components/partials/stack/stack-hero";
import { StackList } from "@/components/partials/stack/stack-list";

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
