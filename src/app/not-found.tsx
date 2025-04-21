import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center mb-6">
          <h1 className="text-6xl font-bold border-r border-zinc-700 pr-6 mr-6">404</h1>
          <div>
            <h2 className="text-xl">This page could not be found.</h2>
          </div>
        </div>

        <Link href="/">
          <Button className="btn-yellow rounded-full px-6 py-2">
            Go to homepage
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
