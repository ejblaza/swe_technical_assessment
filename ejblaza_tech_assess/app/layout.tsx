
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tummala Technical Assessment - Elias Blaza",
  description: "Tummala Technical Assessment - Elias Blaza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="site-header">
        <nav className="navbar">
          <div className="brandlogo">
            <Link href={"/"}><h2>Tummala Motors</h2></Link>
          </div>
          <div className="navbar-nav">
            <ul className="uldefaultsnone mainmenu">
              <li className="navitem">Buy/Sell</li>
              <li className="navitem">Categories</li>
              <li className="navitem">Contact</li>
            </ul>
          </div>
        </nav>
      </header>
        {children}
      </body>
    </html>
  );
}
