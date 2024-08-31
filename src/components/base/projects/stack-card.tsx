import { Icon } from "@iconify/react";

type Stack = {
  section: string;
  items: {
    name: string;
    description: string;
    icon: string;
  }[];
};

function StackCard(props: Stack) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12 border-t dark:border-neutral-700">
      <p className="text-xl font-black leading-6">{props.section}</p>
      <ul className="flex flex-col gap-12 dark:border-neutral-700 lg:col-span-2">
        {props.items.map((item) => (
          <li className="flow-root" key={item.name}>
            <div className="leading-6 flex flex-col gap-y-2">
              <div className=" flex items-center gap-x-3">
                <Icon icon={item.icon} className="w-7 h-7" />
                <p className="text-lg font-black">{item.name}</p>
              </div>

              <p className="text-sm line-clamp-2 hover:line-clamp-none">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const stack: Stack[] = [
  {
    section: "Languages",
    items: [
      {
        name: "JavaScript",
        description: " The first language I learned and still utilize daily.",
        icon: "devicon:javascript",
      },
      {
        name: "TypeScript",
        description:
          "I thoroughly enjoy leveraging its features and now rely on it extensively.",
        icon: "logos:typescript-icon",
      },
      {
        name: "Python",
        description:
          "One of the first languages I picked up, I appreciate its simplicity.",
        icon: "logos:python",
      },
      {
        name: "Golang",
        description:
          "My go-to for performance-driven projects. I particularly enjoy crafting web servers and APIs with Golang",
        icon: "skill-icons:golang",
      },
    ],
  },
  {
    section: "Libraries",
    items: [
      {
        name: "React",
        description:
          "As one of the earliest JavaScript frameworks I adopted, I continue to utilize it frequently. I value the robust ecosystem that supports this framework. My expertise extends particularly to Next.js, where I have extensive experience",
        icon: "vscode-icons:file-type-reactjs",
      },
      {
        name: "Vue.js",
        description:
          "The first JavaScript framework I embraced and still hold dear. I appreciate its simplicity and rely on Vue.js and Nuxt.js extensively for my personal projects.",
        icon: "logos:vue",
      },
      {
        name: "Node.js",
        description:
          "I appreciate its simplicity and how efficiently it scales for creating web servers and backends",
        icon: "logos:nodejs-icon",
      },
      {
        name: "Go Fiber",
        description:
          "When speed and efficiency are paramount for APIs or web servers, Go Fiber is my preferred choice",
        icon: "devicon:go",
      },
      {
        name: "Tailwind CSS",
        description:
          "Initially skeptical, I now greatly appreciate its utility for styling and have come to love using it",
        icon: "vscode-icons:file-type-tailwind",
      },
      {
        name: "Shadcn UI",
        description:
          "A beloved component-driven library that simplifies UI development. Unlike traditional frameworks, it streamlines the process without requiring installation of individual CSS files or components. It's my preferred choice for UI components",
        icon: "tabler:brand-radix-ui",
      },
      {
        name: "Three.js",
        description:
          " I'm currently exploring and learning this evolving framework. I find great enjoyment in experimenting with open-source assets and creating 3D voxel designs",
        icon: "tabler:brand-threejs",
      },
      {
        name: "Iconify",
        description:
          "My preferred library for accessing SVG icons and common logos.",
        icon: "simple-icons:iconify",
      },
    ],
  },
  {
    section: "Databases",
    items: [
      {
        name: "MongoDB",
        description:
          "For projects that benefit from a NoSQL database, MongoDB and Mongo Atlas are my preferred choices due to their simplicity and affordable plans",
        icon: "vscode-icons:folder-type-mongodb",
      },
      {
        name: "PostgreSQL",
        description:
          "A powerful, open source object-relational database system.",
        icon: "logos:postgresql",
      },
      {
        name: "Pocketbase",
        description:
          "An open-source backend for SaaS and Mobile applications just with one file.",
        icon: "simple-icons:pocketbase",
      },
    ],
  },
  {
    section: "AI/ML Integration",
    items: [
      {
        name: "Langchain",
        description:
          "A platform that enables developers to build, train, and deploy machine learning models.",
        icon: "simple-icons:langchain",
      },
      {
        name: "Ollama",
        description:
          "I find Ollama indispensable for deploying open-source LLMs (large language models) locally or in production. It offers complete control over model selection and behavior, enhancing my workflow significantly",
        icon: "fluent-emoji-high-contrast:llama",
      },
    ],
  },
  {
    section: "DevOps",
    items: [
      {
        name: "Docker",
        description:
          "I've relied on Docker for years to build and containerize applications. It has become a standard part of my workflow for every application I build and deploy.",
        icon: "logos:docker-icon",
      },
      {
        name: "GitHub Actions",
        description:
          "For small projects that I don't deploy using Railway, GitHub Actions works like magic, especially for automating builds when changes are made to production code",
        icon: "logos:github-octocat",
      },
    ],
  },
  {
    section: "Tools",
    items: [
      {
        name: "VS Code",
        description: " I adore it — can't imagine working without it",
        icon: "vscode-icons:file-type-vscode",
      },
      {
        name: "Co-Pilot",
        description:
          "Initially skeptical, but with it and the right mindset, my productivity has soared. It's definitely worth the monthly subscription",
        icon: "octicon:copilot-96",
      },
      {
        name: "Excalidraw",
        description:
          "When I need to quickly and elegantly mock up designs, workflows, and share them with clients and teammates, Excalidraw is my go-to tool",
        icon: "vscode-icons:file-type-excalidraw",
      },
    ],
  },
  {
    section: "Cloud Services",
    items: [
      {
        name: "Railway",
        description:
          "When deploying scalable applications within budget constraints, Railway is my preferred platform for its speed and ease of use.",
        icon: "devicon:railway",
      },
      {
        name: "AWS",
        description:
          "Professionally, I've employed a range of AWS services to meet ScriptString AI's requirements. I've developed a strong familiarity with the AWS SDK and find it highly valuable.",
        icon: "skill-icons:aws-dark",
      },
      {
        name: "Azure",
        description:
          "Professionally, I transitioned to Azure after my previous company migrated our AWS services and subscriptions. I've gained extensive familiarity with Azure services and their comprehensive JS/TS libraries",
        icon: "skill-icons:azure-dark",
      },
    ],
  },
];

export { stack, StackCard };
