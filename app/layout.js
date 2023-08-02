import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "BrandOn",
  description: " Branding and Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
