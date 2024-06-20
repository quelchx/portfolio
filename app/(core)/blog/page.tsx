import { BlogHero } from "./components/blog-hero";
import { BlogList } from "./components/blog-list";

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
