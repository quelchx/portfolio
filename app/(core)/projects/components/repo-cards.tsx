"use client";

import { Icon } from "@iconify/react";
import { useRepositories } from "@/hooks/useRepositories";
import type { Repo } from "@/types";

function Caption(props: { icon: string; item: number; color?: string }) {
  return (
    <div className="flex flex-row text-sm items-center space-x-1">
      <Icon icon={props.icon} className={`relative top-[2px] ${props.color}`} />
      <p className="mt-1 font-medium dark:text-neutral-200">{props.item}</p>
    </div>
  );
}

function RepoCard(props: Repo) {
  return (
    <li className="flow-root">
      <a
        href={props.url}
        className="group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-x-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="size-10 rounded-xl bg-blue-500 hover:bg-green-500 transition-colors duration-300" />
          <div className="text-sm leading-6">
            <p className="uppercase font-semibold text-black dark:text-white group-hover:text-blue-400 duration-200">
              {props.name}
            </p>
            <p className="text-neutral-500 text-sm dark:text-neutral-400">
              Created: {props.created}
            </p>
          </div>
        </div>
        <p className="text-neutral-500 mt-4 dark:text-neutral-400">
          {props.description}
        </p>
        <div className="flex flex-row items-center mt-1 space-x-3">
          <Caption icon="akar-icons:star" item={props.stars} />
          <Caption icon="akar-icons:eye" item={props.watchers} />
          <Caption icon="cil:fork" item={props.forks} />
        </div>
        <dl className="mt-4">
          <div className="flex flex-col-reverse dark:text-neutral-200">
            <dt className="text-sm font-medium ">Last Update</dt>
            <dd className="text-xs ">{props.updated}</dd>
          </div>
        </dl>
      </a>
    </li>
  );
}

export function RepoCards() {
  const query = useRepositories();

  if (query.isLoading)
    return (
      <div
        className="flex justify-center items-center w-full h-96"
        aria-label="loading"
      >
        <Icon
          icon="tabler:loader-2"
          className="animate-spin w-10 h-10 text-blue-500"
        />
      </div>
    );

  if (query.isError)
    return (
      <div
        role="alert"
        className="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-5"
      >
        <strong className="block font-medium text-red-800">
          Something went wrong
        </strong>

        <p className="mt-2 text-sm text-red-700">
          Please try refreshing the page or check back later. If the problem
          continues, please contact us. Your patience is appreciated.
        </p>
      </div>
    );

  return (
    <ul className="grid md:grid-cols-2 my-12 gap-12 gap-y-24">
      {query.data?.map((repo) => (
        <RepoCard key={repo.name} {...repo} />
      ))}
    </ul>
  );
}
