"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { DemoDialog } from "./demo-dialog";
import { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";

const plans = [
  {
    name: "Professional",
    description: "Perfect for small production houses",
    price: "499",
    features: [
      "Up to 10 hours of content per month",
      "AI-powered dubbing",
      "Basic karaoke creation",
      "Email support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale production needs",
    price: "Custom",
    features: [
      "Unlimited content processing",
      "Advanced dubbing features",
      "Premium karaoke creation",
      "24/7 priority support",
      "Custom workflow integration",
    ],
  },
];

export function Pricing() {
  const [showDemo, setShowDemo] = useState(false);
  const handleDemoClick = () => setShowDemo(true);
  return (
    <section className="relative py-16 sm:py-24 lg:py-32" id="pricing">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* <SectionHeading
          title="Simple, transparent pricing"
          description="Choose the plan that's right for your production needs"
        /> */}

        {/*
        <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 md:grid-cols-2 lg:gap-12">
           {plans.map((plan) => (
            <BackgroundGradient
              key={plan.name}
              className="rounded-[22px] p-4 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {plan.name}
                </h3>
                <p className="text-base sm:text-lg text-white/60">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    ${plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="ml-2 text-white/60">/month</span>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-base sm:text-lg">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6"
                  variant={plan.name === "Enterprise" ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </BackgroundGradient>
          ))} 
           <div/>
           */}

        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col items-center justify-center gap-4  lg:gap-4">
          <div className="sm:w-[500px] text-lg  sm:text-xl text-center">
            We offer custom pricing tailored to the scale and complexity
             of your project, with options across multiple quality tiers. 
             Just schedule a quick call using the button below, 
             and we&rsquo;ll give you an exact quote.
          </div>
          <div>
            <RainbowButton
              className="mt-4 w-full"
              onClick={() => setShowDemo(true)}
            >
              Get Price
            </RainbowButton>
          </div>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </section>
  );
}
