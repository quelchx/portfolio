import { articles } from "@/data/dummy-data";
import { Heading, SubHeading } from "@/components/base/typography";

import { ArticleCard } from "./components/article-card";

export default function Page() {
  return (
    <section className="flex flex-col space-y-12 pt-[66px]">
      <div className="px-12 pt-4 pb-12 mx-auto">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">My </span>
          Blog
        </Heading>
        <SubHeading>
          Welcome to my blog! Here, you&apos;ll find a collection of my
          articles, including the most recent updates and posts. While I&apos;m
          not a frequent blogger, I enjoy sharing the things I&apos;ve learned
          from time to time. I hope you find my content interesting and helpful.
          Enjoy exploring!
        </SubHeading>

        <ul className="grid md:grid-cols-2 mt-4 gap-12 gap-y-24 gap-x-6 border-t border-dashed dark:border-neutral-700 pt-12 pb-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </ul>
      </div>
    </section>
  );
}
