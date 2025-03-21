
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


    {
      "id": "2",
      "title": "Deploying a Streamlit App Using Docker 🐳📊",
      "subtitle": "A step-by-step guide to containerizing and deploying interactive Streamlit applications",
      "author": "Vansh Raj Chauhan",
      "date": "June 15, 2023",
      "readTime": "10 min read",
      "coverImage": "/imgs/blog/Streamlit_Docker.jpeg",
      "tags": ["Docker", "Streamlit", "Python", "Data Visualization", "DevOps"],
      "featured": true,
      "excerpt": "Learn how to containerize and deploy interactive Streamlit applications using Docker for portable, scalable data science projects.",
      "content": [
        {
          "type": "paragraph",
          "content": "In this guide, we'll walk through containerizing a Streamlit application using Docker. Streamlit is a powerful framework for building interactive web apps for machine learning and data science, while Docker provides containerization to make these applications portable and system-independent."
        },
        {
          "type": "heading",
          "content": "Prerequisites 📋"
        },
        {
          "type": "paragraph",
          "content": "Before we begin, ensure you have the following installed:\n\n- Docker: Platform for containerized applications\n- Python: Programming language for Streamlit apps\n- Streamlit: Framework for building web apps\n- Docker Desktop: For managing containers locally"
        },
        {
          "type": "heading",
          "content": "Step 1: Install Required Software 🛠️"
        },
        {
          "type": "subheading",
          "content": "Install Streamlit"
        },
        {
          "type": "paragraph",
          "content": "Run this command in your terminal:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "pip install streamlit"
        },
        {
          "type": "subheading",
          "content": "Install Docker Desktop"
        },
        {
          "type": "paragraph",
          "content": "Download and install Docker Desktop from the official Docker website and ensure it's running."
        },
        {
          "type": "heading",
          "content": "Step 2: Verify Installations ✅"
        },
        {
          "type": "subheading",
          "content": "Check Docker Version"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker --version"
        },
        {
          "type": "paragraph",
          "content": "Expected output:"
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
          "type": "code",
          "language": "bash",
          "content": "python --version"
        },
        {
          "type": "paragraph",
          "content": "Expected output:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "Python 3.9.7"
        },
        {
          "type": "heading",
          "content": "Step 3: Create the Streamlit Application 🐍"
        },
        {
          "type": "paragraph",
          "content": "Create a file named streamlit_app.py with this interactive spiral visualization code:"
        },
        {
          "type": "code",
          "language": "python",
          "content": "from collections import namedtuple\nimport altair as alt\nimport math\nimport pandas as pd\nimport streamlit as st\n\n\"\"\"\n# Welcome to Streamlit! 🎉\n\nEdit `/streamlit_app.py` to customize this app!\n\"\"\"\n\nwith st.echo(code_location='below'):\n   total_points = st.slider(\"Number of points in spiral\", 1, 5000, 2000)\n   num_turns = st.slider(\"Number of turns in spiral\", 1, 100, 9)\n\n   Point = namedtuple('Point', 'x y')\n   data = []\n\n   points_per_turn = total_points / num_turns\n\n   for curr_point_num in range(total_points):\n      curr_turn, i = divmod(curr_point_num, points_per_turn)\n      angle = (curr_turn + 1) * 2 * math.pi * i / points_per_turn\n      radius = curr_point_num / total_points\n      x = radius * math.cos(angle)\n      y = radius * math.sin(angle)\n      data.append(Point(x, y))\n\n   st.altair_chart(alt.Chart(pd.DataFrame(data), height=500, width=500)\n      .mark_circle(color='#0068c9', opacity=0.5)\n      .encode(x='x:Q', y='y:Q'))"
        },
        {
          "type": "heading",
          "content": "Step 4: Create the Dockerfile 📄"
        },
        {
          "type": "paragraph",
          "content": "Create a Dockerfile with these instructions:"
        },
        {
          "type": "code",
          "language": "dockerfile",
          "content": "# Use official Python runtime\nFROM python:3.9-slim\n\n# Set working directory\nWORKDIR /app\n\n# Install system dependencies\nRUN apt-get update && apt-get install -y \\\n    build-essential \\\n    curl \\\n    software-properties-common \\\n    git \\\n    && rm -rf /var/lib/apt/lists/*\n\n# Clone example repository\nRUN git clone https://github.com/streamlit/streamlit-example.git .\n\n# Install Python dependencies\nRUN pip3 install -r requirements.txt\n\n# Expose port 8501\nEXPOSE 8501\n\n# Health check\nHEALTHCHECK CMD curl --fail http://localhost:8501/_stcore/health\n\n# Run Streamlit\nENTRYPOINT [\"streamlit\", \"run\", \"streamlit_app.py\", \"--server.port=8501\", \"--server.address=0.0.0.0\"]"
        },
        {
          "type": "heading",
          "content": "Step 5: Build the Docker Image 🏗️"
        },
        {
          "type": "paragraph",
          "content": "Build the image with this command:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker build -t streamlit_app ."
        },
        {
          "type": "heading",
          "content": "Step 6: Verify the Docker Image 🖼️"
        },
        {
          "type": "paragraph",
          "content": "Check the created image:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker images"
        },
        {
          "type": "paragraph",
          "content": "Expected output:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "REPOSITORY      TAG       IMAGE ID       CREATED          SIZE\nstreamlit_app   latest    abc123def456   10 seconds ago   1.02GB"
        },
        {
          "type": "heading",
          "content": "Step 7: Run the Docker Container 🚀"
        },
        {
          "type": "paragraph",
          "content": "Launch your Streamlit app:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker run -p 8501:8501 streamlit_app"
        },
        {
          "type": "paragraph",
          "content": "Access your app at: http://localhost:8501"
        },
        {
          "type": "heading",
          "content": "Conclusion 🎉"
        },
        {
          "type": "paragraph",
          "content": "Congratulations! You've successfully deployed a Streamlit application using Docker. This powerful combination enables you to build and share interactive data applications that are portable and scalable."
        },
        {
          "type": "paragraph",
          "content": "Happy coding! 💻✨"
        }
      ]
    },


    {
      "id": "3",
      "title": "Machine Learning Model Deployment Using Docker 🐳🤖",
      "subtitle": "A comprehensive guide to containerizing and deploying machine learning models with Docker",
      "author": "Vansh Raj Chauhan",
      "date": "March 24, 2025",
      "readTime": "12 min read",
      "coverImage": "/imgs/blog/Ml_Model_Docker.jpeg",
      "tags": ["Docker", "Machine Learning", "Python", "Streamlit", "DevOps", "Data Science"],
      "featured": true,
      "excerpt": "Learn how to containerize and deploy machine learning models using Docker for portable, scalable AI applications.",
      "content": [
        {
          "type": "paragraph",
          "content": "In this project, we'll deploy a Machine Learning (ML) model using Docker, a powerful platform for containerizing applications. Docker ensures that your ML model is portable, scalable, and independent of the underlying system. This guide will walk you through containerizing an ML model, training it, and deploying it as a Dockerized application."
        },
        {
          "type": "heading",
          "content": "Prerequisites 📋"
        },
        {
          "type": "paragraph",
          "content": "Before we begin, ensure you have the following installed:\n\n- Docker: Platform for containerized applications\n- Python: Programming language for ML models\n- Streamlit: Framework for building web interfaces\n- Docker Desktop: For managing containers locally"
        },
        {
          "type": "heading",
          "content": "Project Structure 🗂️"
        },
        {
          "type": "paragraph",
          "content": "The project consists of these files:\n\n- app.py: Main Python script with ML model and Streamlit app\n- requirements.txt: Python dependencies\n- Dockerfile: Instructions for Docker to build an image\n- mushrooms.csv: Dataset for training the ML model"
        },
        {
          "type": "heading",
          "content": "Step 1: Create the ML Model and Streamlit App 🐍"
        },
        {
          "type": "subheading",
          "content": "Import the ML Model"
        },
        {
          "type": "paragraph",
          "content": "The app.py script includes data preprocessing, model training, and Streamlit interface for user interaction."
        },
        {
          "type": "subheading",
          "content": "Create requirements.txt"
        },
        {
          "type": "paragraph",
          "content": "Generate a requirements file with:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "pip freeze > requirements.txt"
        },
        {
          "type": "heading",
          "content": "Step 2: Create the Dockerfile 📄"
        },
        {
          "type": "paragraph",
          "content": "Here's our Dockerfile for the project:"
        },
        {
          "type": "code",
          "language": "dockerfile",
          "content": "# Use an official Python runtime as the base image\nFROM python:3.9-slim\n\n# Set the working directory in the container\nWORKDIR /app\n\n# Copy the application files to the working directory\nCOPY app.py /app\nCOPY requirements.txt /app\nCOPY mushrooms.csv /app\n\n# Upgrade pip and install Python dependencies\nRUN python -m pip install --upgrade pip\nRUN pip install -r requirements.txt\n\n# Expose port 8501 for Streamlit\nEXPOSE 8501\n\n# Set the entrypoint command to run the Streamlit app\nENTRYPOINT [\"streamlit\", \"run\", \"app.py\", \"--server.port=8501\", \"--server.address=0.0.0.0\"]"
        },
        {
          "type": "heading",
          "content": "Step 3: Build the Docker Image 🏗️"
        },
        {
          "type": "paragraph",
          "content": "Build the image with:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker build -t ml-model ."
        },
        {
          "type": "heading",
          "content": "Step 4: Verify the Docker Image 🖼️"
        },
        {
          "type": "paragraph",
          "content": "Check the created image:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker images"
        },
        {
          "type": "paragraph",
          "content": "Expected output:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "REPOSITORY   TAG       IMAGE ID       CREATED          SIZE\nml-model     latest    abc123def456   10 seconds ago   1.02GB"
        },
        {
          "type": "heading",
          "content": "Step 5: Run the Docker Container 🚀"
        },
        {
          "type": "paragraph",
          "content": "Launch your ML application:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker run -p 8501:8501 ml-model"
        },
        {
          "type": "paragraph",
          "content": "Access your app at: http://localhost:8501"
        },
        {
          "type": "heading",
          "content": "Step 6: Push to DockerHub 🐋"
        },
        {
          "type": "subheading",
          "content": "Log in to DockerHub"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker login"
        },
        {
          "type": "subheading",
          "content": "Tag the Docker Image"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker tag ml-model yourdockerhubusername/ml-model"
        },
        {
          "type": "subheading",
          "content": "Push the Docker Image"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker push yourdockerhubusername/ml-model"
        },
        {
          "type": "heading",
          "content": "Conclusion 🎉"
        },
        {
          "type": "paragraph",
          "content": "Congratulations! You've successfully deployed a Machine Learning model using Docker. This setup ensures your ML model is portable, scalable, and system-independent. Docker and Streamlit together provide a powerful combination for building and deploying AI applications."
        },
        {
          "type": "paragraph",
          "content": "Happy coding! 💻✨"
        }
      ]
    }

  ];
  
  export default blogPosts;