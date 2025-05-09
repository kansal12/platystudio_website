"use client";

import * as React from "react";
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

export function Header() {
  const [showDemo, setShowDemo] = useState(false);
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
                href="#features"
                className="text-sm font-medium hover:text-white/80 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#Demo"
                className="text-sm font-medium hover:text-white/80 transition-colors"
              >
                Demos
              </Link>

              <Link
                href="https://kansal12.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-white/80 transition-colors"
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
              Schedule Demo
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
                      href="#features"
                      className="text-lg px-4 py-2 hover:bg-white/5 rounded-lg"
                    >
                      Features
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#Demo"
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
                      Schedule Demo
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
