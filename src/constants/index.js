import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  nextjs,
  threejsicon,
  ochi,
  spotify,
  logo,
  portfolio

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Next JS",
    icon: nextjs,
  },
  {
    title: "Three JS",
    icon: threejsicon,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "JavaScript",
    company_name: "Language",
    icon: javascript,
    iconBg: "#E6DEDD ",
    date: "July 2023 - Sept 2023",
    points: [
      "Started with JavaScript basics: Learned variables, loops, and functions through tutorials and practice.",
      "Dove into functional programming: Explored higher-order functions, callbacks, and array methods for efficiency.",
      "Explored advanced topics: Mastered asynchronous JavaScript, ES6+ features, and DOM manipulation.",
      "Embraced frameworks: Applied JavaScript knowledge to build projects using React.js.",
    ],
  },
  {
    title: "React JS",
    company_name: "Library",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Oct 2023 - Dec 2023",
    points: [
      "  Started with React basics: Learned JSX, components, props, and state management concepts.",
      "Focused on component architecture: Developed a deep understanding of reusable and modular component design.",
      "Explored advanced features: Mastered hooks, useEffect, and Context API for state management.",
      "Enhanced code maintainability: Applied best practices for maintainable, efficient, and scalable code organization.",
    ],
  },
  {
    title: "Next JS",
    company_name: "Framework",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Mar 2024",
    points: [
      "Started with Next.js basics: Learned file-based routing, pages, and server-side rendering concepts.",
      "Created custom components: Built reusable components to streamline UI development and enhance maintainability.",
      "Worked with routing: Learned how to set up dynamic routes and navigation in Next.js.",
      "Implemented styling solutions: Used Tailwind CSS modules and styled-components for component-based styling in Next.js.",
    ],
  },
  {
    title: "Three JS",
    company_name: "JavaScript 3D library",
    icon: threejs,
    iconBg: "#383E56",
    date: "Oct 2024",
    points: [
      "Started with Three.js basics: Learned how to set up a basic scene and camera.",
      "Explored basic objects: Created simple shapes like cubes, spheres, and planes.",
      "Learned about lighting: Understood how to add basic lights to a 3D scene.",
      "Experimented with animations: Began learning how to animate objects in Three.js.",
    ],
  },
];

const projects = [
  {
    name: "Ochi.Design",
    description:
      "Recreated a visually stunning Ochi.design inspired web app with smooth scrolling and dynamic animations. Focused on design and creating an immersive user experience.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ochi,
    source_code_link: "https://github.com/Khushal-prasad/Ochi.design",
  },
  {
    name: "Spotify Music Web-App",
    description:
      "Built a fully functional Spotify-inspired web app with play, pause, skip, and navigation controls. Designed an interactive and intuitive UI for a seamless music experience.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/Khushal-prasad/SpotifyClone",
  },
  {
    name: "My Portfolio Website",
    description:
      "I developed this portfolio website to showcase my work, featuring a fully functional, responsive design with a visually appealing, user-friendly experience.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Khushal-prasad/Khushal_portfolio_website",
  },
];

export { services, technologies, experiences, projects };