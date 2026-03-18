import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Prime Promenade – Many Experiences",
  description:
    "A premium four-floor lifestyle destination seamlessly blending fitness, wellness, business, and modern luxury experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins bg-white text-black overflow-x-hidden`}
      >
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <ContactSection />
      </body>
    </html>
  );
}
