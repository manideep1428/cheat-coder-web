"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "Is Cheat Coder detectable?",
      answer: "No, Cheat Coder is designed to be completely undetectable. We use advanced techniques to ensure the application isn't visible during screen sharing and remains completely hidden on your system during interviews."
    },
    {
      question: "How do I know it's working?",
      answer: "Before subscribing, you can download our free trial version to verify that it works with your setup. We provide detailed compatibility checks in our help documentation."
    },
    {
      question: "Is this against platform policies?",
      answer: "Cheat Coder is designed as a learning and practice tool to help you improve your coding interview skills. We recommend using it responsibly and in accordance with each platform's terms of service."
    },
    {
      question: "Do I need to install any additional software?",
      answer: "No, Cheat Coder is a standalone application that works right out of the box. You don't need to install any additional software or dependencies."
    },
    {
      question: "How long does the license last?",
      answer: "Our licenses are perpetual - meaning you pay once and own the software forever. This includes all updates within the current major version."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Common Questions</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Get answers to frequently asked questions about Cheat Coder
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="border border-zinc-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
              >
                <span className="font-medium">{item.question}</span>
                <span className="flex-shrink-0 ml-2">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-zinc-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zinc-400" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-sm text-zinc-400 border-t border-zinc-800">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
