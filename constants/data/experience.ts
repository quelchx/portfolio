const EXPERIENCE = [
  {
    years: "2023 - 2024",
    jobs: [
      {
        company: "ScriptString AI",
        role: "Lead Software Developer",
        duties: [
          "Lead a small team of developers to build a new features for the platform.",
          "Worked closely with the product team to define the product roadmap.",
          "Responsible for the overall architecture and design of the platform.",
          "Integrated new technologies to improve the performance and scalability of the platform.",
          "Optimized infrastructure reducing the number of services required.",
        ],
      },
    ],
  },
  {
    years: "2022 - 2023",
    jobs: [
      {
        company: "ScriptString AI",
        role: "Full Stack Developer",
        duties: [
          "Helped refactor and redesign the platform to improve performance and scalability.",
          "Worked with guidance from the lead developer to implement new features.",
          "Migration of the platform to a new cloud provider.",
          "Optimized the platform for SEO and performance.",
          "Reduced calls to the database by over 50%.",
        ],
      },
    ],
  },
  {
    years: "2021 - 2022",
    jobs: [
      {
        company: "Self Employed",
        role: "Freelance Developer",
        duties: [
          "Built websites and web applications for clients.",
          "Provided consulting services for small businesses.",
          "Assisted with SEO and digital marketing strategies.",
          "Provided training and documentation for clients.",
        ],
      },
      {
        company: "Fanshawe College",
        role: "Peer Tutor",
        duties: [
          "Helped students with assignments and projects.",
          "Provided guidance on best practices and design patterns.",
          "Assisted with debugging and troubleshooting.",
          "Provided feedback on code quality and best practices.",
        ],
      },
    ],
  },
];

type ExperienceProps = (typeof EXPERIENCE)[0];

export { EXPERIENCE, type ExperienceProps };
