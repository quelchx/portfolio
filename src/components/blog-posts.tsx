"use client";

import { PostItem } from "./post-item";
import { Input } from "./ui/input";
import { posts } from "#site/content";
import { useMemo, useState } from "react";

type BlogPostProps = {
  posts: typeof posts;
};

export function BlogPosts(props: BlogPostProps) {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    if (!search) return props.posts;

    return props.posts.filter(
      (post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      },
      [search, props.posts]
    );
  }, [search, props.posts]);

  return (
    <>
      <div className="flex items-center gap-x-3">
        <Input
          type="search"
          name="search"
          placeholder="Search posts by title"
          className="w-full mt-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {filteredPosts.map((post) => {
            const { slug, date, title, description, tags } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          {search ? (
            <p className="text-muted-foreground mt-4">
              No posts found for &quot;{search}&quot;
            </p>
          ) : (
            <p className="text-muted-foreground mt-4">No posts found</p>
          )}
        </div>
      )}
    </>
  );
}
