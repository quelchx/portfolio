import { BlogHero } from "@/components/partials/blog/blog-hero";
import { BlogList } from "@/components/partials/blog/blog-list";

export default function Page() {
  return (
    <section className="flex flex-col space-y-12 pt-[66px]">
      <div className="px-12 pt-4 pb-12 mx-auto">
        <BlogHero />
        <BlogList />
      </div>
    </section>
  );
}
