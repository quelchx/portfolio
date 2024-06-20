import { Icon } from "@iconify/react";
import type { Repo } from "@/types";

function Caption(props: { icon: string; item: number; color?: string }) {
  return (
    <div className="flex flex-row text-sm items-center space-x-1">
      <Icon icon={props.icon} className={`relative top-[2px] ${props.color}`} />
      <p className="mt-1 font-medium dark:text-neutral-200">{props.item}</p>
    </div>
  );
}

export function ProjectCard(props: Repo) {
  return (
    <li className="flow-root">
      <a
        href={props.url}
        className="group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-x-4">
          <Icon
            icon="skill-icons:npm-dark"
            className="w-12 h-12 text-blue-400 dark:text-blue-300"
          />
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
