
import { useState, useEffect } from "react"
import type { BlogPost } from "@/data/blog"
import CodeBlock from "./code-block"
import { motion } from "framer-motion"

interface BlogContentRendererProps {
  content: BlogPost["content"]
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderContent = (item: BlogPost["content"][0], index: number) => {
    const baseDelay = 0.1
    const delay = baseDelay + index * 0.05

    switch (item.type) {
      case "paragraph":
        return (
          <motion.p
            key={`paragraph-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="my-4 leading-relaxed text-muted-foreground"
          >
            {item.content}
          </motion.p>
        )

      case "heading":
        return (
          <motion.h2
            key={`heading-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="mt-8 mb-4 text-2xl font-bold"
          >
            {item.content}
          </motion.h2>
        )

      case "subheading":
        return (
          <motion.h3
            key={`subheading-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="mt-6 mb-3 text-xl font-semibold"
          >
            {item.content}
          </motion.h3>
        )

      case "image":
        return (
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="my-8 overflow-hidden rounded-lg"
          >
            <img
              src={item.content || "/placeholder.svg"}
              alt={item.caption || "Blog image"}
              className="w-full object-cover transition-transform hover:scale-105 duration-700"
            />
            {item.caption && <p className="mt-2 text-center text-sm text-muted-foreground italic">{item.caption}</p>}
          </motion.div>
        )

      case "code":
        return (
          <motion.div
            key={`code-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
          >
            <CodeBlock language={item.language || "javascript"} code={item.content} />
          </motion.div>
        )

      case "quote":
        return (
          <motion.blockquote
            key={`quote-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground"
          >
            {item.content}
          </motion.blockquote>
        )

      case "video":
        return (
          <motion.div
            key={`video-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="my-8 aspect-video overflow-hidden rounded-lg"
          >
            <iframe
              src={item.content}
              title={item.caption || "Embedded video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            {item.caption && <p className="mt-2 text-center text-sm text-muted-foreground italic">{item.caption}</p>}
          </motion.div>
        )

      default:
        return null
    }
  }

  return <div className="blog-content">{content.map(renderContent)}</div>
}

