import Link from "next/link";

import type { Article } from "@/types";

export function ArticleCard(props: Article) {
  return (
    <li>
      <Link href={`/blog/${props.id}`} className="group">
        <article className="flex-1 h-full flex flex-col">
          <div className="aspect-[384/246] overflow-hidden rounded-lg border dark:border-neutral-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={props.imageSrc}
              alt="Article"
              className="object-cover object-center group-hover:scale-125 duration-500 ease-in-out"
            />
          </div>
          <div className="flex flex-col items-start justify-between flex-1 w-full mt-4">
            <div>
              <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400">
                {props.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400 line-clamp-3">
                {props.body}
              </p>
            </div>
            <footer className="w-full px-[1px]">
              <div className="flex flex-row justify-between w-full space-x-3 items-center mt-6">
                <p className="text-xs font-medium text-neutral-900 dark:text-white">
                  Eric Quelch
                </p>
                <div className="flex text-xs text-neutral-400">
                  <time dateTime={props.date}>{props.date}</time>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </Link>
    </li>
  );
}
