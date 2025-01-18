"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribing(false);
    setIsSubscribed(true);

    // Reset after 3 seconds
    // setTimeout(() => {
    //   setIsSubscribed(false);
    // }, 3000);
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Platy.Studio</h3>
            <p className="text-sm text-white/60">
              Seattle-based AI video production studio specializing in
              high-quality dubbing and karaoke solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  AI Dubbing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Karaoke Creation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Custom Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-sm text-white/60">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10"
                  required
                  disabled={isSubscribing}
                />
                <Button
                  type="submit"
                  variant="outline"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-green-400 mt-2">
                  Thanks for signing up!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 text-sm md:flex-row md:space-y-0">
          <p className="text-white/60">
            © {new Date().getFullYear()} Platy.Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/60 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
