const SOCIALS = [
  {
    section: "Development",
    overview: "Developer platforms and communities.",
    platforms: [
      {
        platform: "Github",
        username: "@quelchx",
        icon: "akar-icons:github-fill",
        url: "https://github.com/quelchx",
      },
      {
        platform: "Codepen",
        username: "@quelchx",
        icon: "simple-icons:codepen",
        url: "https://codepen.io/quelchx",
      },
      {
        platform: "Stack Overflow",
        username: "@quelchx",
        icon: "devicon:stackoverflow",
        url: "https://stackoverflow.com/users/15682402/quelchx",
      },
    ],
  },
  {
    section: "Social Media",
    overview: "Feel free to connect with me on any of the following.",
    platforms: [
      {
        platform: "Linkedin",
        username: "/in/quelchx",
        icon: "devicon:linkedin",
        url: "https://www.linkedin.com/in/quelchx",
      },
      {
        platform: "X",
        username: "@ericquelch",
        icon: "line-md:twitter-x",
        url: "https://twitter.com/ericquelch",
      },
    ],
  },
  {
    section: "Gaming",
    overview:
      "I'm a passionate gamer with a love for DayZ, Pokemon, Battlefield, NHL, and many other titles.",
    platforms: [
      {
        platform: "Discord",
        username: "@quelchx",
        icon: "skill-icons:discord",
        url: "https://discord.gg/SvUWUE8k",
      },
      {
        platform: "Steam",
        username: "@Qolo",
        icon: "mdi:steam",
        url: "https://s.team/p/fgfg-fjmq/gcctbtwr",
      },
      {
        platform: "Playstation",
        username: "@quelchx",
        icon: "mdi:sony-playstation",
      },
      {
        platform: "Xbox",
        username: "@Wcbblez",
        icon: "fontisto:xbox",
      },
    ],
  },
];

type SocialProps = (typeof SOCIALS)[0];

export { SOCIALS, type SocialProps };
