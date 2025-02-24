import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'

import { LP_GRID_ITEMS } from "lp-items"

// Dynamic imports with loading states
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  ssr: true,
})

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
  ssr: false,
})

// Lazy load non-critical components
const Header = lazy(() => import('@/components/shared/Header'))
const Footer = lazy(() => import('@/components/shared/Footer'))

// Preload critical components
const preloadComponents = () => {
  void import('@/components/shared/Header')
}

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function HomePage() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100">
      <div className="h-16 bg-gray-200" />
    </div>}>
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <Features />
        </Suspense>
      </main>
      <Footer />
    </Suspense>
  )
}
