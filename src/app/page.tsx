import Link from "next/link";
import dynamic from "next/dynamic";

import { posts } from "#site/content";
import { cn, sortPosts } from "@/lib/utils";
import { PostItem } from "@/components/shared/post-item";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

const TreeCanvas = dynamic(
  () =>
    import("@/components/base/canvas/tree-canvas").then(
      (mod) => mod.TreeCanvas
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center mt-16 w-full gap-2">
        <div className="flex flex-col space-y-8 w-full">
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              Hello, I&apos;m Eric
            </h1>
            <p className="text-muted-foreground sm:text-xl text-balance">
              Experienced Full Stack Developer with a strong history of creating
              and optimizing high-impact applications.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-fit bg-purple-900/50 text-neutral-100 hover:bg-purple-900/75"
              )}
            >
              GitHub
            </Link>
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
          </div>
        </div>
        <div className="h-[400px] hidden lg:block">
          <TreeCanvas />
        </div>
      </div>
      <section className="py-4 flex flex-col space-y-6 mt-32">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className="first:border-t first:border-border"
                >
                  <PostItem {...post} />
                </li>
              )
          )}
        </ul>
      </section>
    </div>
  );
}
