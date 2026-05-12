import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Vipula Hair & Skin Clinic — Vijayawada Dermatology',
  description: 'Dr. Ranganadh & Dr. Rama Charan\'s Vipula Clinic — 35+ years of specialist dermatology, cosmetology, hair and laser treatments in Vijayawada. 4.7★ rated by 1900+ patients.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
   <html lang="en">
  <body>
        {children}
</body>
    </html>
  );
}
