"use client";

import Index from "@/pages/Index";
import Blog from "@/app/(main)/blog/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  // Create a new QueryClient instance for each request in client components
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail id={""} />} />
        </Routes>
      </BrowserRouter> */}
        <Link href="/"><Index/></Link>
        <Link href="/blog">Blog</Link>
        
    </QueryClientProvider>
  );
}