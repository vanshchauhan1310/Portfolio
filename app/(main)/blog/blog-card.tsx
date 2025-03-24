import type { BlogPost } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={`/blog/${post.id}`}
      className="group block overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative overflow-hidden">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full z-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-1000 ease-in-out" />

        <div className="h-48 overflow-hidden">
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Tag */}
        {post.tags && post.tags.length > 0 && (
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-background/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
              {post.tags[0]}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold transition-colors group-hover:text-primary">{post.title}</h3>

        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium">Read more</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </a>
  );
}
