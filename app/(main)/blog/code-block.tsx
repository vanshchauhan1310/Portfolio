

import type React from "react"
import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
  
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-muted">
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
        <span className="text-sm text-muted-foreground">{language}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock

