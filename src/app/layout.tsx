import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'RoboLearn | Explora el Mundo de la Robótica',
  description: 'Un sitio web educativo sobre robótica, con una galería de robots y un explorador interactivo de sus partes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
