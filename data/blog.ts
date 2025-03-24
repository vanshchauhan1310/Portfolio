
export interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    readTime: string;
    coverImage: string;
    tags: string[];
    featured: boolean;
    excerpt: string;
    content: Array<{
      type: 'paragraph' | 'heading' | 'subheading' | 'image' | 'code' | 'quote' | 'video';
      content: string;
      language?: string;
      caption?: string;
      url?: string;
    }>;
  }
  
  const blogPosts: BlogPost[] = [
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


  ];
  
  export default blogPosts;