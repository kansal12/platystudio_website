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
import { toast } from "react-toastify";

export function DemoDialog({
  open,
  onOpenChange,
  onClose,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose?: () => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phoneCode, setPhoneCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call
  //   // await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const res = await fetch("/api/upload-csv", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name,
  //       phone: `${phoneCode} ${phone}`,
  //       email,
  //       message,
  //     }),
  //   });

  //   setIsSubmitting(false);
  //   if (res.ok) setIsSubmitted(true);

  //   setIsSubmitted(false);
  //   onOpenChange(false);
  //   // // Close dialog after showing success message
  //   // setTimeout(() => {
  //   // }, 2000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      phone: `${phoneCode} ${phone}`,
      email,
      message,
    };

    try {
      // Concurrently call both APIs
      const [csvResponse, emailResponse] = await Promise.all([
        fetch("/api/upload-csv", {
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
        setIsSubmitted(true);
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
      setIsSubmitting(false);
      setIsSubmitted(false);
      onOpenChange(false);
      onClose && onClose();
    }
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
              <DialogTitle>Schedule Call</DialogTitle>
              <DialogDescription>
                Let us know your requirements and we wll get back to you
                shortly.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 pb-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone *</Label>
                <div className="flex gap-2">
                  <Select
                    defaultValue="+1"
                    onValueChange={(value) => setPhoneCode(value)}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea className="h-[200px] ">
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
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  className="min-h-[80px]"
                  placeholder="Tell us about your content."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Schedule Call"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
