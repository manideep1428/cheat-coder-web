"use client";

import Image from "next/image";

export function ProofSection() {
  return (
    <section className="py-16 md:py-24" id="proof">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proof</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            See Cheat Coder in action. Our technology is designed to be completely undetectable during interviews while providing powerful assistance.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
            <Image
              src="https://ext.same-assets.com/3990742620/849522504.jpeg"
              alt="Cheat Coder in action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-4">
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

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Complete Undetectability</h3>
              <p className="text-zinc-400">
                Cheat Coder uses advanced technology to remain invisible during screen sharing sessions.
                It's designed to work seamlessly with all major interview platforms, including LeetCode, HackerRank, and CodeSignal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Real-time Assistance</h3>
              <p className="text-zinc-400">
                Get instant algorithm suggestions, code snippets, and problem-solving approaches during your interviews.
                The AI analyzes the problem in real-time and provides tailored solutions to help you ace your interview.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Regularly Updated</h3>
              <p className="text-zinc-400">
                Our team continuously updates Cheat Coder to ensure compatibility with the latest versions of interview platforms.
                We monitor changes to detection systems and adapt our technology accordingly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500 italic">
            Cheat Coder is intended to be used as a learning aid and practice tool.
            We encourage users to develop their skills and use our tool responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}
