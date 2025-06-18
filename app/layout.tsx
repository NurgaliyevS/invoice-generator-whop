import { Geist, Geist_Mono } from "next/font/google";
import { WhopApp } from "@whop/react/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invoice Generator",
  description: "Create professional invoices quickly and easily for your Whop business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <WhopApp>{children}</WhopApp>
      </body>
    </html>
  );
}
