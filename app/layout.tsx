import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const opensans = Open_Sans({ subsets: ["latin"] });
const myFont = localFont({src: "../public/GeneralSans-Medium.woff2" })

export const metadata: Metadata = {
  title: "Claude Job Preview",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
