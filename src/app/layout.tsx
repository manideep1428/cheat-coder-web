import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Link } from "lucide-react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cheat Coder - AI Assistant for Technical Interviews",
  description: "Cheat Coder is an AI-powered tool designed specifically for Leetcode interviews. Get real-time coding assistance and improve your technical interview performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <link rel="icon" href="/favico.ico" type="image/x-icon" />
      </Head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
