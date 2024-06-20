export function AvatarCard() {
  return (
    <a className="group block flex-shrink-0 cursor-pointer" href="/">
      <div className="flex items-center">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/74473426?v=4"
            alt="avatar"
            className="inline-block h-9 w-9 ring-1 ring-black dark:ring-white/10 grayscale filter rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:opacity-80">
            Eric Quelch
          </p>
          <p className="text-xs font-medium text-neutral-500 dark:text-white group-hover:opacity-80">
            Full Stack Developer
          </p>
        </div>
      </div>
    </a>
  );
}
