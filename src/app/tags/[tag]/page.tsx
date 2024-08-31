import { Metadata } from "next";
import { slug } from "github-slugger";
import { posts } from "#site/content";

import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tag } from "@/components/shared/tag";
import { BlogPosts } from "@/components/shared/blog-posts";
import { QueryPagination } from "@/components/shared/query-pagination";
import { siteConfig } from "@/config/site.config";

type TagPageProps = {
  params: { tag: string };
  searchParams: { page?: string };
};

export async function generateMetadata(props: TagPageProps): Promise<Metadata> {
  const { tag } = props.params;
  return {
    title: `Posts on ${tag.split("-").join(" ")}`,
    description: `Posts on the topic of ${tag} by ${siteConfig.author}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

const POSTS_PER_PAGE = 5;

export default function TagPage(props: TagPageProps) {
  const { params, searchParams } = props;

  const tags = getAllTags(posts);
  const currentPage = Number(searchParams?.page) || 1;
  const taggedPosts = getPostsByTagSlug(posts, params.tag);

  return (
    <div className="container max-w-5xl mx-auto py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
            {params.tag.split("-").join(" ")}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            View <strong>{tags[params.tag.split("-").join(" ")] || 0}</strong>{" "}
            posts on this topic.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          <BlogPosts
            posts={taggedPosts
              .filter((post) => post.published)
              .slice(
                POSTS_PER_PAGE * (currentPage - 1),
                POSTS_PER_PAGE * currentPage
              )}
          />
          <QueryPagination
            className="justify-end mt-4"
            totalPages={Math.ceil(taggedPosts.length / POSTS_PER_PAGE)}
          />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortTagsByCount(tags)?.map((t) => (
              <Tag
                key={t}
                tag={t}
                count={tags[t]}
                current={slug(t) === params.tag}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
