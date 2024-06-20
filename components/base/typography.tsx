export function Heading(props: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-medium tracking-[-2px] leading-[0.7em] text-neutral-900 dark:text-neutral-200  sm:text-4xl">
      {props.children}
    </h2>
  );
}

export function SubHeading(props: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-neutral-500 dark:text-neutral-400">
      {props.children}
    </p>
  );
}

export function Text(props: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-500 text-sm text-pretty dark:text-neutral-400">
      {props.children}
    </p>
  );
}
