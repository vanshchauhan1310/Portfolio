"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import blogPosts from "@/data/blog"
import BlogCard from "@/app/(main)/blog/blog-card"
import { Input } from "@/components/ui/input"
import { Search, Tag } from "lucide-react"
import MainLayout from "@/app/(main)/layout";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Extract all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort()

  // Filter posts based on search term and selected tag
  useEffect(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTag = selectedTag === null || post.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })

    setFilteredPosts(filtered)
  }, [searchTerm, selectedTag])

  return (


    <div className="min-h-screen w-full overflow-hidden bg-background">
      {/* Hero Section */}
      <div className="relative bg-muted py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-50" />

        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <img src="/svgs/grid.svg" alt="Grid background" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">{"{ "}</span>
              My Blog
              <span className="text-gradient-primary">{" }"}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thoughts, stories, and ideas about web development, performance optimization, and digital experiences.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-background/80 backdrop-blur-sm shadow-sm border-muted"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="container py-8">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTag === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-full py-12 text-center"
            >
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedTag(null)
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>


  )
}
