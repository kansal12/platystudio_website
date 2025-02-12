"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { DemoDialog } from "./demo-dialog";
import { useState } from "react";

const faqs = [
  {
    question: "How does AI-powered dubbing maintain voice quality?",
    answer:
      "Our AI technology analyzes the original voice's characteristics including pitch, tone, emotion, and pacing. It then recreates these nuances in the target language while preserving the original performance's authenticity. The system also maintains lip-sync accuracy and natural speech patterns.",
  },
  {
    question: "What languages are supported for dubbing?",
    answer:
      "We currently support dubbing in 40+ languages including English, Spanish, French, German, Japanese, Korean, Mandarin, Hindi, and more. Our AI models are continuously trained on new languages to expand our coverage. Contact us for specific language requirements.",
  },
  {
    question: "How accurate is the vocal separation for karaoke creation?",
    answer:
      "Our AI-powered vocal separation technology achieves industry-leading accuracy with up to 99% separation quality. The system preserves both the vocal and instrumental tracks' quality while eliminating artifacts and maintaining the original mix's dynamics.",
  },
  {
    question: "What video formats do you support?",
    answer:
      "We support all major video formats including MP4, MOV, AVI, MKV, and more. Our platform can handle 4K, HDR content and maintains quality throughout the processing. We also support various audio formats like WAV, MP3, AAC, and FLAC.",
  },
  {
    question: "How long does it take to process a video?",
    answer:
      "Processing time varies based on video length and requested services. Typically, a 30-minute video takes 2-4 hours for dubbing and 1-2 hours for karaoke creation. Enterprise clients get access to priority processing which can reduce these times by up to 70%.",
  },
  {
    question: "Can I manually adjust the AI-generated output?",
    answer:
      "Yes, our platform includes a comprehensive post-processing interface where you can fine-tune timing, adjust voice characteristics, modify pronunciations, and edit separations. This ensures you have complete control over the final output while still benefiting from AI automation.",
  },
  {
    question: "What kind of support do enterprise clients receive?",
    answer:
      "Enterprise clients receive dedicated account management, 24/7 priority support, custom API integration assistance, and specialized training. We also offer custom model training for specific use cases and can develop bespoke solutions for unique requirements.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer:
      "We maintain strict data security protocols with end-to-end encryption, secure cloud storage, and regular security audits. All content is processed in isolated environments, and we offer private cloud deployments for enterprise clients with specific security requirements.",
  },
];

export function FAQ() {
  const [showDemo, setShowDemo] = useState(false);
  const handleDemoClick = () => setShowDemo(true);
  return (
    <section
      className="container mx-auto relative py-20 sm:py-28 lg:py-36"
      id="faq"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Find answers to common questions about our AI-powered video production services."
        />
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#contact"
              onClick={handleDemoClick}
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Contact our team.
            </a>
          </p>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </section>
  );
}
