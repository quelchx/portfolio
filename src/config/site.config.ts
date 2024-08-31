export const siteConfig = {
  name: "Eric Quelch's Blog",
  url: "https://quelchx.up.railway.app/",
  description:
    "Eric Quelch's personal blog built with Next.js, Velite, and ShadCN",
  author: "Eric Quelch",
  links: {
    github: "https://github.com/quelchx",
    linkedin: "https://www.linkedin.com/in/quelchx",
    resume: "https://quelchx.up.railway.app/eric-quelch-resume.pdf",
    twitter: "https://twitter.com/quelchx",
  },
  pages: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
