import { BlogHero } from "@/components/partials/blog/blog-hero";
import { BlogList } from "@/components/partials/blog/blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Welcome to my blog! Here, you'll find a collection of my articles, including the most recent updates and posts. While I'm not a frequent blogger, I enjoy sharing the things I've learned from time to time. I hope you find my content interesting and helpful. Enjoy exploring!",
};

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
