import { STACK } from "@/constants";
import { StackHero } from "./components/stack-hero";
import { StackCard } from "./components/stack-card";

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <StackHero />

        <div className="mt-12 flex flex-col space-y-8 border-t dark:border-neutral-700">
          {STACK.map((stack) => (
            <StackCard {...stack} key={stack.section} />
          ))}
        </div>
      </div>
    </section>
  );
}
