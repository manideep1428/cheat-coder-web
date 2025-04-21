import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DownloadIcon } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 pt-24 pb-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Download Cheat Coder</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Get the latest version of Cheat Coder for your operating system. Our application is designed to be lightweight, efficient, and completely undetectable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* macOS Download */}
            <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-zinc-800 p-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM13.462 17.986C13.344 18.188 13.209 18.385 13.059 18.569C12.847 18.82 12.663 19.009 12.509 19.131C12.274 19.321 12.02 19.42 11.744 19.429C11.542 19.429 11.297 19.375 11.011 19.265C10.723 19.155 10.453 19.102 10.201 19.102C9.936 19.102 9.659 19.155 9.37 19.265C9.08 19.375 8.847 19.432 8.67 19.437C8.405 19.448 8.145 19.345 7.891 19.131C7.725 18.998 7.528 18.795 7.301 18.524C7.059 18.236 6.857 17.904 6.695 17.529C6.523 17.127 6.376 16.697 6.255 16.24C6.125 15.749 6.06 15.274 6.06 14.814C6.06 14.276 6.149 13.808 6.326 13.409C6.464 13.085 6.657 12.819 6.906 12.611C7.155 12.402 7.436 12.297 7.749 12.291C7.962 12.291 8.224 12.353 8.535 12.474C8.845 12.596 9.047 12.657 9.14 12.657C9.208 12.657 9.442 12.585 9.839 12.443C10.215 12.311 10.536 12.254 10.802 12.272C11.371 12.308 11.812 12.505 12.125 12.867C11.614 13.178 11.363 13.614 11.373 14.174C11.382 14.609 11.536 14.968 11.837 15.251C11.974 15.383 12.129 15.489 12.303 15.571C12.234 15.771 12.16 15.965 12.079 16.152C11.92 16.533 11.759 16.875 11.597 17.178C11.382 17.575 11.193 17.865 11.028 18.049C10.812 18.295 10.582 18.421 10.336 18.429C10.14 18.438 9.895 18.378 9.601 18.251C9.307 18.123 9.019 18.06 8.736 18.06C8.474 18.06 8.179 18.124 7.85 18.251C7.522 18.378 7.263 18.439 7.075 18.439C6.841 18.438 6.645 18.316 6.485 18.07L6.485 18.069C6.401 17.975 6.29 17.811 6.29 17.811C5.708 16.812 5.417 15.856 5.417 14.941C5.417 14.137 5.635 13.44 6.071 12.849C6.396 12.392 6.821 12.032 7.343 11.768C7.866 11.504 8.425 11.367 9.019 11.357C9.398 11.357 9.84 11.455 10.348 11.647C10.854 11.84 11.2 11.936 11.386 11.936C11.53 11.936 11.908 11.825 12.517 11.602C13.08 11.399 13.553 11.318 13.935 11.361C14.901 11.465 15.623 11.858 16.102 12.542C15.234 13.052 14.806 13.798 14.815 14.774C14.823 15.527 15.077 16.146 15.578 16.628C15.817 16.858 16.078 17.032 16.362 17.151C16.302 17.324 16.238 17.49 16.169 17.652C16.01 18.032 15.827 18.412 15.622 18.794C15.432 19.142 15.274 19.41 15.15 19.598C14.962 19.879 14.766 20.078 14.554 20.185C14.33 20.306 14.08 20.372 13.802 20.384C13.559 20.396 13.295 20.335 13.011 20.199C12.726 20.063 12.454 19.995 12.196 19.995C11.948 19.995 11.671 20.064 11.363 20.199C11.056 20.335 10.813 20.399 10.633 20.399C10.366 20.394 10.122 20.327 9.901 20.19L9.901 20.19C9.682 20.052 9.498 19.863 9.35 19.631L9.349 19.63C9.197 19.394 9.062 19.133 8.945 18.848C9.258 18.655 9.52 18.409 9.732 18.11C10.08 17.627 10.327 17.084 10.473 16.481C10.616 15.887 10.692 15.26 10.7 14.601C10.71 13.817 10.588 13.111 10.336 12.483C10.086 11.864 9.764 11.353 9.369 10.949C9.068 10.646 8.77 10.418 8.479 10.269C8.296 10.178 8.062 10.106 7.78 10.051C8.042 9.392 8.454 8.833 9.014 8.376C9.671 7.849 10.392 7.58 11.178 7.57C11.665 7.57 12.173 7.675 12.702 7.884C13.23 8.094 13.627 8.199 13.893 8.199C14.102 8.199 14.481 8.083 15.032 7.853C15.556 7.638 15.999 7.544 16.361 7.57C17.052 7.61 17.65 7.781 18.158 8.085C18.474 8.271 18.787 8.528 19.099 8.854C18.786 9.073 18.518 9.322 18.298 9.601C17.88 10.102 17.588 10.7 17.422 11.397C17.255 12.095 17.201 12.779 17.26 13.449C17.307 14.022 17.417 14.535 17.588 14.988C17.76 15.44 17.969 15.836 18.214 16.176C18.459 16.517 18.716 16.785 18.985 16.984C19.168 17.113 19.396 17.225 19.669 17.324C19.416 17.858 19.177 18.328 18.952 18.735C18.557 19.44 18.204 19.929 17.895 20.201C17.602 20.462 17.325 20.603 17.066 20.625C16.842 20.637 16.557 20.574 16.209 20.438C15.861 20.301 15.55 20.233 15.276 20.233C15.022 20.233 14.713 20.302 14.348 20.438C13.98 20.569 13.714 20.647 13.551 20.67C13.322 20.693 13.09 20.613 12.854 20.429C12.618 20.245 12.421 20.01 12.263 19.724C12.105 19.438 11.947 19.131 11.79 18.804C11.685 18.59 11.561 18.302 11.418 17.939L13.462 17.986Z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">macOS</h2>
              </div>
              <p className="text-zinc-400 mb-6 flex-1">
                Compatible with macOS 11.0 (Big Sur) and later. Our app is designed to be completely invisible during screen sharing sessions.
              </p>
              <div className="mt-auto">
                <div className="flex flex-col space-y-2">
                  <Button className="btn-yellow rounded-full gap-2 w-full">
                    <DownloadIcon className="h-4 w-4" />
                    Download for macOS (Intel)
                  </Button>
                  <Button className="btn-yellow rounded-full gap-2 w-full">
                    <DownloadIcon className="h-4 w-4" />
                    Download for macOS (Apple Silicon)
                  </Button>
                </div>
                <p className="text-xs text-zinc-500 mt-3 text-center">Version 2.4.3 • April 14, 2025</p>
              </div>
            </div>

            {/* Windows Download */}
            <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-zinc-800 p-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.25L10.67 3.08V11.25H2V4.25ZM10.67 12.75V20.92L2 19.75V12.75H10.67ZM12.17 2.93L22 1.42V11.25H12.17V2.93ZM22 12.75V22.58L12.17 21.07V12.75H22Z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Windows</h2>
              </div>
              <p className="text-zinc-400 mb-6 flex-1">
                Compatible with Windows 10 and 11. Our application runs silently in the background and remains hidden during interviews.
              </p>
              <div className="mt-auto">
                <Button className="btn-yellow rounded-full gap-2 w-full">
                  <DownloadIcon className="h-4 w-4" />
                  Download for Windows
                </Button>
                <p className="text-xs text-zinc-500 mt-3 text-center">Version 2.4.3 • April 14, 2025</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-zinc-800">
            <h2 className="text-xl font-semibold text-center mb-6">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-2">macOS</h3>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                  <li>macOS 11.0 (Big Sur) or later</li>
                  <li>4GB RAM</li>
                  <li>100MB free disk space</li>
                  <li>Internet connection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Windows</h3>
                <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                  <li>Windows 10 or 11</li>
                  <li>4GB RAM</li>
                  <li>100MB free disk space</li>
                  <li>Internet connection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-4">
              Need help with installation or have questions?
            </p>
            <Link href="/help">
              <Button variant="outline" className="px-4 py-2 bg-zinc-900 border-zinc-700">
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
