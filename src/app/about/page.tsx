import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Projects } from "@/components/base/projects/projects";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { stackList, StackCard } from "@/components/base/projects/stack-card";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${siteConfig.author}`,
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
          <HoverCard>
            <HoverCardTrigger asChild>
              <Avatar className="h-48 w-48 static">
                <Image
                  src="/avatar.jpg"
                  alt={siteConfig.author}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full"
                />
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Me and Wile&apos;e</h4>
                  <p className="text-sm text-balance">
                    My Chihuahua, Jack Russell, and Dachshund mix.
                  </p>
                  <div className="flex items-center pt-2">
                    <Heart className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Love you forever buddy
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <div className="flex flex-col items-center space-y-[-2px]">
            <h2 className="text-2xl font-bold break-words text-center">
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
          <div className="flex flex-col space-y-4 mb-6">
            <h2 className="font-black text-xl">
              Hi, I&apos;m {siteConfig.author} 👋
            </h2>
            <p className="text-balance">
              I am a software developer with a passion for creating and building
              things. I have experience in web development, mobile development,
              and cloud computing. I am always looking for new opportunities to
              learn and grow as a developer.
            </p>
            <h2 className="font-black text-xl">Projects of Mine</h2>
            <p className="text-balance">
              Here are some of the projects I have worked on. You can find more
              on my GitHub profile.
            </p>
          </div>
          <Projects />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <h2 className="font-black text-2xl">My Stack</h2>
        <p className="text-balance">
          Here are some of the technologies I have experience with. My stack is
          always evolving as I learn new technologies.
        </p>
        <div className="max-h-[600px] overflow-auto pr-4">
          {stackList.map((item) => (
            <StackCard {...item} key={item.section} />
          ))}
        </div>
      </div>
    </div>
  );
}
