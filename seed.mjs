import PocketBase from "pocketbase";

const pb = new PocketBase("https://quelchx-pocketbase.up.railway.app");
const STACK = [
  {
    section: "Languages",
    items: [
      {
        name: "JavaScript",
        description:
          "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
        icon: "devicon:javascript",
      },
      {
        name: "TypeScript",
        description:
          "A typed superset of JavaScript that compiles to plain JavaScript.",
        icon: "logos:typescript-icon",
      },
      {
        name: "Python",
        description:
          "An interpreted, high-level, general-purpose programming language.",
        icon: "logos:python",
      },
      {
        name: "Golang",
        description:
          "An open-source programming language that makes it easy to build simple, reliable, and efficient software.",
        icon: "skill-icons:golang",
      },
    ],
  },
  {
    section: "Libraries",
    items: [
      {
        name: "React",
        description: "A JavaScript library for building user interfaces.",
        icon: "vscode-icons:file-type-reactjs",
      },
      {
        name: "Vue.js",
        description:
          "A progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
        icon: "logos:vue",
      },
      {
        name: "Node.js",
        description:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        icon: "logos:nodejs-icon",
      },
      {
        name: "Go Fiber",
        description: "An Express.js inspired web framework written in Go.",
        icon: "devicon:go",
      },
      {
        name: "Tailwind CSS",
        description:
          "A utility-first CSS framework for rapidly building custom designs.",
        icon: "vscode-icons:file-type-tailwind",
      },
      {
        name: "Shadcn UI",
        description:
          "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",

        icon: "tabler:brand-radix-ui",
      },
      {
        name: "Three.js",
        description: "A 3D library that makes WebGL simpler.",
        icon: "tabler:brand-threejs",
      },
      {
        name: "Iconify",
        description:
          "Iconify is a modern open source SVG framework that allows you to use icons from more than 50 popular sets.",
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
          "A general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
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
          "A platform that enables developers to build, train, and deploy machine learning models.",
        icon: "fluent-emoji-high-contrast:llama",
      },
    ],
  },
  {
    section: "DevOps",
    items: [
      {
        name: "Railway",
        description:
          "Railway is the cloud for building, shipping, and monitoring applications. No Platform Engineer required.",
        icon: "devicon:railway",
      },
      {
        name: "Docker",
        description:
          "An open platform for developing, shipping, and running applications.",
        icon: "logos:docker-icon",
      },
      {
        name: "GitHub Actions",
        description:
          "Automate, customize, and execute your software development workflows right in your repository.",
        icon: "logos:github-octocat",
      },
    ],
  },
  {
    section: "Tools",
    items: [
      {
        name: "VS Code",
        description:
          "A code editor redefined and optimized for building and debugging modern web and cloud applications.",
        icon: "vscode-icons:file-type-vscode",
      },
      {
        name: "Co-Pilot",
        description:
          "Your AI pair programmer. Your AI pair programmer. Your AI pair programmer.",
        icon: "octicon:copilot-96",
      },
      {
        name: "Excalidraw",
        description:
          "A whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
        icon: "vscode-icons:file-type-excalidraw",
      },
    ],
  },
];

(async () => {
  for (const stack of STACK) {
    const entries = [];
    for (const item of stack.items) {
      const entry = await pb.collection("tools").create(item);
      entries.push(entry.id);

      console.log(`Created ${item.name}`);
    }

    await pb.collection("stacks").create({
      section: stack.section,
      items: entries,
    });

    console.log(`Created ${stack.section}`);
  }
})().catch(console.error);
