"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export function DemoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Close dialog after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
            <p className="text-muted-foreground">
              Our team will reach back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Schedule Demo</DialogTitle>
              <DialogDescription>
                Let us know your requirements and we wll get back to you
                shortly.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone *</Label>
                <div className="flex gap-2">
                  <Select defaultValue="+1">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea className="h-[200px]">
                        <SelectItem value="+1">+1 (US)</SelectItem>
                        <SelectItem value="+44">+44 (UK)</SelectItem>
                        <SelectItem value="+91">+91 (IN)</SelectItem>
                        <SelectItem value="+86">+86 (CN)</SelectItem>
                        <SelectItem value="+81">+81 (JP)</SelectItem>
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                    className="flex-1"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  className="min-h-[80px]"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Schedule Demo"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
