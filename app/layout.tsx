import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZFish - Ultra-Light CLI Framework for Rust",
  description:
    "Beautiful, zero-dependency CLI framework for Rust with colors, progress bars, tables, and more.",
  keywords: [
    "rust",
    "cli",
    "terminal",
    "framework",
    "colors",
    "progress",
    "tables",
    "command line",
    "tui",
    "terminal ui",
    "rust library",
    "zero dependency",
  ],
  authors: [{ name: "JeetKarena", url: "https://github.com/JeetKarena" }],
  creator: "JeetKarena",
  publisher: "JeetKarena",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zfish-devdocs.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZFish - Ultra-Light CLI Framework for Rust",
    description:
      "Beautiful, zero-dependency CLI framework for Rust with colors, progress bars, tables, and more.",
    url: "https://zfish-devdocs.vercel.app",
    siteName: "ZFish",
    images: [
      {
        url: "/og-image.png", // Add this image to public folder (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "ZFish - Ultra-Light CLI Framework for Rust",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZFish - Ultra-Light CLI Framework for Rust",
    description:
      "Beautiful, zero-dependency CLI framework for Rust with colors, progress bars, tables, and more.",
    images: ["/twitter-image.png"], // Add this image to public folder (1200x600 recommended)
    creator: "@user_0xJeet",
    site: "@user_0xJeet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2sfzZqfPovUbU8DvcpJrBUnzZ-98J0xLauxwo5AoLe8",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
