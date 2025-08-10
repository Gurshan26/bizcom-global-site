import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "BizCom Global", template: "%s — BizCom Global" },
  description: "Global technology distributor for active and passive electronic components.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "BizCom Global",
    description: "Trusted global distribution of electronic components.",
    url: "https://www.example.com",
    siteName: "BizCom Global",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container my-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
