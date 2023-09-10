import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "BrandOn | Marketing | Advertising agency",
  description: "Branding, SEO, Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
