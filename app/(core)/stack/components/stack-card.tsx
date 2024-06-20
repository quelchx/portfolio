import { Icon } from "@iconify/react";
import type { StackProps } from "@/constants";

export function StackCard(props: StackProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12  border-t dark:border-neutral-700">
      <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400">
        {props.section}
      </p>
      <ul className="flex flex-col gap-12 dark:border-neutral-700 lg:col-span-2">
        {props.items.map((item) => (
          <li className="flow-root" key={item.name}>
            <div className=" flex items-center gap-x-4">
              <Icon icon={item.icon} className="size-10" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-black dark:text-white">
                  {item.name}
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
