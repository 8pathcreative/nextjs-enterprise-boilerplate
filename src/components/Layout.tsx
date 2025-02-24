import { Suspense, lazy } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

// Lazy load non-critical components
const Header = lazy(() => import('@/components/shared/Header'))
const Footer = lazy(() => import('@/components/shared/Footer'))
const Sidebar = lazy(() => import('@/components/shared/Sidebar'))

interface LayoutProps {
  children: React.ReactNode
}

// Preload critical components
const preloadCriticalComponents = () => {
  void import('@/components/shared/Header')
  void import('@/components/shared/Navigation')
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  // Preload on mount
  React.useEffect(() => {
    preloadCriticalComponents()
  }, [])

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="h-16 animate-pulse bg-gray-100" />}>
        <Header />
      </Suspense>
      
      <main>{children}</main>

      <Suspense fallback={<div className="h-16 animate-pulse bg-gray-100" />}>
        <Footer />
      </Suspense>
    </div>
  )
}