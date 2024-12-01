import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisScrollProvider from "@components/lenis";
import Scene from "@components/scene";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dulce Barros",
  description: "Creative, Photographer",
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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
            pointerEvents: "none",
          }}
        >
          <Scene />
        </div>

        <LenisScrollProvider>
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
