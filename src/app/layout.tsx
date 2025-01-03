import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./auth-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ResponsiveAppBar from "@/components/header-mui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Movie App",
  description: "A personal movie watchlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-5xl mx-auto`}
      >
        <AppRouterCacheProvider>
          <AuthProvider>
            <Toaster position="top-right" />
            <ResponsiveAppBar />
            {children}
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
