"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

type Props = {
  project: {
    category: string;
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink?: string;
    previewLink: string;
  };
};

export default function ProjectCard({ project }: Props) {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-[650px] rounded-2xl bg-muted border sticky top-8">
      <div className="flex justify-between flex-shrink-0 px-4 pt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe size={18} />
          <span>{project.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block rounded-full size-3 bg-green-500 ml-auto" />
          <span className="block rounded-full size-3 bg-yellow-500" />
          <span className="block rounded-full size-3 bg-red-500 " />
        </div>
      </div>
      <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2 border">
        <Image
          className="size-full object-cover object-top"
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
        />
        <div 
          onClick={() => handleExternalLink(project.previewLink)}
          className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        />
        <ExternalLink
          size={24}
          className="absolute top-4 right-4 opacity-90 hidden group-hover:block"
        />
      </div>
      <div className="px-4 py-2 w-full">
        <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
        <p className="text-muted-foreground h-[150px] overflow-hidden whitespace-pre-line">
          {project.description}
        </p>
        <div className="space-x-2 my-7">
          <Button 
            onClick={() => handleExternalLink(project.previewLink)}
            variant="secondary"
          >
            Live view
          </Button>
          {project.githubLink && (
            <Button 
              onClick={() => handleExternalLink(project.githubLink)}
              variant="ghost" 
              className="bg-muted-foreground/10"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}