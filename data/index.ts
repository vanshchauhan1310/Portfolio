import { Github, Linkedin, Youtube } from "lucide-react";

const data = {
  home: {
    name: "Vansh Raj Chauhan",
    description:
      "I Fix, Optimize & Build #Next_js & #React Apps", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/vanshchauhan1310",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/vanshrajchauhan1310/",
        icon: Linkedin,
      },
     
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        category: "Mobile-app",
        title: "Prasang (Event-Management App)",
        description:
          "Created a React Native Mobile application that allows event organizer to Manage the event seamlessly.  \n\n Technologies Used: React Native, Tailwind CSS, Node js, Supabase.",
        image: "/projects-imgs/Prasang.jpg",
        previewLink: "",
        githubLink: "https://github.com/vanshchauhan1310/Event-Id-Card",
      },
      {
        id: 2,
        category: "Web-app",
        title: "Draw-Together",
        description:
          "Created a real-time drawing board using WebSockets where two users can draw together and have fun. Built real-time user synchronization and achieved seamless real-time collaboration with minimal latency. \n\n Technologies Used: React.js, Tailwind CSS, WebSockets.",
        image: "/projects-imgs/white-Board.jpg",
        previewLink: "https://draw-board-client.vercel.app/",
        githubLink: "https://github.com/vanshchauhan1310/Draw-Board-client",
      },
      {
        id: 3,
        category: "Web-app",
        title: "AI-Thief-Detection-Alaram",
        description:
          "Created a thief detection alarm system where whenever a person comes in front of CCTV, my ML model detects the person, triggers an alarm, and sends the person’s image to the CCTV owner through WhatsApp with an alert message",
        image: "/projects-imgs/3.jpeg",
        previewLink: "",
        githubLink: "https://github.com/vanshchauhan1310/Thief-Detection-Alaram",
      },
     
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "vanshchauhan1310@gmail.com",
    name: "Vansh Raj Chauhan",
  },
};

export default data;
