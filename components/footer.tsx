"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trim and validate email BEFORE making API calls
    const emailValue = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(emailValue)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubscribing(true);

    const payload = {
      name: "Subscriber",
      email,
      message: "Subscribe to newsletter",
    };

    try {
      // Concurrently call both APIs
      const [csvResponse, emailResponse] = await Promise.all([
        fetch("/api/upload-subscribe-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
        fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ]);

      // Handle both responses
      if (csvResponse.ok && emailResponse.ok) {
        setIsSubscribed(true);
        toast.success("Your details were submitted successfully!");
      } else {
        // Check which request failed
        const csvError = !csvResponse.ok ? await csvResponse.json() : null;
        const emailError = !emailResponse.ok
          ? await emailResponse.json()
          : null;

        toast.error(`Error submitting form:\n
          CSV Upload: ${csvError ? csvError.message : "Success"}\n
          Email Sending: ${emailError ? emailError.message : "Success"}
        `);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubscribing(false);
      setIsSubscribed(false);
    }
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 max-w-[500px]">
            <h3 className="text-lg font-bold">Platy.Studio</h3>
            <p className="text-sm text-white/60">
              Seattle-based AI video production studio specializing in
              high-quality dubbing solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-white/60 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/company/platy-studio/posts/?feedView=all"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-white/60 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          {/* Solutions */}
          {/* <div className="space-y-4">
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
          </div> */}

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="careers"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="http://blog.platy.studio/"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/term"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright-policy"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Copyright Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 max-w-[250px]">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-sm text-white/60">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:space-x-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/5 border-white/10"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
                  disabled={isSubscribing}
                />
                <Button
                  type="submit"
                  variant="outline"
                  disabled={isSubscribing}
                  className="mt-2 sm:mt-0"
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
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 text-sm md:flex-row md:space-y-0">
          <p className="text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Platy Studio LLC. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
