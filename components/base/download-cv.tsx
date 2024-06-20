import { Icon } from "@iconify/react";

export function DownloadCV() {
  return (
    <a
      href="/ericquelch-resume.pdf"
      download="EricQuelchResume.pdf"
      target="_blank"
      className="inline-flex items-center gap-2 justify-center rounded-lg py-3 px-6 text-sm outline-offset-2 transition bg-white text-black font-medium hover:bg-neutral-50 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 group w-full border dark:border-white/20"
    >
      <Icon icon="pepicons-pop:cv" className="size-4 dark:text-neutral-200" />
      <span>Download CV</span>
    </a>
  );
}
