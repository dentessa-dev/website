import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dentessa - Dental Clinic and Implant Centre",
  description: "Dr. Daksh M - BDS, MDS-Oral Physician & Maxillofacial Radiologist. Advanced dental care and implant solutions in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
