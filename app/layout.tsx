import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dreamrealty.in'),
  title: {
    default: 'Dream Realty | Real Estate Consultants in Bengaluru',
    template: '%s | Dream Realty',
  },
  description:
    'Dream Realty is a Bengaluru real estate consultancy for property rentals, buying, selling, property management, home loans, interiors, and new project launches.',
  applicationName: 'Dream Realty',
  keywords: [
    'Dream Realty',
    'Dreamrealty.in',
    'real estate consultant Bengaluru',
    'property rentals Bengaluru',
    'buy property Bengaluru',
    'sell property Bengaluru',
    'property management Bengaluru',
    'Kanakapura Road properties',
    'Bannerghatta Road properties',
    'Provident Park Square',
    'Prestige Falcon City',
  ],
  authors: [{ name: 'Dream Realty' }],
  creator: 'Dream Realty',
  publisher: 'Dream Realty',
  generator: 'Daksh Sharma',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/dream-realty-icon.png',
        type: 'image/png',
        sizes: '360x360',
      },
    ],
    apple: [
      {
        url: '/dream-realty-icon.png',
        type: 'image/png',
        sizes: '360x360',
      },
    ],
  },
  openGraph: {
    title: 'Dream Realty | Real Estate Consultants in Bengaluru',
    description:
      'Find, rent, buy, sell, and manage properties in Bengaluru with Dream Realty. Explore premium listings and new project launches.',
    url: '/',
    siteName: 'Dream Realty',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/Hero_section_images/Provident Park Square.jpg',
        width: 1200,
        height: 630,
        alt: 'Dream Realty Bengaluru property showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dream Realty | Real Estate Consultants in Bengaluru',
    description:
      'Bengaluru property rentals, buying, selling, management, and new project launches from Dream Realty.',
    images: ['/Hero_section_images/Provident Park Square.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'real estate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: `window.chtlConfig = { chatbotId: "3365791432" }`}} />
        <script async data-id="3365791432" id="chtl-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script>
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
