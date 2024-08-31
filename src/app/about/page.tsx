import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Projects } from "@/components/base/projects/projects";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { stack, StackCard } from "@/components/base/projects/stack-card";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-5xl mx-auto py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/74473426?v=4"
              alt={siteConfig.author}
            />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-[-2px]">
            <h2 className="text-2xl font-bold break-words">
              Software Developer
            </h2>
            <div className="flex space-x-1 items-center text-muted-foreground cursor-pointer text-sm break-words">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-5 h-5 relative top-[2px]"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.07 5.07 0 0 1-7.127 0a4.97 4.97 0 0 1 0-7.071L6 11"
                ></path>
              </svg>
              <a
                href="/eric_quelch_resume.pdf"
                download="Eric_Quelch_Resume.pdf"
                className="text-muted-foreground hover:dark:text-purple-400 hover:text-purple-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-2 mb-6">
            <h2 className="font-black text-xl">
              Hi, I&apos;m {siteConfig.author} 👋
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-balance">
              I am a software developer with a passion for creating and building
              things. I have experience in web development, mobile development,
              and cloud computing. I am always looking for new opportunities to
              learn and grow as a developer.
            </p>
            <h2 className="font-black text-xl">Projects of Mine</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Here are some of the projects I have worked on. You can find more
              on my GitHub profile.
            </p>
          </div>
          <Projects />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <h2 className="font-black text-2xl">My Stack</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-balance">
          Here are some of the technologies I have experience with. My stack is
          always evolving as I learn new technologies.
        </p>
        <div className="max-h-[600px] overflow-auto pr-4">
          {stack.map((s) => (
            <StackCard {...s} key={s.section} />
          ))}
        </div>
      </div>
    </div>
  );
}
