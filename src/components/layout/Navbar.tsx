"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="glass mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-full px-8 py-4">
        <Link href="/" className="text-lg font-medium tracking-[0.2em]">
          ANTON TRUONG
        </Link>

        <div className="flex gap-8 text-sm uppercase tracking-widest">
          <Link
            href="/"
            className={`
              relative
              ${pathname === "/" ? "font-semibold" : ""}
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-px
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300
              hover:after:w-full
            `}
          >
            About
          </Link>

          <Link
            href="/supperclub"
            className={`
              relative
              ${pathname === "/supperclub" ? "font-semibold" : ""}
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-px
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300
              hover:after:w-full
            `}
          >
            Supper Club
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
