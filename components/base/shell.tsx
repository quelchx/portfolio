import { ModeToggle } from "./mode-toggle";
import { DownloadCV } from "./download-cv";
import { AvatarCard } from "./avatar-card";
import { PageLinks } from "./page-links";
import { Layout } from "./layout";

export const Shell = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[640px] flex flex-col">
      <div className="fixed top-6 right-6">
        <ModeToggle />
      </div>

      <div className="z-50 hidden bg-white dark:bg-neutral-900 lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-1 relative min-h-0 border-r bg-white dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex flex-col flex-1 pt-12 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 pl-8 text-black">
              <AvatarCard />
            </div>
            <nav className="flex-1 mt-6">
              <div>
                <div className="px-8 py-4 space-y-4">
                  <p className="text-sm font-semibold uppercase text-black dark:text-white">
                    Core
                  </p>
                  <PageLinks />
                </div>
              </div>
            </nav>
          </div>
          <div className="flex flex-shrink-0 py-4 px-6 border-t dark:border-neutral-700 items-center">
            <DownloadCV />
          </div>
        </div>
      </div>

      <Layout>{props.children}</Layout>
    </div>
  );
};
