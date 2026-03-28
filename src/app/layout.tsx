import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ChatBot } from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gomsang.dev | Gomsang 포트폴리오",
  description: "곰처럼 우직한 개발자 gomsang의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <ChatBot />
        <footer className="border-t py-8 px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gomsang. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
