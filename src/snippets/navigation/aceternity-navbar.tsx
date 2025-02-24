import { motion } from "framer-motion"
import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface NavbarSnippet {
  id: string
  name: string
  description: string
  component: ReactNode
}

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const aceternityNavbarSnippet: NavbarSnippet = {
  id: "aceternity-navbar",
  name: "Aceternity UI Navbar",
  description: "Sleek, animated navbar with Framer Motion",
  component: (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "bg-white dark:bg-gray-900 shadow-md",
        "border-b border-gray-200 dark:border-gray-700"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              MyApp
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              ['Home', '/'],
              ['Advertising', '/advertising'],
              ['Playground', '/playground'],
              ['About', '/about'],
            ].map(([name, href]) => (
              <motion.div key={name} whileHover={{ scale: 1.05 }}>
                <Link 
                  href={href}
                  className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/login"
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/signup"
                className={cn(
                  "bg-blue-500 text-white px-4 py-2 rounded-md",
                  "hover:bg-blue-600 transition-colors"
                )}
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.div 
            className="flex items-center md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button className="text-gray-800 dark:text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            ['Home', '/'],
            ['Advertising', '/advertising'],
            ['Playground', '/playground'],
            ['About', '/about'],
            ['Login', '/login'],
          ].map(([name, href]) => (
            <motion.div 
              key={name}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <Link
                href={href}
                className="block text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                {name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link
              href="/signup"
              className={cn(
                "block bg-blue-500 text-white px-4 py-2 rounded-md",
                "hover:bg-blue-600 transition-colors"
              )}
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}