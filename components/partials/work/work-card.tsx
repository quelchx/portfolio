import type { ExperienceProps } from "@/constants";

export function WorkCard(props: ExperienceProps) {
  return (
    <div className="work-experience-section">
      <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white ">
        {props.years}
      </p>
      <ul className="flex flex-col gap-y-6 lg:col-span-2">
        {props.jobs.map((job) => (
          <li className="flow-root" key={job.role}>
            <div className="text-sm text-neutral-500 hover:text-blue-400 dark:text-neutral-50 group duration-200">
              <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white">
                {job.company}
              </p>
              <span className="text-sm text-blue-500 dark:text-blue-400">
                {job.role}
              </span>
              <ul className="my-4 text-neutral-500 space-y-1 list-disc text-sm list-inside dark:text-neutral-400">
                {job.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
