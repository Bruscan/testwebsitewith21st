import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrueForm AI - AI Body Scanner & Fitness Coach",
  description: "Scan your physique, get AI coaching, and transform your body with personalized workout plans. Download TrueForm AI now.",
  other: {
    "apple-itunes-app": "app-id=6745799401",
  },
};

export default function TrueFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
