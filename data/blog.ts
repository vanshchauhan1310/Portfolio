
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
      type: 'paragraph' | 'heading' | 'subheading' | 'image' | 'code' | 'quote' | 'video' | 'bulletlist';
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
      "date": "March 24 , 2025",
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
      "date": "March 24, 2025",
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
    },


    {
      "id": "4",
      "title": "Running MySQL Using Docker 🐳📊",
      "subtitle": "A complete guide to containerizing and deploying MySQL databases with Docker",
      "author": "Vansh Raj Chauhan",
      "date": "March 24, 2025",
      "readTime": "10 min read",
      "coverImage": "/imgs/blog/MySQl_Docker.jpg",
      "tags": ["Docker", "MySQL", "Database", "DevOps", "Backend"],
      "featured": true,
      "excerpt": "Learn how to containerize and deploy MySQL databases using Docker for portable, scalable database solutions.",
      "content": [
        {
          "type": "paragraph",
          "content": "In this project, we'll deploy a MySQL database using Docker, a powerful platform for containerizing applications. Docker ensures that your database is portable, scalable, and independent of the underlying system. This guide will walk you through setting up a MySQL database inside a Docker container and initializing it with sample data."
        },
        {
          "type": "heading",
          "content": "Prerequisites 📋"
        },
        {
          "type": "paragraph",
          "content": "Before we begin, ensure you have the following installed:\n\n- Docker: Platform for containerized applications\n- Docker Desktop: For managing containers locally"
        },
        {
          "type": "heading",
          "content": "Project Structure 🗂️"
        },
        {
          "type": "paragraph",
          "content": "The project consists of these files:\n\n- database_students.sql: SQL script to create and initialize the database\n- Dockerfile: Instructions for Docker to build the MySQL image"
        },
        {
          "type": "heading",
          "content": "Step 1: Create the SQL Script 📄"
        },
        {
          "type": "paragraph",
          "content": "The database_students.sql file contains:"
        },
        {
          "type": "code",
          "language": "sql",
          "content": "CREATE DATABASE student;\nUSE student;\n\nCREATE TABLE students (\n    StudentID INT NOT NULL AUTO_INCREMENT,\n    FirstName VARCHAR(100) NOT NULL,\n    Surname VARCHAR(100) NOT NULL,\n    PRIMARY KEY (StudentID)\n);\n\nINSERT INTO students (FirstName, Surname)\nVALUES (\"John\", \"Andersen\"), (\"Emma\", \"Smith\");"
        },
        {
          "type": "paragraph",
          "content": "This script creates a student database with a students table and inserts sample records."
        },
        {
          "type": "heading",
          "content": "Step 2: Create the Dockerfile 📄"
        },
        {
          "type": "paragraph",
          "content": "Here's our Dockerfile for MySQL:"
        },
        {
          "type": "code",
          "language": "dockerfile",
          "content": "# Use the official MySQL image\nFROM mysql:latest\n\n# Set the root password for MySQL\nENV MYSQL_ROOT_PASSWORD=root\n\n# Copy the SQL initialization script\nCOPY ./database_students.sql /docker-entrypoint-initdb.d/"
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
          "content": "docker build -t mysql_db ."
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
          "content": "REPOSITORY   TAG       IMAGE ID       CREATED          SIZE\nmysql_db     latest    abc123def456   10 seconds ago   500MB"
        },
        {
          "type": "heading",
          "content": "Step 5: Run the Docker Container 🚀"
        },
        {
          "type": "paragraph",
          "content": "Start the MySQL container:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker run -d --name mysql_container mysql_db"
        },
        {
          "type": "heading",
          "content": "Step 6: Access and Query the Database 🔍"
        },
        {
          "type": "subheading",
          "content": "Access the container shell"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker exec -it mysql_container /bin/bash"
        },
        {
          "type": "subheading",
          "content": "Connect to MySQL"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "mysql -u root -p"
        },
        {
          "type": "subheading",
          "content": "Query the database"
        },
        {
          "type": "code",
          "language": "sql",
          "content": "USE student;\nSELECT * FROM students;"
        },
        {
          "type": "paragraph",
          "content": "Expected output:"
        },
        {
          "type": "code",
          "language": "text",
          "content": "+-----------+-----------+----------+\n| StudentID | FirstName | Surname  |\n+-----------+-----------+----------+\n|         1 | John      | Andersen |\n|         2 | Emma      | Smith    |\n+-----------+-----------+----------+"
        },
        {
          "type": "heading",
          "content": "Conclusion 🎉"
        },
        {
          "type": "paragraph",
          "content": "Congratulations! You've successfully deployed a MySQL database using Docker. This containerized solution provides a portable, scalable database environment perfect for development, testing, and production use."
        },
        {
          "type": "paragraph",
          "content": "Happy coding! 💻✨"
        }
      ]
    },

    {
      "id": "5",
      "title": "Networking Using Docker 🐳🌐",
      "subtitle": "Master container communication with Docker's powerful networking capabilities",
      "author": "Tanishq Macbook",
      "date": "March 24, 2025",
      "readTime": "15 min read",
      "coverImage": "/imgs/blog/Docker_Networking.png",
      "tags": ["Docker", "Networking", "DevOps", "Containers", "Microservices"],
      "featured": true,
      "excerpt": "Learn how to configure and manage Docker networks for seamless container communication in distributed applications.",
      "content": [
        {
          "type": "paragraph",
          "content": "Docker Networking is a powerful feature that enables communication between containers, making it essential for building distributed applications. This guide covers network drivers, essential commands, and practical examples to help you master container networking."
        },
        {
          "type": "heading",
          "content": "Docker Network Drivers 🚦"
        },
        {
          "type": "paragraph",
          "content": "Docker supports several network drivers for different use cases:"
        },
        {
          "type": "paragraph",
          "content": "Docker offers multiple network drivers including: the Bridge driver for isolated container networks, Host driver that removes network isolation, None driver which disables networking, Overlay for connecting Docker daemons in Swarm, IPvlan for IP address control, and Macvlan for assigning MAC addresses to containers."
        },
        {
          "type": "heading",
          "content": "Prerequisites 📋"
        },
        {
          "type": "paragraph",
          "content": "Before starting, verify Docker is installed:"
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
          "type": "heading",
          "content": "Essential Network Commands 🛠️"
        },
        {
          "type": "subheading",
          "content": "1. List Existing Networks"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker network ls"
        },
        {
          "type": "subheading",
          "content": "2. Create a Custom Bridge Network"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker network create --driver bridge --subnet 172.20.0.0/16 --ip-range 172.20.240.0/20 net-bridge"
        },
        {
          "type": "subheading",
          "content": "3. Connect Containers to Network"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker network connect <network-name> <container-name>"
        },
        {
          "type": "subheading",
          "content": "4. Inspect Network Details"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker network inspect <network-name>"
        },
        {
          "type": "heading",
          "content": "Practical Networking Example 🖧"
        },
        {
          "type": "subheading",
          "content": "Step 1: Launch Containers"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker run -itd --net=net-bridge --name=server-A busybox\ndocker run -itd --net=net-bridge --name=server-B busybox"
        },
        {
          "type": "subheading",
          "content": "Step 2: Get Container IPs"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' server-A"
        },
        {
          "type": "subheading",
          "content": "Step 3: Test Connectivity"
        },
        {
          "type": "paragraph",
          "content": "First, install ping utility:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker exec server-A apk add --no-cache iputils-ping"
        },
        {
          "type": "paragraph",
          "content": "Then test connection:"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker exec -it server-A ping <server-B-ip>"
        },
        {
          "type": "heading",
          "content": "Advanced Network Operations"
        },
        {
          "type": "subheading",
          "content": "View Network Containers (JSON)"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker inspect --format='{{json .Containers}}' net-bridge | python -m json.tool"
        },
        {
          "type": "subheading",
          "content": "Inspect Container Network Settings"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker inspect --format='{{json .NetworkSettings}}' server-B | python -m json.tool"
        },
        {
          "type": "heading",
          "content": "Conclusion 🎉"
        },
        {
          "type": "paragraph",
          "content": "You've now mastered Docker networking fundamentals! These skills enable you to build complex distributed systems with proper container communication. Docker's networking capabilities are powerful tools for microservices architectures and cloud-native applications."
        },
        {
          "type": "paragraph",
          "content": "Happy networking! 💻✨"
        }
      ]
    },

    {
      "id": "6",
      "title": "FastAPI Continuous Delivery with Docker and GitHub Actions",
      "subtitle": "Automate deployment of Dockerized FastAPI applications using GitHub Actions",
      "author": "Vansh Raj Chauhan",
      "date": "March 31, 2025",
      "readTime": "6 min read",
      "coverImage": "/imgs/blog/Fastapi-cd.jpeg",
      "tags": ["FastAPI", "Docker", "GitHub Actions", "CI/CD", "DevOps"],
      "featured": true,
      "excerpt": "Learn how to set up continuous delivery for a FastAPI application using Docker and GitHub Actions.",
      "content": [
        {
          "type": "paragraph",
          "content": "This guide demonstrates setting up Continuous Delivery for a Dockerized FastAPI application using GitHub Actions."
        },
        {
          "type": "heading",
          "content": "Repository Structure"
        },
        {
          "type": "code",
          "language": "text",
          "content": "fastapi-cd-demo/\n├── .github/\n│   └── workflows/\n│       └── DockerBuild.yml\n├── Dockerfile\n├── main.py\n├── requirements.txt\n└── README.md"
        },
        {
          "type": "heading",
          "content": "1. FastAPI Server (main.py)"
        },
        {
          "type": "code",
          "language": "python",
          "content": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/\")\ndef read_root():\n    return {\"message\": \"Welcome to FastAPI CD Demo\"}\n\n@app.get(\"/items/{item_id}\")\ndef read_item(item_id: int, q: str = None):\n    return {\"item_id\": item_id, \"q\": q}"
        },
        {
          "type": "heading",
          "content": "2. Dependencies (requirements.txt)"
        },
        {
          "type": "code",
          "language": "text",
          "content": "fastapi==0.95.2\nuvicorn==0.22.0"
        },
        {
          "type": "heading",
          "content": "3. Dockerfile"
        },
        {
          "type": "code",
          "language": "dockerfile",
          "content": "# Base image\nFROM ubuntu:22.04\n\n# Install dependencies\nRUN apt-get update && \\\n    apt-get install -y python3 python3-pip && \\\n    rm -rf /var/lib/apt/lists/*\n\n# Set working directory\nWORKDIR /app\n\n# Copy requirements and install\nCOPY requirements.txt .\nRUN pip3 install --no-cache-dir -r requirements.txt\n\n# Copy application code\nCOPY main.py .\n\n# Expose port\nEXPOSE 8000\n\n# Run the application\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]"
        },
        {
          "type": "heading",
          "content": "4. GitHub Actions Workflow"
        },
        {
          "type": "code",
          "language": "yaml",
          "content": "name: Docker Build and Push\n\non:\n  push:\n    branches: [ \"main\" ]\n\nenv:\n  DOCKERHUB_USERNAME: ${{ secrets.DOCKERHUB_USERNAME }}\n  DOCKERHUB_TOKEN: ${{ secrets.DOCKERHUB_TOKEN }}\n  IMAGE_NAME: fastapi-cd-demo\n\njobs:\n  build-and-push:\n    runs-on: ubuntu-latest\n    \n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v3\n        \n      - name: Log in to Docker Hub\n        uses: docker/login-action@v2\n        with:\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_TOKEN }}\n          \n      - name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v2\n        \n      - name: Build and push\n        uses: docker/build-push-action@v4\n        with:\n          context: .\n          push: true\n          tags: ${{ secrets.DOCKERHUB_USERNAME }}/${{ env.IMAGE_NAME }}:latest"
        },
        {
          "type": "heading",
          "content": "5. Setup Instructions"
        },
        {
          "type": "subheading",
          "content": "Local Development"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "git clone https://github.com/vanshchauhan1310/Fastapi-GithubAction \npip install -r requirements.txt\nuvicorn main:app --reload"
        },
        {
          "type": "subheading",
          "content": "Docker Setup"
        },
        {
          "type": "code",
          "language": "bash",
          "content": "docker build -t fastapi-cd-demo .\ndocker run -d -p 8000:8000 fastapi-cd-demo"
        },
        {
          "type": "subheading",
          "content": "GitHub Actions Configuration"
        },
        {
          "type": "paragraph",
          "content": "Add these secrets to your GitHub repository (Settings > Secrets > Actions):\n- DOCKERHUB_USERNAME: Your Docker Hub username\n- DOCKERHUB_TOKEN: Your Docker Hub personal access token"
        },
        {
          "type": "heading",
          "content": "Accessing the Application"
        },
        {
          "type": "paragraph",
          "content": "Endpoints:\n- / - Welcome message\n- /items/{item_id} - Example endpoint with parameters"
        },
        {
          "type": "heading",
          "content": "Conclusion"
        },
        {
          "type": "paragraph",
          "content": "You've now set up a complete Continuous Delivery pipeline for a FastAPI application using Docker and GitHub Actions. This setup automatically builds and deploys your application whenever changes are pushed to the main branch."
        }
      ]
    }

  ];
  
  export default blogPosts;