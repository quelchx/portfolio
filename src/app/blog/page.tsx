import type { Metadata } from "next";
import { posts } from "#site/content";
import { Tag } from "@/components/tag";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { BlogPosts } from "@/components/blog-posts";

export const metadata: Metadata = {
  title: "My blog",
  description: "A collection of my thoughts and ideas",
};

const POSTS_PER_PAGE = 5;

type BlogPageProps = { searchParams: { page?: string } };

export default async function BlogPage(props: BlogPageProps) {
  const { searchParams } = props;

  const tags = getAllTags(posts);
  const currentPage = Number(searchParams?.page) || 1;
  const sortedTags = sortTagsByCount(tags);
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="container max-w-5xl mx-auto py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground text-balance">
            While I&apos;m not a frequent blogger, I enjoy sharing the things
            I&apos;ve learned from time to time. I hope you find my content
            interesting and helpful. Enjoy exploring!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          <BlogPosts
            posts={sortedPosts.slice(
              POSTS_PER_PAGE * (currentPage - 1),
              POSTS_PER_PAGE * currentPage
            )}
          />
          <QueryPagination
            totalPages={Math.ceil(sortedPosts.length / POSTS_PER_PAGE)}
            className="justify-end mt-4"
          />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
