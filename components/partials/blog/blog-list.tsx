"use client";

import { useBlogPosts } from "@/store/useBlog";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";

import { BlogCard } from "./blog-card";

export function BlogList() {
  const query = useBlogPosts();

  if (query.isLoading) return <Spinner />;

  if (query.isError)
    return (
      <Warning
        title="Failed to fetch blog posts"
        message={query.error.message}
      />
    );

  return query.data ? (
    <ul className="grid md:grid-cols-2 mt-4 gap-12 gap-y-24 gap-x-6 border-t border-dashed dark:border-neutral-700 pt-12 pb-6">
      {query.data?.map((article) => (
        <BlogCard key={article.title} {...article} />
      ))}
    </ul>
  ) : null;
}
