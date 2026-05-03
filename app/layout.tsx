import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pridebrainclinic.com'),
  title: {
    default: 'The Pride Brain Clinic | ฟื้นฟู Stroke ชลบุรี — Rehap to Rehappy',
    template: '%s | The Pride Brain Clinic ชลบุรี',
  },
  description:
    'คลินิกฟื้นฟูสมองและระบบประสาท ชลบุรี ภาคตะวันออก เชี่ยวชาญฟื้นฟู Stroke อัมพฤกษ์ อัมพาต กายภาพบำบัด โดยทีมแพทย์เฉพาะทาง — Rehap to Rehappy',
  keywords: [
    'ฟื้นฟู stroke ชลบุรี',
    'คลินิกกายภาพบำบัด stroke ชลบุรี',
    'หมอระบบประสาท ชลบุรี',
    'ศูนย์ฟื้นฟูสมอง ภาคตะวันออก',
    'กายภาพบำบัดที่บ้าน ชลบุรี',
    'The Pride Brain Clinic',
    'คลินิกสมอง ชลบุรี',
  ],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://pridebrainclinic.com',
    siteName: 'The Pride Brain Clinic',
    title: 'The Pride Brain Clinic | ฟื้นฟู Stroke ชลบุรี',
    description:
      'คลินิกฟื้นฟูสมองและระบบประสาท ชลบุรี ภาคตะวันออก เชี่ยวชาญฟื้นฟู Stroke โดยทีมแพทย์เฉพาะทาง',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Pride Brain Clinic ชลบุรี' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pride Brain Clinic | ฟื้นฟู Stroke ชลบุรี',
    description: 'คลินิกฟื้นฟูสมองและระบบประสาท ชลบุรี — Rehap to Rehappy',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://pridebrainclinic.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* FB Pixel */}
        {/* <!-- FB_PIXEL_ID --> */}
        {/* GTM */}
        {/* <!-- GTM_ID --> */}
      </head>
      <body className="font-sarabun bg-pride-cream text-pride-text antialiased">
        {children}
      </body>
    </html>
  )
}
