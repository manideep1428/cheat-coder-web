import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar - Desktop only */}
        <aside className="hidden md:block w-72 relative">
          <div className="h-screen sticky top-0 overflow-y-auto border-r border-zinc-800/50 bg-black/20 backdrop-blur-xl">
            <div className="flex flex-col h-full p-4">
              <Link href="/" className="flex space-x-2 items-center mb-6">
                <Image
                  src="/logo-a.png"
                  alt="Cheat Coder Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="font-bold text-white">Cheat Coder</span>
              </Link>

              <div className="grow">
                <div className="space-y-6">
                  <div className="relative mb-6">
                    <button className="w-full flex items-center">
                      <input
                        type="text"
                        placeholder="Search documentation"
                        className="w-full pl-8 sm:pl-9 pr-16 py-1.5 sm:py-2 bg-zinc-900/50 border border-zinc-800/50 rounded-lg sm:rounded-xl text-[13px] sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                        readOnly
                      />
                      <div className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 flex gap-1">
                        <span className="bg-zinc-800 px-1.5 py-1 rounded text-[9px] sm:text-[10px] leading-none text-zinc-400">⌘</span>
                        <span className="bg-zinc-800 px-1.5 py-1 rounded text-[9px] sm:text-[10px] leading-none text-zinc-400">K</span>
                      </div>
                    </button>
                  </div>

                  <div className="mb-6">
                    <Link href="/signin" className="flex items-center gap-2 text-[#989898] hover:text-white transition-colors">
                      <Button className="w-full btn-yellow rounded-full">
                        Sign in with Cheat Coder
                      </Button>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[13px] font-medium text-muted-foreground px-3 mb-2">General</h3>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors bg-zinc-800/50 text-zinc-100 font-medium">
                        Getting Started
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Basic Checks
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Language Configuration
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Undetectability
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-[13px] font-medium text-muted-foreground px-3 mb-2">Account and Subscription</h3>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Cancel Subscription
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Refund Policy
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-[13px] font-medium text-muted-foreground px-3 mb-2">Troubleshooting</h3>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Can't see screen
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Shows when I share screen
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30">
                        Screen share permissions
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-[13px] font-medium text-muted-foreground px-3 mb-2">Support</h3>
                      <div className="px-3 py-2 text-[13px] text-zinc-400 space-y-2">
                        <div>
                          <p>972-273-9630</p>
                          <p>support@interviewcoder.co</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="border-t border-zinc-800/50 pt-6">
                  <p className="text-xs text-zinc-500 text-center">© 2025 Cheat Coder. All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile header */}
        <div className="fixed md:hidden w-full top-0 left-0 border-b border-zinc-800/50 bg-black/20 backdrop-blur-xl z-50 mt-16">
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-a.png"
                alt="Cheat Coder Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="font-bold text-white">Help</span>
            </Link>
            <button className="p-2" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 px-8 py-12 lg:px-12 lg:py-16 mt-16 md:mt-0">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              {/* Getting Started Section */}
              <div id="getting-started">
                <div className="border-b border-zinc-800 pb-8 mb-8">
                  <h1 className="text-2xl font-medium tracking-tight">Getting Started</h1>
                  <p className="mt-2 text-zinc-400 text-sm">
                    Welcome to Cheat Coder. This guide will help you get up and running quickly.
                  </p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="rounded-xl border bg-linear-to-r border-zinc-800/50 from-zinc-900/50 to-zinc-800/30 p-6">
                    <h2 className="text-base font-medium mt-0 text-zinc-200">Quick Start Guide</h2>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">1</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Download the Cheat Coder app</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            Download from <Link href="/" className="text-primary hover:underline">our website</Link>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">2</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Install the application</div>
                          <div className="mt-1 text-sm text-zinc-400">Move the app into your Applications folder</div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">3</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Create an account</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            Sign up or log in on the InterviewCoder website and subscribe
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">4</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Launch and sign in</div>
                          <div className="mt-1 text-sm text-zinc-400">Open the app and log in with your account</div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">5</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Configure your preferences</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            Set your language preferences (Python, Java, JavaScript, etc.) in the
                            <Link href="/settings" className="text-primary hover:underline ml-1">settings</Link> page or in the app
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">6</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">All done</div>
                          <div className="mt-1 text-sm text-zinc-400">Start acing your technicals!</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-linear-to-r border-zinc-800/50 from-zinc-900/50 to-zinc-800/30 p-6 mt-8">
                    <h2 className="text-base font-medium mt-0 text-zinc-200">How to Use</h2>

                    <div className="relative aspect-video mt-6 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                        <div className="rounded-full bg-black/60 p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-primary"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic Checks Section */}
              <div id="basic-checks">
                <div className="border-b border-zinc-800 pb-8 mb-8">
                  <h1 className="text-2xl font-medium tracking-tight">Basic Checks</h1>
                  <p className="mt-2 text-zinc-400 text-sm">
                    Verify if Cheat Coder works on your system before subscribing.
                  </p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="rounded-xl border bg-linear-to-r border-zinc-800/50 from-zinc-900/50 to-zinc-800/30 p-6">
                    <h2 className="text-base font-medium mt-0 text-zinc-200">Quick Verification Steps</h2>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">1</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Download the free app</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            Download the free Cheat Coder application from our website
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">2</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Share your full screen on Google Meet</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            Start a Google Meet call and share your full screen
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-none">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs">3</div>
                        </div>
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Check visibility</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            If you can see the application while screen sharing, then it doesn't work on your system (Mac only)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}
