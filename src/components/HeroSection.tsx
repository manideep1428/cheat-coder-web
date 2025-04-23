"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSession } from "next-auth/react";


export function HeroSection() {
  const session = useSession();
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background diagonal effect */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#17171700_1px,transparent_1px),linear-gradient(to_bottom,#17171700_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          AI for Leetcode Interviews
        </h1>
        <p className="m-4">Truly Copied from <Link className="text-blue-500" href={"https://www.interviewcoder.co/"}>Interview Coder</Link></p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
         { session.data?.user ? (
          <Link href="/api-keys">
            <Button className="btn-yellow rounded-full px-6 py-6 text-base">
              Get Access Key
            </Button>
          </Link>
        ) : (
          <Link href="/signup">
            <Button className="btn-yellow rounded-full px-6 py-6 text-base">
              Get Started
            </Button>
          </Link>
        )}
          <Link href="/download">
            <Button variant="outline" className="rounded-full px-6 py-6 text-base border-zinc-800 hover:bg-zinc-800/30">
              Download app
            </Button>
          </Link>
        </div>

        {/* Demo preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              poster="https://ext.same-assets.com/3990742620/341526836.jpeg"
            >
              <source src="https://ext.same-assets.com/3990742620/1832397839.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="https://ext.same-assets.com/3990742620/3307244132.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
