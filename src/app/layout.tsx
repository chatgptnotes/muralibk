import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Murali BK - Orthopedic Surgeon & Founder of Hope Hospital, Nagpur",
  description: "Dr. Murali BK is a renowned orthopedic surgeon, joint replacement specialist, and spine surgeon. Founder and Managing Director of Hope Hospital, a NABH-accredited multispecialty hospital in Nagpur.",
  keywords: "Dr. Murali BK, orthopedic surgeon, joint replacement, spine surgeon, Hope Hospital, Nagpur, orthopedic specialist",
  authors: [{ name: "Dr. Murali BK" }],
  openGraph: {
    title: "Dr. Murali BK - Orthopedic Surgeon & Founder of Hope Hospital",
    description: "Renowned orthopedic surgeon and founder of Hope Hospital, Nagpur. Specializing in joint replacements, spine surgeries, and advanced orthopedic care.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
