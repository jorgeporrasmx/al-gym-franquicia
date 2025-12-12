import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AL GYM Franquicia - Gimnasios 24/7 con Tecnologia de Vanguardia",
  description: "Franquicia de gimnasios 24/7 completamente automatizados. Inversion desde $250,000 MXN con financiamiento pre-aprobado. +15 anos de experiencia en el sector fitness.",
  keywords: "franquicia gimnasio, AL GYM, gimnasio 24/7, franquicia fitness, inversion gimnasio Mexico, gimnasio automatizado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
