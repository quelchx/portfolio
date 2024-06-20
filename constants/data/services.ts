const SERVICES = [
  {
    skill: "Full Stack Development",
    label: "Fast Development",
    pricing: "Contact for pricing.",
    description: `I provide full-stack development 
    services that cover everything from the front-end to the back-end. 
    I use the latest technologies to build fast, responsive, 
    and scalable web applications.`,
    details: `I offer comprehensive full-stack development 
    services, ensuring your web applications are robust, 
    scalable, and efficient. Leveraging the latest technologies, 
    I build solutions that deliver exceptional performance and responsiveness, 
    catering to both front-end and back-end needs. 
    My approach ensures seamless integration across all layers of your 
    application, providing a cohesive and reliable user experience.`,
    services: [
      "Front-End Development",
      "Back-End Development",
      "Database Management",
      "API Integration",
      "Server Management",
      "Performance Optimization",
    ],
  },
  {
    skill: "UI/UX",
    label: "Beautiful Design",
    pricing: "Contact for pricing.",
    description:
      "I provide UI/UX design services that focus on creating beautiful and intuitive user interfaces. I work closely with clients to understand their needs and deliver designs that are both visually appealing and user-friendly.",
    details:
      "With my specialized UI/UX Design Systems service, I craft a bespoke toolkit that aligns perfectly with your brand. This ensures a consistent design experience and seamless scalability as your business grows. By focusing on creating cohesive and adaptable design systems, I help your brand maintain a strong visual identity across all platforms and touchpoints. Whether you're starting from scratch or looking to enhance your existing design framework, my approach ensures that your UI/UX design remains intuitive, user-friendly, and visually appealing.",
    services: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Design Systems & Handoff",
      "Responsive & Mobile Design",
      "UI/UX Audit & Accessibility",
      "Design Strategy & Thinking",
      "User Flows & Information Architecture",
      "Interaction & Visual Design",
      "Usability Testing & Feedback",
      "Design Sprints & Workshops",
      "Design Consultation & Review",
      "Design Research & Documentation",
    ],
  },
  {
    skill: "AI/ML",
    label: "Smart Solutions",
    pricing: "Contact for pricing.",
    description:
      "I provide AI/ML development services that help businesses leverage the power of artificial intelligence and machine learning. I build custom solutions that automate processes, improve decision-making, and drive business growth.",
    details:
      "Leveraging the latest advancements in AI/ML technology, I provide tailored solutions that help businesses optimize their operations, enhance customer experiences, and drive growth. From predictive analytics to natural language processing, I develop custom AI/ML models that deliver actionable insights and drive strategic decision-making. By harnessing the power of AI/ML, I help businesses unlock new opportunities, streamline processes, and gain a competitive edge in today's digital landscape.",
    services: [
      "AI-driven document analysis",
      "Advanced data extraction",
      "Intelligent chatbot development",
      "Retrieval-augmented generation",
      "High-performance application development",
      "Tailored AI solutions",
    ],
  },
  {
    skill: "Tutoring",
    label: "Accelerate Your Career",
    pricing: "Contact for pricing.",
    description:
      "I provide tutoring services for developers looking to accelerate their careers. I offer personalized coaching and guidance to help you build the skills and knowledge you need to succeed in the tech industry.",
    details:
      "I have a deep passion for teaching and helping others achieve their goals. During my time in college, I frequently assisted fellow students, growing alongside them on our educational journeys. I understand that learning various programming languages and skills can be challenging. Let me help you accelerate your journey. With my expertise in the latest technologies, effective habits, and industry best practices, I can provide fast and effective guidance to help you grow your skills and secure employment quickly.",
    services: [
      "Personalized programming tutoring",
      "Guidance on the latest technologies",
      "Effective learning habits and techniques",
      "Industry best practices",
      "Accelerated skill development",
      "Career preparation and job readiness",
    ],
  },
];

type ServiceProps = (typeof SERVICES)[0];

export { SERVICES, type ServiceProps };
