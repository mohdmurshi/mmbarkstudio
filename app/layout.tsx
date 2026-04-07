import type { Metadata , Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mmbarkstudio.vercel.app"),
  title: "MMBARKSTUDIO | Murshid",
  description: "A Kerala-based filmmaker and editor redefining the digital frame.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MMBARK",
  },
  openGraph: {
    title: "MMBARKSTUDIO | Murshid",
    description: "A Kerala-based filmmaker and editor redefining the digital frame.",
    url: "https://mmbarkstudio.vercel.app",
    siteName: "MMBARK",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // Using the icon we know is in your public folder
        width: 512,
        height: 512,
        alt: "MMBARK Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${headingFont.variable} ${monoFont.variable} bg-black text-white antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(100,180,255,0.12),transparent_25%),linear-gradient(to_bottom,#070707,#0a0a0a_40%,#111_100%)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}