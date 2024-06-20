const PAGES = [
  {
    href: "/",
    label: "Home",
    icon: "iconamoon:home-bold",
  },
  {
    href: "/work",
    label: "Work",
    icon: "material-symbols:work-history-outline",
  },
  {
    href: "/services",
    label: "Services",
    icon: "material-symbols:linked-services-outline",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: "uil:briefcase",
  },
  {
    href: "/socials",
    label: "Socials",
    icon: "tabler:social",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "fluent:mail-24-regular",
  },
  {
    href: "/services",
    label: "Services",
    icon: "material-symbols:linked-services-outline",
  },

  {
    href: "/blog",
    label: "Blog",
    icon: "bx:bxs-book",
  },
  {
    href: "/stack",
    label: "Stack",
    icon: "charm:stack",
  },
  {
    href: "/guestbook",
    label: "Guestbook",
    icon: "fluent:guest-24-regular",
  },
];

type PageProps = (typeof PAGES)[0];

export { PAGES, type PageProps };
