import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Script from "next/script";
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
        {/*
          Netlify Identity Widget — must load with beforeInteractive so it
          catches #confirmation_token / #recovery_token / #invite_token hashes
          before the page finishes hydrating.
        */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">{`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function(user) {
              if (!user) {
                window.netlifyIdentity.on("login", function() {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}</Script>
      </body>
    </html>
  );
}
