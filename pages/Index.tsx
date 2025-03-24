"use client"; 
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";
import BlogPreviewSection from "@/app/(main)/blog/blog-preview";
import MainLayout from "@/app/(main)/layout";


const Index = () => {
  return (
   
    <div className="min-h-screen">
      {/* page sections */}
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Technologies />
      <BlogPreviewSection />
      <ContactSection />
    </div>


  );
};

export default Index;