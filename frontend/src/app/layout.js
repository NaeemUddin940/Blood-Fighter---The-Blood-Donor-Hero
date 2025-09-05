import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BloodFighterContextProvider } from "@/Context/BloodFighter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blood Fighter",
  description: "A platform for blood donation and management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Remix Icon Link */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BloodFighterContextProvider>
          <Header />
          {children}
          <BottomNavigation />
        </BloodFighterContextProvider>
      </body>
    </html>
  );
}
