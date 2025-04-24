"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Keyboard } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 border-t border-zinc-800/50">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Keyboard className="h-8 w-8 text-primary" />
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Take the short way.
          </h2>

          <p className="text-zinc-400 mb-8 text-lg">
            Join thousands of engineers using Interview Coder to excel in their technical interviews.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <Button className="btn-yellow rounded-full px-8 py-6 text-base">
                Get the App
              </Button>
            </Link>
            <Link href="/download">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-zinc-800 hover:bg-zinc-800/30">
                Download app
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
