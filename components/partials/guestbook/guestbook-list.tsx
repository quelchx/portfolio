"use client";

import dayjs from "dayjs";
import { usePosts } from "@/store/usePosts";

import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";

export function GuestbookList() {
  const { data, isLoading, error, isError } = usePosts();

  if (isLoading) return <Spinner />;
  if (isError) return <Warning message={error.message} />;

  return data ? (
    <ul className="dark:border-neutral-700 grid grid-cols-1 gap-8 max-h-[480px] overflow-y-auto">
      {data.length > 0 ? (
        data.map((post) => (
          <li className="flow-root" key={post.id}>
            <div className="group">
              <article className="flex items-center gap-x-4">
                <div className="size-10 rounded-xl dark:border dark:border-neutral-700 relative top-[1px]" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-black dark:text-white group-hover:text-blue-400 duration-200">
                    {post.name}
                  </p>
                  <p className="text-neutral-500 text-sm dark:text-neutral-400">
                    {dayjs(post.created).format("MMMM D, YYYY")}
                  </p>
                </div>
              </article>
              <p className="text-neutral-500 mt-4 dark:text-neutral-400 line-clamp-6">
                {post.message}
              </p>
            </div>
          </li>
        ))
      ) : (
        <li className="text-neutral-500 dark:text-neutral-400 text-center">
          No posts yet 😢
        </li>
      )}
    </ul>
  ) : null;
}