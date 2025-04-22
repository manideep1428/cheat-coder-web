"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AvatarMenu } from "@/components/AvatarMenu";
import { SignInButton, SignUpButton, useAuth, UserProfile } from "@clerk/nextjs";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50">
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full select-none ${
          scrolled ? "frosted-glass" : "bg-transparent"
        }`}
        style={{
          minWidth: "990px",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 0 10px rgba(0,0,0,0.1)" : "none",
          width: "100%",
          transform: "translateY(10px)"
        }}
      >
        <Link
          href="/"
          className="z-100 text-white hover:text-white/80 transition-colors flex items-center gap-2 shrink-0"
        >
          <Image
            src="/logo-a.png"
            alt="Cheat Coder Logo"
            width={24}
            height={24}
            className="h-8 w-8"
          />
          <span className="text-sm font-semibold transition-opacity duration-200 md:block hidden" style={{opacity: "100%"}}>
            Cheat Coder
          </span>
        </Link>

        <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
          <Link href="/#proof" className="navbar-item">
            <span className="relative z-20 flex items-center">Proof</span>
          </Link>
          <Link href="/help" className="navbar-item">
            <span className="relative z-20 flex items-center">Help</span>
          </Link>
          <Link href="/#pricing" className="navbar-item">
            <span className="relative z-20 flex items-center">Pricing</span>
          </Link>
          <Link href="/still_working" className="navbar-item">
            <span className="relative z-20 flex items-center">
              Does it work?
              <div className="badge-new">NEW</div>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
         { !isSignedIn ?  (
          <div className="flex gap-2">
             <Button
           className="btn-yellow rounded-full px-6 py-1.5 text-sm"
         >
           <SignInButton />
         </Button>
         <Button className="btn-yellow rounded-full px-6 py-1.5 text-sm">
           <SignUpButton />
         </Button>
            </div>
         ) : 
         <AvatarMenu />
          }
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`flex relative flex-col lg:hidden w-full justify-between items-center ${
          scrolled ? "frosted-glass" : "bg-transparent"
        } max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50`}
        style={{
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 0 10px rgba(0,0,0,0.1)" : "none",
          width: "100%",
          borderRadius: "2rem",
          paddingRight: "0px",
          paddingLeft: "0px",
          transform: "none"
        }}
      >
        <div className="flex flex-row justify-between items-center w-full px-4">
          <Link
            href="/"
            className="z-100 text-white hover:text-white/80 transition-colors flex items-center gap-2 shrink-0"
          >
            <Image
              src="/logo-a.png"
              alt="Cheat Coder Logo"
              width={24}
              height={24}
              className="h-8 w-8"
            />
            <span className="text-sm font-semibold transition-opacity duration-200 md:block hidden" style={{opacity: "100%"}}>
              Cheat Coder
            </span>
          </Link>
          <div>
            <button
              className="size-6 fill-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="w-full px-4 py-2 frosted-glass mt-2 flex flex-col space-y-2">
            <Link href="/#proof" className="navbar-item py-3 text-center">
              Proof
            </Link>
            <Link href="/help" className="navbar-item py-3 text-center">
              Help
            </Link>
            <Link href="/#pricing" className="navbar-item py-3 text-center">
              Pricing
            </Link>
            <Link href="/still_working" className="navbar-item py-3 text-center">
              Does it work? <span className="badge-new">NEW</span>
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/signin" className="w-full">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link href="/signup" className="w-full">
                <Button className="btn-yellow w-full">Sign up</Button>
              </Link>
              <div className="flex justify-center pt-2">
                <AvatarMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
