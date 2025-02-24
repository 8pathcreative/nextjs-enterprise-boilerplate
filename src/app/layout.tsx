import "styles/tailwind.css"
import React from 'react';
import { JSX } from 'react/jsx-runtime';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
