import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Alessa Portfolio",
  description: "Welcome to My Site",
  openGraph: {
    title: "Alessa Portfolio",
    description: "Welcome to My Site",
    images: [
      {
        url: "/assets/images/og.png",
        width: 1200,
        height: 630,
        alt: "Alessa Portfolio",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
