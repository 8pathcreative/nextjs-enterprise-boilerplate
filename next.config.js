const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')

import { HeroSection } from '@/components/HeroSection'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: '.next',
  experimental: {
    appDir: true,
    optimizeCss: true,
    turbo: {
      loaders: {
        '.js': ['swc-loader'],
      },
    },
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['your-domain.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    }
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)

export function middleware(request: NextRequest) {
  // Middleware logic here
  return NextResponse.next()
}

// Optional: Configure paths the middleware runs on
export const config = {
  matcher: '/api/:path*'
}