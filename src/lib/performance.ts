import { NextWebVitalsMetric } from 'next/app'
import { Analytics } from '@vercel/analytics'

export const reportWebVitals = ({ id, name, label, value }: NextWebVitalsMetric) => {
  if (process.env.NODE_ENV !== 'production') return

  // Send to analytics
  Analytics.track(name, {
    id,
    name,
    label,
    value,
    page: window.location.pathname,
  })

  // Log core web vitals
  if (name === 'FCP' || name === 'LCP' || name === 'CLS' || name === 'FID') {
    console.log(`${name}:`, value)
  }
}