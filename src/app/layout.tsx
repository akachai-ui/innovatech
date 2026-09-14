import type { Metadata, Viewport } from 'next';
import './globals.css';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import AnalyticsTracker from '@/components/AnalyticsTracker';

export const viewport: Viewport = {
  themeColor: '#080d14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://innovatech.app'),
  title: 'InnovaTech Solutions | บริษัทรับทำเว็บไซต์ & พัฒนาซอฟต์แวร์ระดับ Enterprise',
  description: 'InnovaTech Solutions ผู้เชี่ยวชาญด้านการพัฒนา Custom Web Applications, ออกแบบ UX/UI Design, Cloud Architecture และระบบธุรกิจครบวงจร ส่งมอบงานตรงเวลา เป็นเจ้าของ Source Code 100%',
  keywords: [
    'รับทำเว็บไซต์',
    'รับพัฒนาเว็บแอปพลิเคชัน',
    'Custom Web Application',
    'Enterprise Software Development',
    'UX UI Design Bangkok',
    'ระบบ ERP POS',
    'Next.js Web Developer Thailand',
    'InnovaTech Solutions'
  ],
  authors: [{ name: 'InnovaTech Solutions Team' }],
  creator: 'InnovaTech Solutions',
  publisher: 'InnovaTech Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://innovatech.app',
    siteName: 'InnovaTech Solutions',
    title: 'InnovaTech Solutions | บริษัทรับทำเว็บไซต์ & พัฒนาซอฟต์แวร์ระดับ Enterprise',
    description: 'พัฒนา Custom Web Applications, ออกแบบ UX/UI ยุคใหม่, สถาปัตยกรรมระบบ Cloud ที่มีความเสถียรสูง ส่งมอบกรรมสิทธิ์ Source Code 100% พร้อมรับประกันดูแลตลอดสัญญา',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InnovaTech Solutions - Custom Web Applications & Enterprise Software',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InnovaTech Solutions | บริษัทรับทำเว็บไซต์ & พัฒนาซอฟต์แวร์ระดับ Enterprise',
    description: 'พัฒนา Custom Web Applications, ออกแบบ UX/UI ยุคใหม่, สถาปัตยกรรมระบบ Cloud มั่นคงปลอดภัย 100%',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth dark">
      <body className="antialiased min-h-screen selection:bg-[#2bccaf] selection:text-slate-950">
        {/* Analytics & Pixel Tracking (GA4 & Meta Pixel) */}
        <AnalyticsTracker />

        {/* Main Page Content */}
        {children}

        {/* Global Floating Quick Contact Widget */}
        <FloatingContactWidget />
      </body>
    </html>
  );
}
