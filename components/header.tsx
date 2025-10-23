"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { DemoDialog } from "@/components/demo-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const [showDemo, setShowDemo] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Function to update the current hash
    const updateHash = () => {
      if (window.location.hash) {
        setHash(window.location.hash);
      } else {
        setHash("");
      }
    };

    // Run once on mount
    updateHash();

    // Listen for hash changes (e.g., when user clicks #features)
    window.addEventListener("hashchange", updateHash);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []); // 👈 no dependencies — runs once
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight">
                  Platy Studio
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/#features"
                className={`relative text-sm font-medium text-white/100 transition-all duration-300 hover:text-white/90
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:content-[''] ${
      hash === "#features"
        ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text after:w-full after:bg-gradient-to-r after:from-blue-400 after:via-indigo-500 after:to-purple-600"
        : ""
    }`}
              >
                Features
              </Link>
              <Link
                href="/demo"
                className={`relative text-sm font-medium text-white/100 transition-all duration-300 hover:text-white/90
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:content-[''] ${
      pathname === "/demo"
        ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text after:w-full after:bg-gradient-to-r after:from-blue-400 after:via-indigo-500 after:to-purple-600"
        : ""
    }`}
              >
                Demo
              </Link>
              <Link
                href="/pricing"
                className={`relative text-sm font-medium text-white/100 transition-all duration-300 hover:text-white/90
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:content-[''] ${
      pathname === "/pricing"
        ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text after:w-full after:bg-gradient-to-r after:from-blue-400 after:via-indigo-500 after:to-purple-600"
        : ""
    }`}
              >
                Pricing
              </Link>

              <Link
                href="https://kansal12.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-sm font-medium text-white/100 transition-all duration-300 hover:text-white/90
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:content-[''] ${
      hash === "/blog"
        ? "text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text after:w-full after:bg-gradient-to-r after:from-blue-400 after:via-indigo-500 after:to-purple-600"
        : ""
    }`}
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <RainbowButton
              className="hidden md:inline-flex"
              onClick={() => setShowDemo(true)}
            >
              Schedule Call
            </RainbowButton>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] px-6 bg-black/95">
                <nav className="flex flex-col space-y-4 mt-8">
                  <SheetClose asChild>
                    <Link
                      href="/#features"
                      className="text-lg px-4 py-2 hover:bg-white/5 rounded-lg"
                    >
                      Features
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/demo"
                      className="text-lg px-4 py-2 hover:bg-white/5 rounded-lg"
                    >
                      Demo
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="https://kansal12.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg px-4 py-2 hover:bg-white/5 rounded-lg"
                    >
                      Blog
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <RainbowButton
                      className="mt-4 w-full"
                      onClick={() => setShowDemo(true)}
                    >
                      Schedule Call
                    </RainbowButton>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </header>
  );
}
