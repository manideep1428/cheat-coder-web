"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CompatibilityItem {
  platform: string;
  compatibility: "Full" | "Partial" | "Coming Soon" | "Not Compatible";
}

export function DoesItWorkSection() {
  const compatibilityData: CompatibilityItem[] = [
    { platform: "HackerRank", compatibility: "Full" },
    { platform: "CodeSignal", compatibility: "Full" },
    { platform: "LeetCode", compatibility: "Full" },
    { platform: "Codility", compatibility: "Full" },
    { platform: "Microsoft Teams", compatibility: "Full" },
    { platform: "Google Meet", compatibility: "Full" },
  ];

  function getCompatibilityBadge(status: CompatibilityItem["compatibility"]) {
    switch (status) {
      case "Full":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-950 text-green-400">Compatible</span>;
      case "Partial":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-950 text-yellow-400">Partial</span>;
      case "Coming Soon":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-400">Coming Soon</span>;
      case "Not Compatible":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-950 text-red-400">Not Compatible</span>;
      default:
        return null;
    }
  }

  return (
    <section className="py-16 md:py-24" id="still-working">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Does it still work?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Yes, Interview Coder is fully functional and compatible with all major technical interview platforms. We regularly update our software to ensure it remains undetectable and effective.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Latest Update</h3>
            <span className="text-xs text-zinc-500">April 15, 2025</span>
          </div>
          <p className="text-zinc-400 mb-4">
            Our team continues to monitor all platforms closely. The most recent patch ensures compatibility with the latest LeetCode update and improves performance on HackerRank.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800">
              Release Notes
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-6">Current Compatibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compatibilityData.map((item) => (
              <div key={item.platform} className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg">
                <span className="font-medium">{item.platform}</span>
                {getCompatibilityBadge(item.compatibility)}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            We regularly test our software across all major interview platforms. If you encounter any issues, please <Link href="/help" className="text-primary hover:underline">contact our support team</Link>.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/signup">
            <Button className="btn-yellow rounded-full px-6 py-2">
              Try it free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
