import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexGen CRM",
  description: "NexGen CRM - Next Generation Customer Relationship Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
