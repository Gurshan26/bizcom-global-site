import "./globals.css";
import Nav from "@/components/Nav";
import MobileDock from "@/components/MobileDock";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "BizCom Global",
  description: "Global technology distribution for active & passive components.",
  metadataBase: new URL("https://bizcompl.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-dvh font-sans text-[15px] text-slate-800 antialiased bg-white">
        {/* Desktop/tablet sticky nav */}
        <Nav />

        {/* Subtle scroll progress */}
        <ProgressBar />

        {/* Ensure space for the mobile dock */}
        <main className="pb-[4.25rem] md:pb-0">{children}</main>

        {/* Mobile bottom dock */}
        <MobileDock />

        <Footer />
      </body>
    </html>
  );
}