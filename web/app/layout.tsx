import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const dangsik = localFont({
  src: "../fonts/DANGSIKDEMO-BF673ef8f770e37.otf",
  variable: "--font-dangsik",
  weight: "100 900",
});
const pocahontas = localFont({
  src: "../fonts/Pocahontas.ttf",
  variable: "--font-pocahontas",
  weight: "100 900",
});
const newyear = localFont({
  src: "../fonts/NewyearGoo.otf",
  variable: "--font-newyear",
  weight: "100 900",
});
const halimount = localFont({
  src: "../fonts/Halimount.otf",
  variable: "--font-halimount",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JJX",
  description: "Jungle Jumper Extreme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dangsik.variable} ${pocahontas.variable} ${newyear.variable} ${halimount.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
