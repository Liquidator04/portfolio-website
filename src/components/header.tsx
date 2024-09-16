"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ModeToggle } from "@/components/toggle-mode";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Aritra.
          </Link>
        </div>
        <ul className="flex gap-4">
          <li
            className={`transition-colors ${
              pathname === "/"
                ? "text-green-500 underline underline-offset-2"
                : "text-gray-500 hover:text-foreground"
            }`}
          >
            <Link href="/">About me</Link>
          </li>
          <li
            className={`transition-colors ${
              pathname === "/experience"
                ? "text-green-500 underline underline-offset-2"
                : "text-gray-500 hover:text-foreground"
            }`}
          >
            <Link href="/experience">Experience</Link>
          </li>
          <li
            className={`transition-colors ${
              pathname === "/projects"
                ? "text-green-500 underline underline-offset-2"
                : "text-gray-500 hover:text-foreground"
            }`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`transition-colors ${
              pathname === "/contact"
                ? "text-green-500 underline underline-offset-2"
                : "text-gray-500 hover:text-foreground"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}
