import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' }
  ],
  colorScheme: 'light dark'
}

export const metadata: Metadata = {
  title: 'Hassan Omar Shamy - Full Stack Developer',
  description: 'Full-stack web developer specializing in React, Next.js, Node.js, and Python. Creating responsive, performant web applications with modern technologies.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Hassan Omar Shamy',
    'Hassan Omar',
    'Frontend Development',
    'Backend Development'
  ],
  authors: [{ name: 'Hassan Omar Shamy' }],
  creator: 'Hassan Omar Shamy',
  publisher: 'Hassan Omar Shamy',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hassanomar.dev',
    title: 'Hassan Omar Shamy - Full Stack Developer',
    description: 'Full-stack web developer specializing in React, Next.js, Node.js, and Python. Creating responsive, performant web applications with modern technologies.',
    siteName: 'Hassan Omar Shamy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassan Omar Shamy - Full Stack Developer',
    description: 'Full-stack web developer specializing in React, Next.js, Node.js, and Python. Creating responsive, performant web applications with modern technologies.',
    creator: '@hasan_omarHasan',
  },
  
  alternates: {
    canonical: 'https://hassanomar.dev',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>" />
      
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
