import React from 'react'
import { Suspense } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

// Optimized dynamic imports with preload
const Link = dynamic(() => import('next/link').then(mod => mod.default), {
  ssr: true,
  loading: null
})

// Preload critical components
const NavbarSnippets = dynamic(() => import('@/snippets/navigation/navbar-snippets').then(mod => mod.navbarSnippets), {
  ssr: true,
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
  preload: true
})

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
}

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        {/* Header content */}
      </nav>
    </header>
  )
}

export default Header