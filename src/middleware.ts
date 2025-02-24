import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Middleware logic here
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}

// Example optimized page import
// filepath: /workspaces/nextjs-enterprise-boilerplate/src/app/page.tsx
import { Suspense, lazy } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// Lazy load non-critical components
const Header = lazy(() => import('@/components/shared/Header'))
const Footer = lazy(() => import('@/components/shared/Footer'))

// Preload critical data
export const preload = (props: any) => {
  void import('@/components/shared/Header')
}

export default function Page() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        {/* Page content */}
      </main>
      <Footer />
    </Suspense>
  )
}