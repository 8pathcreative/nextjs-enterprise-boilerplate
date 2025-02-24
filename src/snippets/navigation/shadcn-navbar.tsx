import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface NavbarSnippet {
  id: string
  name: string
  description: string
  component: ReactNode
}

export const shadcnNavbarSnippet: NavbarSnippet = {
  id: "shadcn-navbar",
  name: "Shadcn/UI Navbar",
  description: "Modern, responsive navbar with dark mode support",
  component: (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              MyApp
            </a>
          </div>

          {/* Desktop Menu */}
          <div className={cn(
            "hidden md:flex space-x-8 items-center",
            "text-gray-800 dark:text-white"
          )}>
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/advertising" className="hover:text-blue-500">Advertising</a>
            <a href="/playground" className="hover:text-blue-500">Playground</a>
            <a href="/about" className="hover:text-blue-500">About</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button asChild>
              <a href="/signup">Sign Up</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block text-gray-800 dark:text-white hover:text-blue-500">
            Home
          </a>
          <a href="/advertising" className="block text-gray-800 dark:text-white hover:text-blue-500">
            Advertising
          </a>
          <a href="/playground" className="block text-gray-800 dark:text-white hover:text-blue-500">
            Playground
          </a>
          <a href="/about" className="block text-gray-800 dark:text-white hover:text-blue-500">
            About
          </a>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/login">Login</a>
          </Button>
          <Button className="w-full" asChild>
            <a href="/signup">Sign Up</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}