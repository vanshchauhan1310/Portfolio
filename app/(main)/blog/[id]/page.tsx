"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, TagIcon } from "lucide-react";
import blogPosts, { type BlogPost } from "@/data/blog";
import BlogContentRenderer from "@/app/(main)/blog/blog-content";
import { Button } from "@/components/ui/button";
import BlogCard from "@/app/(main)/blog/blog-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const blogId = params.id;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundPost = blogPosts.find((p) => p.id === blogId);

    if (foundPost) {
      setPost(foundPost);
      const related = blogPosts
        .filter((p) => p.id !== blogId && p.tags.some((tag) => foundPost.tags.includes(tag)))
        .slice(0, 2);
      setRelatedPosts(related);
    }

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-muted rounded mb-4"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="text-muted-foreground mb-4">The post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/blog">Go back to blogs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-muted py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Button variant="ghost" className="mb-6" onClick={() => router.push('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blogs
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-1"
                >
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 rounded-xl overflow-hidden"
          >
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </motion.div>

          <BlogContentRenderer content={post.content} />

          <div className="mt-16 pt-8 border-t">
            <h3 className="text-xl font-bold mb-6">About the Author</h3>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                <img src="/imgs/me.jpeg" alt={post.author} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-muted-foreground">Web Developer & Technical Writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts
      {relatedPosts.length > 0 && (
        <div className="bg-muted py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}