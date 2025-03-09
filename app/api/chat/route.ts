import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import data from "@/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create a context string from your data
const createContextFromData = () => {
  const projects = data.projects.projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const skills = data.technologies.skills.map((s) => s.name).join(", ");

  return `
    About Vansh Raj Chauhan :
    - Third-year B.Tech CSE student with a passion for Web Development and Cloud Computing.
    - Skilled in turning ideas into functional, user-friendly applications.
    - Email: ${data.contact.email}
    
    Core Expertise:
    - Frontend Development: HTML, CSS, JavaScript, TypeScript, React.js, Angular.js, React Native
    - Backend Development: Node.js, Express, MongoDB, MySQL
    - Cloud & DevOps: AWS, Git
    - Programming Languages: Java, JavaScript, TypeScript
    - Additional Skills: Data Structures & Algorithms (DSA), WordPress, PHP


    Professional Experience:

      1. Front-end Intern at OneThing Design (May 2024 - July 2024)
       - Mastered WordPress functionality and PHP coding, contributing to the enhancement of two major client websites used by over 10,000 users weekly.
       - Worked on projects for high-profile clients like TVS and RBI, developing solutions that increased user engagement.
       - Improved technical and soft skills through meetings and code assessments.
     
    Notable  Projects:
    ${projects}


    Awards & Certifications:

      - AWS Cloud Practitioner Essentials (Dec 2024)
      - Top 10 in UHackathon 4.0 (Sept 2023)
      - Runner-Up in Intra-College Gaming Competition 
    

    Services:
    - Custom Website/Software Development
    - Performance Optimization
    - Scalability Planning
    
    Additional Information:
    - Experienced with multiple cloud platforms: Aws, Azure, Google Cloud
    - Focus on practical, business-driven solutions
    - Regular updates with latest Full Stack technologies
  `;
};

const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: `You are an AI assistant for Aga Kadela. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Be confident about AI integration abilities
            - Emphasize practical, real-world applications
            - Keep responses well-structured with clear sections
            - Use bullet points or numbered lists for better readability
            - Always mention relevant experience and past projects
            - For specific project inquiries, guide users to the contact form
            - Focus on Aga's expertise in Next.js, React, and advanced AI integration`,
        },
        {
          role: "model",
          parts:
            "I understand. I'll act as Aga's AI assistant, providing detailed, confident responses about her extensive experience in AI integration, Next.js development, and full-stack capabilities. I'll emphasize her practical approach and successful project implementations while maintaining professionalism and enthusiasm.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: any) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: msg.content,
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
