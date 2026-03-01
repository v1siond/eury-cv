import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSiteConfig } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eurymar Bustillo — Integración Neuro-Motora Online",
  description:
    "Programa online mensual de integración neuro-motora para niños con reflejos primitivos retenidos y evaluación funcional para adultos. Especialista en desarrollo neuromotor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = getSiteConfig();

  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-bg text-dark`}
      >
        <Navbar
          professionalName={siteConfig.professional_name}
          whatsappNumber={siteConfig.whatsapp_number}
        />
        {children}
        <Footer siteConfig={siteConfig} />
      </body>
    </html>
  );
}
