"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import data from "@/data";
import Link from "next/link";
import CodeTyping from "./code-typing";

export default function HomeSection() {
  const router = useRouter();
  const ref = useRef(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-full flex flex-col xl:flex-row gap-12 p-6 items-center justify-center overflow-hidden container text-center md:text-left"
    >
      {/* grid image behind */}
      <Image
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-transparent opacity-10 h-auto w-10/12 max-w-[1250px]"
        src="/svgs/grid.svg"
        alt="grid image"
        width={0}
        height={0}
        priority={true}
      />

      <div className="space-y-7 text-center xl:text-left xl:text-xl">
        <div className="-space-y-1">
          <p>Hello 👋, I&apos;m</p>
          <h1 className="relative text-6xl xl:text-8xl !leading-[1.4]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 bg-gradient-primary opacity-50 w-full h-10 blur-3xl line-" />
            <TextAnimation>{data.home.name}</TextAnimation>
          </h1>
          <h2 className="text-muted-foreground">
            {"// "}{" "}
            {data.home.description
              .split(/#(\w+)/g)
              .map((e, i) =>
                i % 2 === 0 ? (
                  e
                ) : (
                  <span key={`wrapped_${i}`} className="text-secondary">{`{${e
                    .replaceAll("__", "-")
                    .replaceAll("_", " ")}}`}</span>
                )
              )}
          </h2>
        </div>
        <div className="space-x-4">
          <Button
            onClick={() => {
              router.push("#projects");
            }}
            variant="gradientOutline"
          >
            See My Work
          </Button>
          {data.home.cvLink && (
            <Button asChild className="bg-muted-foreground/5" variant="ghost">
              <Link href={data.home.cvLink}>Contact Me</Link>
            </Button>
          )}
        </div>
      </div>

      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0, y: "-20%" },
          end: { opacity: 1, scale: 1, y: 0 },
        }}
        initial="initial"
        animate="end"
        transition={{ duration: 1 }}
        className="relative w-full max-w-2xl"
      >
        <CodeTyping />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => router.push("#about")}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

const TextAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-gradient-primary origin-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: [1, 0] }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
