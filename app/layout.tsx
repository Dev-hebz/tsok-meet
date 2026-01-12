import type { Metadata } from 'next';
import './globals.css';
import RegisterServiceWorker from '@/components/RegisterServiceWorker';

export const metadata: Metadata = {
  title: 'TSOK-Meet - Teachers Specialists Video Conference',
  description: 'Professional video conferencing platform for TSOK officers meetings, general meetings, and online reviews',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-512x512.png',
  },
  themeColor: '#2563eb',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TSOK-Meet',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TSOK-Meet" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
      </head>
      <body>
        <RegisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
