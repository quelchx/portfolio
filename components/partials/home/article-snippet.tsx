import type { Article } from "@/types";
import { getImageUrl } from "@/lib/utils";

export function ArticleSnippet(props: Article) {
  return (
    <li className="flow-root">
      <a href="#" className="group">
        <div className="flex items-center gap-x-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={getImageUrl({
              collection: "articles",
              id: props.id,
              image: props.image,
            })}
            className="size-10 rounded-xl dark:border dark:border-neutral-700"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-black dark:text-white group-hover:text-blue-400 duration-200">
              {props.title}
            </p>
            <p className="text-neutral-500 text-sm dark:text-neutral-400">
              {props.created}
            </p>
          </div>
        </div>
        <div
          className="text-neutral-500 mt-4 dark:text-neutral-400 line-clamp-2 text-sm"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </a>
    </li>
  );
}
