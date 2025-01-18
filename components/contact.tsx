"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section className="container mx-auto relative  px-4" id="contact">
      <SectionHeading
        title="Get in touch"
        description="Ready to transform your content? Let's talk about your production needs."
      />
      <div className="mx-auto mt-16 max-w-2xl">
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input id="name" type="text" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" className="mt-1" />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium">
              Company
            </label>
            <Input id="company" type="text" className="mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" rows={4} className="mt-1" />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
