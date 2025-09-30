import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apply Trail",
  description: "Job application trail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900">
          <header className="w-full max-w-6xl flex justify-between items-center p-6">
            <Image src="/applytrail-logo.png" width={100} height={50} alt="ApplyTrail" />
            <nav className="flex gap-6">
              <a href="#features" className="hover:text-blue-600">
                Features
              </a>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
              <Link
                href="/signup"
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign up
              </Link>
              <Link
                href="/signin"
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign in
              </Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
