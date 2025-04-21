import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DoesItWorkSection } from "@/components/DoesItWorkSection";

export default function StillWorkingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-20">
        <DoesItWorkSection />
      </div>

      <Footer />
    </div>
  );
}
