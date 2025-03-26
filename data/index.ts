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
     
      {
        id: 4,
        category: "Web-app",
        title: "Deploying a Streamlit App Using Docker",
        description:
          "This project demonstrates how to containerize a Streamlit web application using Docker for easy deployment and scalability. Streamlit is a powerful Python framework for building interactive data applications, while Docker ensures consistent execution across different environments.",
        image: "/imgs/Steamlit_Application.png",
        previewLink: "https://app-docker-zruo9bdrzeybd9ihmxwdvx.streamlit.app/",
        githubLink: "https://github.com/vanshchauhan1310/Streamlit-Docker",
      },

      {
        id: 5,
        category: "Web-app",
        title: "Machine Learning Model Deployment Using Docker ",
        description:
          "This project demonstrates how to containerize a machine learning (ML) model using Docker for seamless deployment and scalability",
        image: "/imgs/Ml_Model.png",
        previewLink: "https://appmlmodeldocker-bc2xdfrd9qzua9ct7r44mv.streamlit.app/",
        githubLink: "https://github.com/vanshchauhan1310/Streamlit_Ml_Model_Docker",
      },

      {
        id: 6,
        category: "Web-app",
        title: "ML Monitoring Dashboard with Evidently and Streamlit",
        description:
          "This project builds an interactive monitoring dashboard to track machine learning model performance, data quality, and drift over time. It leverages:",
        image: "/imgs/Evidently.png",
        previewLink: "",
        githubLink: "https://github.com/vanshchauhan1310/Streamlit_EvidentlyAI",
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

  blog: {
    featuredPosts: [
      {
        "id": "1",
        "title": "Docker Basics: Hello World Project 🐳🐍",
        "subtitle": "A beginner's guide to containerizing your first Python application",
        "author": "Vansh Raj Chauhan",
        "date": "June 10, 2023",
        "readTime": "7 min read",
        "coverImage": "/imgs/blog/Docker_Hello_World.jpeg",
        "tags": ["Docker", "Python", "Containers", "DevOps"],
        "featured": true,
        "excerpt": "Learn how to containerize a simple Python application using Docker and understand the fundamentals of containerization.",
        "content": [
          {
            "type": "paragraph",
            "content": "Welcome to your first Docker project! In this guide, we will walk through the steps to create a simple Python application that prints \"Hello World\" and deploy it using Docker. This project will help you understand the basics of Docker, including building and running containers."
          },
          {
            "type": "heading",
            "content": "Prerequisites 📋"
          },
          {
            "type": "paragraph",
            "content": "Before we begin, ensure you have the following installed on your system:\n\n- Docker: A platform for developing, shipping, and running applications in containers.\n- Python: A programming language used to write the application.\n- Docker Desktop: A tool to manage Docker containers on your local machine."
          },
          {
            "type": "heading",
            "content": "Step 1: Create the Python Application 🐍"
          },
          {
            "type": "paragraph",
            "content": "First, let's create a simple Python script that prints \"Hello World\"."
          },
          {
            "type": "code",
            "language": "python",
            "content": "# app.py\nprint(\"Hello World! 🐳\")"
          },
          {
            "type": "heading",
            "content": "Step 2: Install Docker and Python 🛠️"
          },
          {
            "type": "subheading",
            "content": "Install Docker"
          },
          {
            "type": "paragraph",
            "content": "Download and install Docker Desktop from the official Docker website. Once installed, start Docker Desktop and ensure it is running."
          },
          {
            "type": "subheading",
            "content": "Install Python"
          },
          {
            "type": "paragraph",
            "content": "Download and install Python from the official Python website."
          },
          {
            "type": "heading",
            "content": "Step 3: Verify Installations ✅"
          },
          {
            "type": "paragraph",
            "content": "Before proceeding, let's verify that Docker and Python are installed correctly."
          },
          {
            "type": "subheading",
            "content": "Check Docker Version"
          },
          {
            "type": "paragraph",
            "content": "Run the following command in your terminal:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "docker --version"
          },
          {
            "type": "paragraph",
            "content": "You should see an output similar to:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "Docker version 20.10.17, build 100c701"
          },
          {
            "type": "subheading",
            "content": "Check Python Version"
          },
          {
            "type": "paragraph",
            "content": "Run the following command in your terminal:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "python --version"
          },
          {
            "type": "paragraph",
            "content": "You should see an output similar to:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "Python 3.9.7"
          },
          {
            "type": "heading",
            "content": "Step 4: Create a Dockerfile 📄"
          },
          {
            "type": "paragraph",
            "content": "A Dockerfile is a script that contains instructions for Docker to build an image. Create a file named Dockerfile (no file extension) in the same directory as app.py and add the following content:"
          },
          {
            "type": "code",
            "language": "dockerfile",
            "content": "# Use an official Python runtime as the base image\nFROM python:3.9-slim\n\n# Set the working directory in the container\nWORKDIR /app\n\n# Copy the current directory contents into the container at /app\nCOPY . /app\n\n# Run the Python script\nCMD [\"python\", \"app.py\"]"
          },
          {
            "type": "paragraph",
            "content": "This Dockerfile does the following:\n\n1. Uses the official Python 3.9 slim image as the base.\n2. Sets the working directory inside the container to /app.\n3. Copies the contents of the current directory (including app.py) into the container.\n4. Runs the app.py script when the container starts."
          },
  
          {
            "type": "heading",
            "content": "Step 5: Build the Docker Image 🏗️"
          },
          {
            "type": "paragraph",
            "content": "Now that we have our Dockerfile and app.py, let's build the Docker image."
          },
          {
            "type": "paragraph",
            "content": "Open a terminal in the directory containing the Dockerfile and app.py. Run the following command to build the Docker image:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "docker build -t hello-world-app ."
          },
          {
            "type": "paragraph",
            "content": "The -t flag tags the image with the name hello-world-app.\nThe . at the end specifies the build context (current directory)."
          },
          {
            "type": "heading",
            "content": "Step 6: Verify the Docker Image 🖼️"
          },
          {
            "type": "paragraph",
            "content": "After building the image, let's verify that it was created successfully."
          },
          {
            "type": "paragraph",
            "content": "Run the following command:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "docker images"
          },
          {
            "type": "paragraph",
            "content": "You should see an output similar to:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "REPOSITORY          TAG       IMAGE ID       CREATED          SIZE\nhello-world-app     latest    abc123def456   10 seconds ago   123MB"
          },
          {
            "type": "heading",
            "content": "Step 7: Run the Docker Container 🚀"
          },
          {
            "type": "paragraph",
            "content": "Finally, let's run the Docker container to execute our Python script."
          },
          {
            "type": "paragraph",
            "content": "Run the following command:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "docker run hello-world-app"
          },
          {
            "type": "paragraph",
            "content": "You should see the output:"
          },
          {
            "type": "code",
            "language": "bash",
            "content": "Hello World! 🐳"
          },
          {
            "type": "heading",
            "content": "Conclusion 🎉"
          },
          {
            "type": "paragraph",
            "content": "Congratulations! 🎉 You've successfully created a Dockerized Python application that prints \"Hello World! 🐳\". This is just the beginning of your Docker journey. Keep exploring and building more complex applications with Docker!"
          },
          {
            "type": "paragraph",
            "content": "Happy coding! 🚀🐳"
          }
        ]
      },
    ]
  }
  
};

export default data;
