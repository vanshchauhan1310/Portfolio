import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import BlogCard from "@/app/(main)/blog/blog-card";
import Link from "next/link";


export default function BlogPreviewSection() {
  const ref = useRef(null);
  useCurSection(ref);

  const { featuredPosts } = data.blog;

  return (
    <section ref={ref} id="blog-preview" className="w-full py-16 container flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-5xl mb-2">
        <span className="text-gradient-primary">{"{ "}</span>
        Latest Articles
        <span className="text-gradient-primary">{" }"}</span>
      </h1>
      <p className="text-muted-foreground text-center mb-12 max-w-xl">
        Thoughts, stories and ideas on web development, performance optimization, and digital experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
   
        {featuredPosts.map((post, index) => (
      
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <BlogCard post={post} />
          </motion.div>
        
        ))}
      </div>

      <Button asChild variant="outline" className="group">
      <Link href="/blog">
          View All Articles
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </section>
  );
}