import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD offers warm, grounded therapy for adults in Santa Monica, California, specializing in anxiety, panic, trauma, burnout, and perfectionism.",
  keywords: [
    "therapist in Santa Monica",
    "Santa Monica therapist",
    "therapy in Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy Santa Monica",
    "EMDR therapist Santa Monica",
    "therapy for adults California",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
