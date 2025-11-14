import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Solutions | Expert AI Integration & Automation",
  description: "Transform your business with cutting-edge AI solutions. From intelligent automation to voice assistants and AI agents - we build it all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
