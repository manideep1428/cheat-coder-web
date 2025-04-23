"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
  limited?: boolean;
}

export function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Limited Offer",
      price: "₹19",
      description: "For new users",
      features: [
        "All Pro features",
        "Valid only for new users",
        "3 requests",
        "Valid for one time only",
        "Special price for first 2 days",
      ],
      cta: "Unlock Now",
      href: "/signup",
      popular: false,
      limited: true,
    },
    {
      name: "Starter",
      price: "₹199",
      description: "One-time payment",
      features: [
        "All Pro features",
        "25 requests",
        "No extra requests",
        "Email support",
      ],
      cta: "Start now",
      href: "/signup",
    },
    {
      name: "Pro",
      price: "₹599",
      description: "One-time payment",
      features: [
        "Full access to all features",
        "Unlimited interviews",
        "Support for all platforms",
        "Advanced language models",
        "Email support",
      ],
      cta: "Go Pro",
      href: "/signup",
      popular: true,
    },
  ];

  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col p-6 border ${
                plan.popular ? "border-primary/20" : plan.limited ? "border-yellow-400" : "border-zinc-800"
              } rounded-xl bg-zinc-900/50 overflow-hidden`}
            >
              {plan.limited && (
                <div className="absolute left-0 top-0">
                  <div className="text-xs font-bold bg-yellow-400 text-black px-4 py-1 rounded-br-lg animate-pulse">
                    LIMITED OFFER
                  </div>
                </div>
              )}
              {plan.popular && (
                <div className="absolute right-0 top-0">
                  <div className="text-xs text-black font-medium bg-primary px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  { plan.price == "₹19" ? <span> for 2 days </span> : <span>/month</span> }
                  <span className="text-sm text-zinc-400">{plan.description}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={`${plan.name}-feature-${i}`} className="flex items-center gap-2">
                    <span className="flex-shrink-0 text-green-500">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className="mt-auto">
                <Button
                  className={plan.popular ? "btn-yellow w-full" : "w-full"}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
