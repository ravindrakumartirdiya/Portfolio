import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gpt3,
  threejs,
  onlineCoures,
  college,
  restro,
  razor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "Project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const experiences = [
  {
    title: "FRONTED DEVELOPMENT",
    instituation: "CodeHelp",
    icon_alt: "onlineCoures",
    icon: onlineCoures,
    iconBg: "#383E56",
    date: "jan 2023 - Nov 2023",
    points: [
      "Completed Frontend Development program at CodeHelp (Jan 2023 - Nov 2023).",
      "Mastered HTML, CSS, Tailwind css, JavaScript and React for building responsive user interfaces.",
      "Contributed to real-world projects emphasizing UX design best practices.",
      "Stayed updated with the latest industry trends and emerging technologies.",
    ],

  },
  {
    title: "Bachlore's in Computer Science Engineering",
    instituation: "Sobhasaria group of instituation, Sikar",
    icon_alt: "college",
    icon: college,
    iconBg: "#E6DEDD",
    date: "aug 2019 - sep 2023",
    points: [
      "Bachelor's in Computer Science Engineering at Sobhasaria Group of Institutions, Sikar since September 2019.",
      "Participating in collaborative projects that showcase problem-solving and teamwork skills.",
    ],

  },

];

const projects = [
  {
    name: "Restaurant Ui",
    description:
      "In summary, a React-based restaurant UI should prioritize user experience, responsiveness, and interactivity. By harnessing React's powerful features, developers can craft a modern and efficient UI that not only meets functional requirements but also delights users with an intuitive and visually appealing interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "React-icon",
        color: "pink-text-gradient",
      },
    ],
    image: restro,
    source_code_link: "https://github.com/ravindrakumartirdiya/Restaurant_ui_modern",
    live_link : "https://restaurant-ui-by-rt.netlify.app/",
  },
  {
    name: "GPT-3 Ui",
    description:
      "In summary, a React-based gpt3 UI should prioritize user experience, responsiveness, and interactivity. By harnessing React's powerful features, developers can craft a modern and efficient UI that not only meets functional requirements but also delights users with an intuitive and visually appealing interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/ravindrakumartirdiya/Gpt3-UI",
    live_link : "https://gpt-3-ui-by-rt.netlify.app/",
  },
  {
    name: "RazorPay Ui",
    description:
      "In summary, a React-based razorpay UI should prioritize user experience, responsiveness, and interactivity. By harnessing React's powerful features, developers can craft a modern and efficient UI that not only meets functional requirements but also delights users with an intuitive and visually appealing interface.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: razor,
    source_code_link: "https://github.com/ravindrakumartirdiya/razorpay-clone",
    live_link : "https://razorpay-clone-rkt.netlify.app/",
  },
];

export { services, experiences, projects };
