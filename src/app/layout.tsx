import "@/app/globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import HeaderSwitcher from "@/components/HeaderSwitcher"; // <-- add

export const metadata: Metadata = {
  title: "GP",
  description: "A GP-inspired higher-ed website in Next.js",
  metadataBase: new URL("https://example.edu"),
  other: {
    "google-fonts":
      "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <HeaderSwitcher />              {/* <-- swaps HomeHeader vs Header */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
