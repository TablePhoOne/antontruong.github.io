"use client";

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({
  title,
  subtitle,
}: HeroProps) {
  return (
    <section className="gradient-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-[var(--lavender)] opacity-36 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-[var(--matcha)] opacity-25 blur-2xl" />

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-none"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: .2 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-8 opacity-70"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      
    </section>
  );
}