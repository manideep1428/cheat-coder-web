"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo-a.png"
                  alt="Cheat Coder Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">Cheat Coder</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              AI-powered assistant for technical interviews. Get real-time coding help during your Leetcode interviews.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2025 Cheat Coder. All rights reserved</p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-sm text-gray-400 hover:text-white transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/still_working" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Compatibility
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@interviewcoder.co"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Join thousands of engineers acing their interviews
          </p>
          <Link href="/signup">
            <Button className="btn-yellow rounded-full px-6 py-1.5">
              Try for free
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
