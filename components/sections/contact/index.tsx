"use client";
import { Globe } from "lucide-react";
import ChatAssistant from "./chat-assistant";
import { ContactForm } from "./contact-form";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import Image from "next/image";

export default function ContactSection() {
  const [gameTurnsLeft, setGameTurnsLeft] = useState(1);
  const ref = useRef(null);
  useCurSection(ref, 0.5);
  return (
    <div
      ref={ref}
      id="contact"
      className="w-full flex flex-col items-center container py-16 md:py-32"
    >
      <h1 className="text-center text-2xl md:text-4xl mb-8 md:mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        Contact Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-around w-full h-full">
        <div className="flex flex-col items-center gap-2 text-center w-full lg:w-[450px] px-4">
          <ChatAssistant />
        </div>

        <motion.div
          layout
          className="w-full lg:w-[450px] h-auto lg:h-[500px] rounded-2xl bg-muted border overflow-hidden mx-4 lg:mx-0"
        >
          <div className="flex justify-between flex-shrink-0 px-4 pt-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe size={18} />
              <span>{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block rounded-full size-3 bg-green-500 ml-auto" />
              <span className="block rounded-full size-3 bg-yellow-500" />
              <span className="block rounded-full size-3 bg-red-500 " />
            </div>
          </div>
          <div className="p-4 lg:p-6">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}