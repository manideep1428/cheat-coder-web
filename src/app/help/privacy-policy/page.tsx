import React, { useState } from "react";
import { Footer } from "@/components/Footer";

const privacySections = [
  {
    title: "Introduction",
    content:
      "Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.",
  },
  {
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, and usage data to provide and improve our services.",
  },
  {
    title: "How We Use Information",
    content:
      "We use your information to operate, maintain, and enhance our services, as well as to communicate with you.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy, please contact our support team.",
  },
];

export default function PrivacyPolicyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 container max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="space-y-4">
          {privacySections.map((section, index) => (
            <div key={section.title} className="border border-zinc-800 rounded-lg bg-zinc-900">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-t-lg"
                onClick={() => toggleSection(index)}
                aria-expanded={openIndex === index}
              >
                <span>{section.title}</span>
                <span className="ml-2">
                  {openIndex === index ? (
                    <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                  ) : (
                    <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-zinc-300 border-t border-zinc-800">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
