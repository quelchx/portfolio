import { Heading, SubHeading } from "@/components/base/typography";

export function BlogHero() {
  return (
    <div>
      <Heading>
        <span className="text-blue-600 dark:text-blue-500">My </span>
        Blog
      </Heading>
      <SubHeading>
        Welcome to my blog! Here, you&apos;ll find a collection of my articles,
        including the most recent updates and posts. While I&apos;m not a
        frequent blogger, I enjoy sharing the things I&apos;ve learned from time
        to time. I hope you find my content interesting and helpful. Enjoy
        exploring!
      </SubHeading>
    </div>
  );
}
