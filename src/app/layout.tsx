import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000133",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arya Patle | Machine Learning & Software Development",
  description:
    "Personal developer portfolio of Arya Patle. Computer Science and Engineering student specializing in Machine Learning, Natural Language Processing, text classification, and Python software development.",
  keywords: [
    "Arya Patle",
    "Machine Learning",
    "Python Developer",
    "NLP",
    "Text Classification",
    "Fraud Detection",
    "Scikit-Learn",
    "Data Science Portfolio",
    "Computer Science Student"
  ],
  authors: [{ name: "Arya Patle" }],
  creator: "Arya Patle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/aryapatle123/CODESOFT",
    title: "Arya Patle | Machine Learning & Software Development",
    description:
      "Computer Science student building intelligent software solutions with Python, Machine Learning, and Natural Language Processing.",
    siteName: "Arya Patle Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#000133] text-[#FCF1D1] antialiased selection:bg-[#1C3670] selection:text-[#FCF1D1]">
        {children}
      </body>
    </html>
  );
}
