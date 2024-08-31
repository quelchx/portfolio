import Link from "next/link";
import type { Repo } from "@/hooks/useRepos";

export function ProjectCard(props: Repo) {
  return (
    <li className="flow-root">
      <Link
        href={props.url}
        target="_blank"
        className="group"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 128 128"
            className="w-12 h-12 text-blue-400 dark:text-blue-300"
          >
            <path
              fill="#cb3837"
              d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z"
            ></path>
            <path
              fill="#fff"
              d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z"
            ></path>
          </svg>
          <div className="text-sm leading-6">
            <p className="uppercase font-black text-black dark:text-white group-hover:text-blue-400 duration-200">
              {props.name}
            </p>
            <p className="text-sm ">Created: {props.created}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-balance">{props.description}</p>
        <div className="flex flex-row items-center mt-1 space-x-3">
          <div className="flex flex-row text-sm items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="relative top-[2px]"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12.854 3.5a.979.979 0 0 0-1.708 0a27 27 0 0 0-2.057 4.762c-.139.431-.551.73-1.023.743a29.4 29.4 0 0 0-4.267.425c-.774.136-1.065 1.018-.515 1.556a31.5 31.5 0 0 0 3.41 2.892c.367.269.518.73.378 1.152a27 27 0 0 0-1.14 4.927c-.1.755.708 1.288 1.41.928a28.6 28.6 0 0 0 3.98-2.472a1.15 1.15 0 0 1 1.356 0a28.5 28.5 0 0 0 3.98 2.472c.701.36 1.51-.173 1.41-.928a27 27 0 0 0-1.14-4.928c-.14-.42.01-.882.378-1.151a31.5 31.5 0 0 0 3.41-2.892c.55-.538.26-1.42-.515-1.556a29 29 0 0 0-4.267-.425a1.1 1.1 0 0 1-1.023-.743a27 27 0 0 0-2.057-4.761"
              ></path>
            </svg>
            <p className="mt-1 font-medium">{props.stars}</p>
          </div>
          <div className="flex flex-row text-sm items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="relative top-[2px]"
            >
              <path
                fill="currentColor"
                d="M124 166.291v179.418a76 76 0 1 0 32 0V282h152a80.09 80.09 0 0 0 80-80v-36.689a75.983 75.983 0 1 0-32 1.733V202a48.055 48.055 0 0 1-48 48H156v-83.709a76 76 0 1 0-32 0M324 92a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44M184 420a44 44 0 1 1-44-44a44.05 44.05 0 0 1 44 44M140 48a44 44 0 1 1-44 44a44.05 44.05 0 0 1 44-44"
              ></path>
            </svg>
            <p className="mt-1 font-medium">{props.forks}</p>
          </div>
          <div className="flex flex-row text-sm items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              className="relative top-[2px]"
            >
              <path
                fill="currentColor"
                d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
              ></path>
            </svg>
            <p className="mt-1 font-medium">{props.watchers}</p>
          </div>
        </div>
        <dl className="mt-4">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium">Last Update</dt>
            <dd className="text-xs">{props.updated}</dd>
          </div>
        </dl>
      </Link>
    </li>
  );
}
