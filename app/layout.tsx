import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/landing-page/navbar";
import Footer from "@/components/landing-page/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VirtuStay - Virtual Property Tours & Smart Booking System",
  description: "Experience properties in a new dimension with VirtuStay's virtual tours, smart booking, and AI-powered insights.",
};

export default function RootLayout({ children,}: { children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
