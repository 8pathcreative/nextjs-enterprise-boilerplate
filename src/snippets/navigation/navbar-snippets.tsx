import { ReactNode } from 'react'

interface NavbarSnippet {
  id: string
  name: string
  description: string
  component: ReactNode
}

export const navbarSnippets: NavbarSnippet[] = [
  {
    id: 'default-navbar',
    name: 'Default Navigation',
    description: 'Responsive navbar with authentication buttons',
    component: (
      <nav className="bg-white dark:bg-gray-900 shadow-md">
        {/* Your navbar code here */}
      </nav>
    )
  },
  {
    id: 'simple-navbar',
    name: 'Simple Navigation',
    description: 'Basic navigation without authentication',
    component: (
      <nav className="bg-white shadow-md">
        {/* Alternative navbar version */}
      </nav>
    )
  }
]