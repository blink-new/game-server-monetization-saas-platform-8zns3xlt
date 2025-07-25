import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import { createClient } from '@/blink/client'

const blink = createClient()

interface NavbarProps {
  user: any
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const handleLogin = () => {
    blink.auth.login()
  }

  const handleLogout = () => {
    blink.auth.logout()
  }

  const navigation = [
    {
      name: 'Game Studios',
      href: '#',
      dropdown: [
        { name: 'Game Monetization', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Payment methods', href: '#' },
        { name: 'Schedule a demo', href: '#' },
      ]
    },
    {
      name: 'Game Servers',
      href: '#',
      dropdown: [
        { name: 'Game Server Monetization', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Payment methods', href: '#' },
      ]
    },
    {
      name: 'Products & Solutions',
      href: '#',
      dropdown: [
        { name: 'Checkout', href: '#' },
        { name: 'Payments', href: '#' },
        { name: 'Subscriptions', href: '#' },
        { name: 'Payment Protection', href: '#' },
        { name: 'Engagement', href: '#' },
      ]
    },
    {
      name: 'Developers',
      href: '#',
      dropdown: [
        { name: 'Documentation', href: '#' },
        { name: 'Get Started', href: '#' },
        { name: 'Integration Methods', href: '#' },
        { name: 'Tebex.js', href: '#' },
      ]
    },
    { name: 'Blog', href: '#' },
    { name: 'Support', href: '#' },
  ]

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GP</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                GameStore Pro
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Dashboard
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" onClick={handleLogin}>
                  Log in
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handleLogin}>
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 p-0"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 dark:border-slate-700"
          >
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="w-9 h-9 p-0"
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>
                  
                  {user ? (
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={handleLogout}>
                        Logout
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Dashboard
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={handleLogin}>
                        Log in
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handleLogin}>
                        Get Started
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}